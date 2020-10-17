const express = require('express');
const router = express.Router();

// const heroService = require('./hero.service');
const videoService = require('./services/video.service');

router.get('/videos', (req, res) => {
    videoService.getVideos(req, res);
});

router.get('/video/:id', (req, res) => {
    videoService.getVideosById(req, res);
});

router.post('/video', (req, res) => {
    videoService.postVideo(req, res);
});

router.put('/video/:id', (req, res) => {
    videoService.putVideo(req, res);
});

router.delete('/video/:id', (req, res) => {
    videoService.deleteVideo(req, res);
});

module.exports = router;