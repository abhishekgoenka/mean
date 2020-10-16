const Video = require('../models/video.model');
const ReadPreference = require('mongodb').ReadPreference;

require('../mongo').connect();


function getVideos(req, res) {
    const docquery = Video.find({}).read(ReadPreference.NEAREST);
    docquery
        .exec()
        .then(videos => {
            res.status(200).json(videos);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function getVideosById(req, res) {
    const docquery = Video.findById(req.params.id).read(ReadPreference.NEAREST);
    docquery
        .exec()
        .then(video => {
            res.status(200).json(video);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function postVideo(req, res) {
    const originaVideo = { title: req.body.title, url: req.body.url, description: req.body.description };
    const video = new Video(originaVideo);
    video.save((error, inserted) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(inserted);
        console.log('Video created successfully!');
    });
}

function putVideo(req, res) {
    Video.findById(req.params.id, (error, video) => {
        if (checkServerError(res, error)) return;
        if (!checkFound(res, video)) return;

        video.title = originalVideo.title;
        video.url = originalVideo.url;
        video.description = originalVideo.description;
        video.save(error => {
            if (checkServerError(res, error)) return;
            res.status(200).json(video);
            console.log('Video updated successfully!');
        });
    });
}

function deleteVideo(req, res) {
    Video.findOneAndRemove({ _id: req.params.id })
      .then(video => {
        if (!checkFound(res, video)) return;
        res.status(200).json(video);
        console.log('Video deleted successfully!');
      })
      .catch(error => {
        if (checkServerError(res, error)) return;
      });
  }

function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error.message);
        return error;
    }
}

function checkFound(res, video) {
    if (!video) {
      res.status(404).send('video not found.');
      return;
    }
    return video;
  }

module.exports = {
    getVideos,
    getVideosById,
    postVideo,
    putVideo,
    deleteVideo
}