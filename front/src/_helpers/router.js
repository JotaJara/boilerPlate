import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../views/HomePage'
import AdminPage from '../views/AdminPage'
import LoginPage from '../views/LoginPage'
import RegisterPage from '../views/RegisterPage'
import { Role } from '@/_helpers/role'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      meta: {
        authorize: []
      }
    },
    { path: '/admin', component: AdminPage, meta: { authorize: [Role.Admin] } },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },

    // otherwise redirect to home
    { path: '*', redirect: '/login' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const currentUser = localStorage.getItem('user')
  const { authorize } = to.meta
  if (authorize) {
    if (authRequired && !currentUser) {
      // not logged in so redirect to login page with the return url
      return next({ path: '/login', query: { returnUrl: to.path } })
    }
    // check if route is restricted by role
    /* if (authorize.length && !authorize.includes(currentUser.role)) {
      // role not authorised so redirect to home page
      return next({ path: '/home' })
    } */
  }
  next()
})
