var express = require('express')
const morgan = require('morgan');
const logger = require('./logger');
var app = express()

// log server start
logger.info('Server Started')


// logger examples
// logger.error('Error log example');
// logger.warn('Warn log example');
// logger.info('Info log example');

// Use morgan for dynamic logging
app.use(morgan('tiny', { stream: logger.stream }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
 res.send('hello world')
})

// list to a particular port
app.listen(3000)