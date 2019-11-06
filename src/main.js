import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import app from "./App.vue"
import VueRouter from 'vue-router'
import router from "./router"


import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(VueRouter)
Vue.use(Mint);

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    render:e=>e(app),
    router:router
})