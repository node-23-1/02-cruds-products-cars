const catchError = require('../utils/catchError');
const Product = require('../models/Product');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const products = await Product.findAll(); // select * from products;
    return res.json(products);
});

const create = catchError(async(req, res) => {
    const { name, price, category } = req.body;
    const product = await Product.create({   // insert into products () values ()
        name: name,
        price: price,
        category: category
    });
    return res.status(201).json(product);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    return res.json(product);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Product.destroy({ where: { id } }); // delete from products where id = 
    return res.sendStatus(204);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove
}