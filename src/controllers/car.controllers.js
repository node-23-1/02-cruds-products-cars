const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const cars = await Car.findAll();
    return res.json(cars);
});

module.exports = {
    getAll
}
