const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = require('express')();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
//app.use(helmet());e




module.exports = app;
