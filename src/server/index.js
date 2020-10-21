const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const videoRoutes = require('./controllers/video.route');
const configRoutes = require('./controllers/config.route');

const publicweb = './publicweb';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

// routes
app.use('/api/videos', videoRoutes);
app.use('/api/config', configRoutes);

app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.PORT || '3000';
app.listen(port, () => console.log(`API running on localhost:${port}`));