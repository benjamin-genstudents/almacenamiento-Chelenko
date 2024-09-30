const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    reservaId: { type: mongoose.Schema.Types.ObjectId, required: true },
    monto: { type: Number, required: true },
    metodoPago: { type: String, required: true },
    fechaPago: { type: Date, default: Date.now },
    estado: { type: String, enum: ['completado', 'pendiente', 'fallido'], default: 'pendiente' },
});

module.exports = mongoose.model('Pago', pagoSchema);
