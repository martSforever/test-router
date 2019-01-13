import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
const router = new VueRouter({routes: []})

Vue.config.productionTip = false

Vue.prototype.$lv = {
    $router: router,
    go(path, query) {
        /*路由跳转*/
        const next = () => this.$router.push({path, query})
        if (this.$router.options.routes.some(route => route.name === path)) {
            next()
        } else {
            /*页面分开打包，按需加载*/
            import('src/page' + path + '-page.vue').then(module => {
                const route = {
                    name: path,
                    path: path,
                    component: module.default
                }
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
}).$mount('#app')
