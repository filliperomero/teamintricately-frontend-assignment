import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const state = {
    company: {
      Name: "",
      Spend: "",
      SpendAbilityMin: "",
      SpendAbilityMax: "",
      notes: "",
    }
  }
  export const mutations = {
    UPDATE_COMPANY(state, payload) {
      state.company = Object.assign(state.company, payload);
    }
  }

  export const actions = {
    createCompany({ commit }, payload) {
      commit('UPDATE_COMPANY', payload)
    }
  }

export default new Vuex.Store({
  state,
  mutations,
  actions
})
