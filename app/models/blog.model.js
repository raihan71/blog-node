const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: String,
    img:String,
    description:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog',BlogSchema);