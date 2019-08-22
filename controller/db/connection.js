
/*
const mongo = require('mongoose');

const db = mongo.connect('mongodb+srv://peter:tw4lhiy4@cluster0-pjjfo.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, function(err){
    if(err) throw err;
    console.log('The Mongo db is on');
});

module.exports = db;
*/

const monk = require ('monk');
const db = monk('mongodb+srv://peter:tw4lhiy4@cluster0-pjjfo.mongodb.net/test?retryWrites=true&w=majority');

module.exports = db;