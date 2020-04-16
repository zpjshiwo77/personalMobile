import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'

const templete = r => require.ensure([], () => r(require('../page/templete/templete')), 'templete')
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '',
                    redirect: '/index'
                },
                {
                    path: '/index',
                    component: index
                },
                {
                    path: '/templete',
                    component: templete
                }
            ]
        }
    ]
})
