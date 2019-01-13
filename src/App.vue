<template>
    <div id="app">
        <div class="header">
            <button @click="$lv.go('/student/student',{name:'hello world'})">打开学生页面</button>
            <button @click="$lv.go('/student/student-detail')">打开学生详情页面</button>
            <button @click="$lv.go('/teacher/teacher')">打开老师页面</button>
        </div>
        <div class="page">

            <!--页面不缓存（路由跳转之后会销毁页面vue实例，重新跳转回此路由会重新初始化页面）-->
            <router-view></router-view>

            <!--页面缓存（路由跳转，切换回来的时候页面仍然没有变化）-->
            <!--<keep-alive>
                <router-view></router-view>
            </keep-alive>-->
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
