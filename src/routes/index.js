const express = require('express');
const productRouter = require('./product.router');
const carRouter = require('./car.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/products', productRouter);
router.use('/cars', carRouter)

module.exports = router;

// workspace > collections > requests
