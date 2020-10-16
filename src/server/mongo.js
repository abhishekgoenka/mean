const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/local-environment');

// eslint-disable-next-line max-len
// const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`; //&replicaSet=globaldb`;

// when using mlab
const mongoUri = `mongodb://abhishek:abhishek123@ds044979.mlab.com:44979/mean-application`;

function connect() {
    mongoose.set('debug', true);
    return mongoose.connect(mongoUri, {useNewUrlParser: true});
}

module.exports = {
    connect,
    mongoose
};
