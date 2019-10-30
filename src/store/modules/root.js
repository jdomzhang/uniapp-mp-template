const state = {
  token: '',
  site: {},
  siteInfos: [],
  membership: {},
  user: {}
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  }
}

const actions = {
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  setUser({ commit }, user) {
    commit('SET_USER', user)
  }
}

export default {
  state,
  mutations,
  actions
}
