const Stock = require('../models/Stock');

exports.createStock = async (req, res) => {
    try {
        const nuevoStock = new Stock(req.body);
        await nuevoStock.save();
        res.status(201).json(nuevoStock);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getStockByHotel = async (req, res) => {
    try {
        const stock = await Stock.find({ hotelId: req.params.hotelId });
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
