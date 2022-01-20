const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/senharest');
mongoose.Promise = global.Promise;

module.exports = mongoose;