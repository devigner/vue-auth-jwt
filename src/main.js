import { authDirects } from './redirects'
import { authMethods } from './auth-methods'

export default {
  install: function (app, options) {
    options.router.beforeEach((to, from, next) => {
      authDirects(to, next, options.store, options.config.loginRoute);
    })

    app.component('auth', authMethods(options.store, options.config))
  }
}
