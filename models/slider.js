const mongoose = require('mongoose');
const slider = mongoose.Schema({
    title : String,
    subTitle : String,
    imgUrl : String,
})

const slide = mongoose.model('slide', slider);

module.exports = slide;