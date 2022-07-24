const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res) {
  Product.find({}, function(err, foundProducts) {
    console.log("product.find")
    return res.json(foundProducts)
  })
})

router.get('/:productId', function(req, res) {
  const productId = req.params.productId
  Product.findById(productId, function(err, foundProduct) {
    console.log("product.findById")
    if (err) {
      // https://developer.mozilla.org/ja/docs/Web/HTTP/Status
      return res.status(422).send({
        errors: [{
          title: 'Product error',
          detail: 'Product not found',
        }]
      })
    }
    return res.json(foundProduct)
  })
})

module.exports = router
