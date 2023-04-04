const state = () => ({
  accounts: null
})

const mutations = {
  'GET_ACCOUNTS' (state) {
    state.showLoader = true
  },
  'GET_ACCOUNTS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_ACCOUNTS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_ACCOUNTS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.accounts = payload
  }
}

const actions = {
  async _fetchaccounts ({ commit }) {
    commit('GET_ACCOUNTS')
    await this.$api
      .$get('/accounts')
      .then((response) => {
        commit('GET_ACCOUNTS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_ACCOUNTS_ERROR')
      })
  }
}

const getters = {
  accounts: (state) => {
    return state.accounts
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
