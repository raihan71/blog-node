module.exports = (app) => {
    const blogs = require('../controllers/blog.controller');

    // Create Operation
    app.post('/blogs',blogs.create);
    // Get all data
    app.get('/blogs',blogs.all);
    // Show by id
    app.get('/blogs/:blogId',blogs.show);
    // Update by id
    app.put('/blogs/:blogId',blogs.update);
    // Delete by id
    app.delete('/blogs/:blogId',blogs.delete);

};