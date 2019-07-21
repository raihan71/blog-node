const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Add x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// Add application type
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// connect to mongodb
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to db');
}).catch(err => {
    console.log('Couldnt connect to db',err);
    process.exit();
});

// Routes
require('./app/routes/blog.routes')(app);

// Define route
app.get('/',(req,resp) => {
    resp.json({"data":true,"message":"Hello World"});
});

// Listen port
app.listen(3000, ()=> {
    console.log('Listening app on port 3000');
    
});