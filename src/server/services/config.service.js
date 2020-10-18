const Video = require('../models/video.model');
const ReadPreference = require('mongodb').ReadPreference;

require('../mongo').connect();

function reset(req, res) {

    const docquery = Video.find({}).read(ReadPreference.NEAREST);
    docquery
        .exec()
        .then(videos => {
            // remove all the collections
            videos.forEach(async (e) => {
                await Video.findOneAndRemove({ _id: e.id });
            })

            // seed records
            seedRecords().forEach(async (r) => {
                const video = new Video(r);
                await video.save();
            })

            res.status(200).json({});
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function seedRecords() {
    return [
        {
            "title": "Apple iphone 12 launched",
            "url": "https://www.youtube.com/embed/ydiKeSnk0hc",
            "description": "Apple iphone 12 launched - How iphone 12 series will impact 5G sector? #UPSC #IAS\niphone 12 first look, iphone 12 pro unboxing, iphone 12 mini unboxing, apple iphone 12 event, iphone 12 5g, iphone 12 vs, iphone 12 leaks, iphone 12 max, iphone 12 release, iphone 12 trailer",
        },
        {
            "title": "Java Tutorial for Beginners",
            "url": "https://www.youtube.com/embed/eIrMbAQSU34",
            "description": "Java tutorial for beginners - Learn Java, the language behind millions of apps and websites",
        },
        {
            "title": "What is .NET? | .NET Core 101 [1 of 8]",
            "url": "https://www.youtube.com/embed/eIHKZfgddLM",
            "description": "This tutorial explains what is .NET anyway? .NET is an open source development platform which is just a way of saying it's a collection of languages and libraries that can all work together to build all kinds of apps!",
        },
        {
            "title": "Python Programming Tutorial for Beginners",
            "url": "https://www.youtube.com/embed/QXeEoD0pB3E",
            "description": "Python Became the Best Programming Language of 2018",
        },
        {
            "title": "What happens when you do a Google search?",
            "url": "https://www.youtube.com/embed/hfNXK2W_yCU",
            "description": "Chapter 4: What happens when you do a Google search?",
        }
    ]
}

module.exports = {
    reset
}