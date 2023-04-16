const state = () => ({
  showLoader: Boolean,
  msisdn: null,
  account: null,
  authenticated: false,
  accessToken: null

})

const mutations = {
  'AUTHENTICATE' (state) {
    state.showLoader = true
  },
  'AUTHENTICATE_FAILED' (state) {
    state.showLoader = false
  },
  'AUTHENTICATE_ERROR' (state) {
    state.showLoader = false
  },
  'AUTHENTICATE_SUCCESS' (state, payload) {
    state.showLoader = false

    state.msisdn = payload.msisdn
    state.account = payload
    state.isAuthenticated = true
    state.accessToken = payload.accessToken
    localStorage.setItem('msisdn', payload.msisdn)
    this.$router.push('/')
  },
  'LOGOUT_SESSION' (state) {
    window.localStorage.clear()
    sessionStorage.clear()
    this.$router.push('/signin')
    state.msisdn = null
    state.authenticated = false
    // window.location.reload(true)
  },

  'UPDATPASSWORD_SUCCESS' (state, payload) {
    state.showLoader = false
    state.authenticated = true
    if (payload.responseCode === 0) {
      this.$router.push('/')
    }
  },
  'UPDATPASSWORD_ERROR' (state) {
    state.showLoader = false
  },
  'SAVE_MSISDN' (state, payload) {
    localStorage.setItem('msisdn', payload.phoneNumber)
    state.msisdn = payload.phoneNumber
    this.$router.push('/verify')
  }
}
const actions = {
  _savemsisdn ({ commit }, payload) {
    commit('SAVE_MSISDN', payload)
  },
  async _authenticate ({ commit }, requestbody) {
    commit('AUTHENTICATE')
    await this.$api
      .$post('/otp/verify', requestbody)
      .then((response) => {
        commit('AUTHENTICATE_SUCCESS', response)
      })
      .catch(() => {
        commit('AUTHENTICATE_ERROR')
      })
  },

  async _requestotp ({ commit }, requestbody) {
    await this.$api
      .$post('/otp', requestbody)
      .then((response) => {
        commit('SAVE_MSISDN', requestbody)
      })
      .catch(() => {
        commit('UPDATPASSWORD_ERROR')
      })
  },

  async _logoutsession ({ commit }) {
    await commit('LOGOUT_SESSION')
  }
}
const getters = {
  msisdn: function (state) {
    return state.msisdn
  },
  accessToken: function (state) { return state.accessToken },
  isAuthenticated: function (state) {
    return localStorage.getItem('accessToken') !== undefined
  }

}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
