import Vue from 'vue'
import App from './App'
// import MpvueRouterPatch from 'mpvue-router-patch'
// import Router from 'uni-vue-router'
// import Router from 'uni-vue-router'
import router from './utils/router'
import api from './api/index'
import Vuex from 'vuex'

import store from '@/store'
import * as pages from '@/utils/pages'

// Vue.use(MpvueRouterPatch)
Vue.use(Vuex)
// Vue.use(Router)

// const router = new Router()

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.app = getApp()
Vue.prototype.$api = api
Vue.prototype.$name = 'uniapp模版'
Vue.prototype.$store = store
Vue.prototype.$pages = pages
Vue.prototype.$router = router
