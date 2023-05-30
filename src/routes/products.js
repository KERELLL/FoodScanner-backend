const express = require('express')
const bodyParser = require('body-parser');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/details/:barcode', productsController.getProduct);

router.get('/list', productsController.getProducts);

router.get('/list/restricted', productsController.getRestrictedProducts);

router.get('/list/valid', productsController.getValidProducts);

router.put('/addToFavorite', productsController.addToFavorite);

router.get('/favorites', productsController.getFavorites);

router.get('/barcodeScanHistory', productsController.getBarcodeHistory);

router.get('/parse', productsController.getProductsParse);

router.get('/search/', productsController.getProductSearch);

router.get('/isProductValid/:product_id', productsController.getIsProductValid);

module.exports = router;