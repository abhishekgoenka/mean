const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/local-environment');

// when using mlab
const mongoUri = `mongodb://${env.un}:${env.pwd}@ds044979.mlab.com:${env.port}/${env.dbName}`;

function connect() {
    mongoose.set('debug', true);
    return mongoose.connect(mongoUri, {useNewUrlParser: true});
}

module.exports = {
    connect,
    mongoose
};
