const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    // id: { type: Number, required: true, unique: true, auto: true },
    title: String,
    url: String,
    description: { type: String, required: false }
  },
  {
    collection: 'videos',
    read: 'nearest'
  }
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;