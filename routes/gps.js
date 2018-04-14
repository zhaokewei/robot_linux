var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const gps_model = require('../models/gps');

/*  */
router.get('/', function(req, res, next) {
    const gps = new gps_model({
        longtitude: 1,
        latitude: 1,
        speed: 1,
        create_date: new Date()
    });
    gps.save().then(()=> console.log("save succ"));
    res.send("good");
});

router.post('/notify', function (req, res, next) {
    const gps = new gps_model({
        longtitude: req.body.longtitude,
        latitude: req.body.latitude,
        speed: req.body.speed,
        accuracy: req.body.accuracy,
        type: req.body.type,
        provider: req.body.provider,
        bearing: req.body.bearing,
        create_date: new Date(),
        update_date: new Date()
    });
    gps.save();

    console.log(req.body.longtitude, req.body.latitude);
    res.send(JSON.stringify({
        status: 0,
        msg: 'SUCC',
        data: {}
    }))
});

router.get('/history', function (req, res, next) {
    gps_model.find().exec(function (err, data) {
        res.json(data);
    })
});

module.exports = router;
