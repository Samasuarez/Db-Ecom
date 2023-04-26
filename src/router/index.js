// const sessionController = require('../users/controler.users')
const authController = require('../auth/controler.auth')
// const productsController = require('../products/controler.products')
const usersController = require('../users/controler.users')                                                   
const viewsTemplateController = require('../viewsTemplate/controller.viewsTemplate')

const router = app => {
  app.use('/', viewsTemplateController)
  app.use('/auth', authController)
  app.use('/users', usersController)
//   app.use('/users', usersController)
}

module.exports = router