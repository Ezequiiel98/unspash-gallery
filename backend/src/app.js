const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');

const app = express();
const imagesRoutes = require('./routes/images.routes.js');

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(helmet());

app.use('/api/images', imagesRoutes);

module.exports = app;
