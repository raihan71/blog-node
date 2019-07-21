const Blog = require('../models/blog.model');


// Create the blog
exports.create = (req, resp) => {
    if(!req.body.description){
        return resp.status(400).send({
            message: "Content cannot be empty"
        })
    }

    // Save blog
    const blog = new Blog({
        title: req.body.title || "Untitled Blog",
        img: req.body.img || 'this is image',
        description: req.body.description,
    });

    blog.save().then(data => {
        resp.status(200).send({
            data: data,
            message: "Successfully added to database"
        });
    }).catch(err => {
        resp.status(500).send({
            message: err.message || "Something happended! we're trying figured out what happended sit back and relax."
        });
    });

};

// Get the blog
exports.all = (req,resp) => {
    Blog.find().then(blogs => {
        resp.send(blogs);
    }).catch(err => {
        resp.status(500).send({
            message: err.message || "Something happended! we're trying figured out what happended sit back and relax."
        });
    })
};

// Show the blog
exports.show = (req,resp) => {

};

// Update the blog 
exports.update = (req,resp) => {

};

exports.delete = (req,resp) => {

};