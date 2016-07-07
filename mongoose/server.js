var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 3000;
var app = express();


// We need to make a connection to our mongo database using mongoose connect

require('mongoose').connect('mongodb://localhost/devartists');


// Keep this server file really light and move routes and middleware to a separate folder

// setup the app middlware
require('./middleware/appMiddlware')(app);

app.use(bodyParser.json());
app.use(cors());



function fireEvents(){
    // do a bunch of stuff
}

function makeRegex(req,res,next) {
    if(req.query) console.log(req.query);
    next()
}

/*
 * ROUTES
 */

// post
// Create a post route that will take whatever is on req.body and save it to the database

app.post('/api/posts', function(req, res){
    db.posts.save(req.body, function(err, response){
        if(err) return res.status(500).json(err);
        else return res.json(response);
    });
});

// get

// create a get request that will find a specific post
app.get('/api/posts', makeRegex, function(req,res) {
    var query = {};
    if(req.query.name) query.name = new RegExp(req.query.name);
    if(req.query.date) query.date = req.query.date;
    if(req.query.id) query._id = mongoJS.ObjectId(req.query.id);

    db.posts.find(query, function(err, response){
        if(err) res.status(500).json(err);
        else res.json(response);
    });
});




// put

app.put('/api/posts',function(req,res) {
    db.posts.findAndModify({query: {_id: mongoJS.ObjectId(req.query.id)}, update: {$set: req.body },new: true},
        function(err, response){
        if(err) res.status(500).json(err);
        else res.json(response);
    })
});


// delete
app.delete('/api/posts', function(req,res) {
    db.posts.remove({_id: mongoJS.ObjectId(req.query.id)}, function(err, response){
        if(err) res.status(500).json(err)
        else return res.json(response);
        fireEvents()
    })
})

app.listen(port, function(){
    console.log('Now listening on port: ', port);
});