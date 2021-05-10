const express = require('express');
const router = express.Router();

const {getProducts, newProducts , getSingleProduct, updateProduct} = require('../controllers/productController');



router.route('/products').get(getProducts);
router.route('/admin/product/new').post(newProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/:id').put(updateProduct);
module.exports = router;