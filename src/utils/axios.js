import axios from "axios";

const api = axios.create({
    baseURL: '/',
    withCredentials: true //쿠키 전송 허용
})

// 요청 interceptor
api.interceptors.request.use(config => {
  return config;
});

// 응답 interceptor
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    //refresh Token 까지 만료됐을 때
    // if (error.response && error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    //     // 1. refreshToken으로 accessToken 재발급하는 방식이면 token을 쿠키가 아닌곳에 가지고 있어야..
    //     await axios.post('/api/auth/refresh', {}, { withCredentials: true });
    //     // 2. 재발급 후 원래 요청 재시도
    //     return api(originalRequest);
    //   } catch (refreshError) {
    //     // refreshToken도 만료 → 로그아웃 처리
    //     console.error('RefreshToken 만료, 재로그인 필요');
    //     window.location.href = '/login'; // 로그인 페이지로 이동
    //     return Promise.reject(refreshError);
    //   }
    // }
    console.log(error.response.status);
    console.log(error.response.status);
    console.log(error.response.status);
    

    if (error.response && error.response.status === 401) {
        alert('로그인이 필요합니다');
        window.location.href = '/login'; // 로그인 페이지로 이동
        return Promise.reject(refreshError);
    }

    return Promise.reject(error);
  }
);



export { api }