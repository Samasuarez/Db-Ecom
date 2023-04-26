const { Router } = require("express");
const Products = require("../models/products.models");
const router = Router()
router.get('/', async (req, res) => {
    try {
      const products = await Products.find()
      res.json('realtimeproducts', products)
    } catch (error) {
      res.status(500).json({ status: 'error', error: error.message })
    }
  })
module.exports = router