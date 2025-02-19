const Pago = require('../models/Pago');

exports.createPago = async (req, res) => {
    try {
        const nuevoPago = new Pago(req.body);
        await nuevoPago.save();
        res.status(201).json(nuevoPago);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPagos = async (req, res) => {
    try {
        const pagos = await Pago.find();
        res.status(200).json(pagos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
