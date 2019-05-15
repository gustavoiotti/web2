const mongoos = require('mongoose');

mongoose.connect('mongodb://localhost/nodetest', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;