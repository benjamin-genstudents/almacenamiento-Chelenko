const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, required: true },
    fecha: { type: Date, required: true },
    cantidadDisponible: { type: Number, required: true },
});

module.exports = mongoose.model('Stock', stockSchema);
