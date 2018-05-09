require('dotenv').load();
var AWS = require("aws-sdk");
var fs = require('fs');

//AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY});
AWS.config.update({accessKeyId: 'AKIAITYF2GKYZWVZIS2A',secretAccessKey: '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'})
AWS.config.update({
    region: "us-west-2",
    //endpoint: "http://localhost:8000"
    endpoint: "https://dynamodb.us-west-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'));
allMovies.forEach(function(movie) {
    var params = {
        TableName: "Movies",
        Item: {
            "year":  movie.year,
            "title": movie.title,
            "info":  movie.info
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", movie.title);
       }
    });
});