<template>
    <header>
        <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">사이트 맵</h4>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/" class="text-white">메인화면</router-link>
                            </li>
                            <li>
                                <router-link to="/login" class="text-white">로그인</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

    