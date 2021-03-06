import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
const router = new VueRouter({routes: []})

Vue.config.productionTip = false

Vue.prototype.$lv = {
    $router: router,
    push(path, query) {
        /*路由跳转*/
        const next = () => this.$router.push({path, query})
        if (this.$router.options.routes.some(route => route.name === path)) {
            next()
        } else {
            /*页面分开打包，按需加载，只打包以page结尾的.vue文件，不以page结尾的表示页面公共的组件，分开打包，按需引入*/
            import('src/page' + path + '-page.vue').then(module => {
                const route = {name: path, path: path, component: module.default}
                /*添加路由信息*/
                this.$router.options.routes.push(route)
                this.$router.addRoutes([route])
                next()
            })
        }
    },
    back() {
        window.history.back()
    }
}

new Vue({
    router,
    render: h => h(App),
    beforeCreate() {
        if (this.$route.path !== '/') {
            this.$lv.push(this.$route.path)
        }
    },
}).$mount('#app')
