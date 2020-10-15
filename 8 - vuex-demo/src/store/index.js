import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    sub1(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context, step) {
      setTimeout(() => {
        context.commit('add', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subAsync1(context, step) {
      setTimeout(() => {
        context.commit('sub1', step)
      }, 1000)
    }
  },
  getters: {
    showNum(state) {
      return '当前最新值为 ' + state.count
    }
  },
  modules: {},
})
