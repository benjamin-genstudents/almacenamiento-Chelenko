const express = require('express');
const { createStock, getStockByHotel } = require('../controllers/stockController');

const router = express.Router();

router.post('/', createStock);
router.get('/:hotelId', getStockByHotel);

module.exports = router;
