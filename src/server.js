const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reservaRoutes = require('./routes/reservaRoutes');
const pagoRoutes = require('./routes/pagoRoutes');
const { requestLogger } = require('./utils/logger');
const stockRoutes = require('./routes/stockRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(requestLogger); 

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error de conexión a la base de datos:', err));

app.use('/api/reservas', reservaRoutes);
app.use('/api/pagos', pagoRoutes);
app.use('/api/stock', stockRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
