import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1000
  },
  mutations: {
    madd(state) {
      state.num += 10
    }
  },
  actions: {
    acadd(context) {
      context.commit('madd')
    }
  },
  modules: {
  }
})
