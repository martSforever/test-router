<template>
    <div id="app">
        <div class="header">
            <button @click="go">跳转</button>
        </div>
        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        mounted() {

        },
        methods: {
            go() {
                this.$lv.go('/student/student-page')
            },
        }
    }
</script>

<style>
    #app {

    }

    .page {
        height: 100px;
        background-color: #f2f2f2;
    }
</style>
