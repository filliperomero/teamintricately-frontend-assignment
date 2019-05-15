import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Companydata from './components/Companydata.vue'
import CompanyTable from './components/CompanyTable.vue'
import CompanyPage from './components/CompanyPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: '',
      component: Home,
      children: [
        {
          path: '/',
          name: 'CompanyData',
          component: Companydata
        },
        {
          path: 'CompanyTable',
          name: 'CompanyTable',
          component: CompanyTable
        },
        {
          path: 'CompanyPage',
          name: 'CompanyPage',
          component: CompanyPage
        }
      ]
    }
  ],
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
})
