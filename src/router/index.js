const sessionController = require('../users/controler.users')
const productsController = require('../products/controler.products')

const router = app => {
  app.use('/session', sessionController)
  app.use('/products', productsController)
}

module.exports = router