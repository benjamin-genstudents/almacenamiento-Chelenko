const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, required: true },
    usuarioId: { type: mongoose.Schema.Types.ObjectId, required: true },
    fechaReserva: { type: Date, required: true },
    fechaCheckin: { type: Date, required: true },
    fechaCheckout: { type: Date, required: true },
    estado: { type: String, enum: ['activo', 'cancelado'], default: 'activo' },
});

module.exports = mongoose.model('Reserva', reservaSchema);
