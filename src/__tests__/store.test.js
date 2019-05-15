import { actions } from '@/store.js'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue();

localVue.use(Vuex);

test('"UPDATE_COMPANY" updates the "state.company.Name" with name "Microsoft"', () => {
  let company

  let mockCommit = (state, payload) => {
    company = payload
  }

  actions.createCompany({ commit: mockCommit}, {Name: "Microsoft"})
  expect(company.Name).toBe("Microsoft")
})

test('"UPDATE_COMPANY" updates the "state.company.Spend" with Spend "$100,000"', () => {
  let company

  let mockCommit = (state, payload) => {
    company = payload
  }

  actions.createCompany({ commit: mockCommit }, { Spend: "$100,000" })
  expect(company.Spend).toBe("$100,000")
})

test('"UPDATE_COMPANY" updates the "state.company.SpendAbilityMin" with SpendAbilityMin "$152,500"', () => {
  let company

  let mockCommit = (state, payload) => {
    company = payload
  }

  actions.createCompany({
    commit: mockCommit
  }, {
    SpendAbilityMin: "$152,500"
  })
  expect(company.SpendAbilityMin).toBe("$152,500")
})

test('"UPDATE_COMPANY" updates the "state.company.SpendAbilityMin" with SpendAbilityMin "$152,500"', () => {
  let company

  let mockCommit = (state, payload) => {
    company = payload
  }

  actions.createCompany({
    commit: mockCommit
  }, {
    SpendAbilityMin: "$152,500"
  })
  expect(company.SpendAbilityMin).toEqual(expect.not.stringMatching("$153,500"))
})