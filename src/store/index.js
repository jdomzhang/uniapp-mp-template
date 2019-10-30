import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import root from './modules/root'

const storage = {
  getItem: (key) => wx.getStorageSync(key),
  setItem: (key, value) => wx.setStorageSync(key, value),
  removeItem: (key) => wx.clearStorage()
}

const persistedState = (key) =>
  createPersistedState({ key: key, paths: [key], storage })

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    root: { namespaced: false, ...root }
  },
  plugins: [persistedState('root')]
})

export default store
