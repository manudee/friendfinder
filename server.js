var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;


var friends = require('./app/data/friend.js');
//sets up the express app to handle data parsing
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);


//displaying friends attributes
console.log('friends ' + friends[0].name);
console.log('friends ' + friends[0].photo);
console.log('friends ' + friends[0].scores);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
