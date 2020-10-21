const express = require('express');
const router = express.Router();

const videoService = require('../services/video.service');

// video routes
router.get('/', (req, res) => {
    videoService.getVideos(req, res);
});

router.get('/:id', (req, res) => {
    videoService.getVideosById(req, res);
});

router.post('/', (req, res) => {
    videoService.postVideo(req, res);
});

router.put('/:id', (req, res) => {
    videoService.putVideo(req, res);
});

router.delete('/:id', (req, res) => {
    videoService.deleteVideo(req, res);
});

module.exports = router;