const express = require('express');
const { createReserva, getReservas } = require('../controllers/reservaController');

const router = express.Router();

router.post('/', createReserva);
router.get('/', getReservas);

module.exports = router;
