const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/products', require('./routes/products'));
app.use('/api/v1/categories', require('./routes/categories'));
app.use('/api/v1/users', require('./routes/users'));

module.exports = app;