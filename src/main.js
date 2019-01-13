import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
const router = new VueRouter({routes: []})

Vue.config.productionTip = false

Vue.prototype.$lv = {
    $router: router,
    go(path, param) {
        import('src/page' + path + '.vue').then(module => {
            this.$router.options.routes.push({
                name: path,
                path: path,
                component: module.default
            })
            this.$router.addRoutes(this.$router.options.routes)
        })
        this.$router.push(path, param)
    },
    back() {
        window.history.back()
    }
}

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
