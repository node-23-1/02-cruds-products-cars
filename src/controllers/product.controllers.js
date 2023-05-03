const catchError = require('../utils/catchError');
const Product = require('../models/Product');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const products = await Product.findAll(); // select * from products;
    return res.json(products);
});

module.exports = {
    getAll
}