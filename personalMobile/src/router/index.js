import Vue from 'vue'
import App from '../APP'
import Router from 'vue-router'

const templete = r => require.ensure([], () => r(require('../page/templete/templete')), 'templete')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
            path: '/templete',
            component: templete
        }
      ]
    }
  ]
})
