export default ({ app, route, from, store, redirect }) => {
  app.router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated
    if (!isAuthenticated && to.path !== '/signin') {
      //store.dispatch('_logoutsession')
      next()
    } else {
      next()
    }
  })
  app.router.afterEach((to, from) => {
  })
}
