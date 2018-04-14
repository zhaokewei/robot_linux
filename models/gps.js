const mongoose = require('mongoose');

const gps_schema = new mongoose.Schema({
    longtitude: Number,
    latitude: Number,
    speed: Number,
    accuracy: Number, //米
    type: Number,     //http://lbs.amap.com/api/android-location-sdk/guide/utilities/location-type/
    provider: String,
    bearing: Number,
    create_date: Date,
    update_date: Date
});

module.exports = mongoose.model('gps', gps_schema);