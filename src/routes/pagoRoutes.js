const express = require('express');
const { createPago, getPagos } = require('../controllers/pagoController');

const router = express.Router();

router.post('/', createPago);
router.get('/', getPagos);

module.exports = router;
