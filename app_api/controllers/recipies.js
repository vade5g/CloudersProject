require('dotenv').load();
/* Controller for the api, Send back HTTP status updates and responses in JSON format */
var AWS = require("aws-sdk");
//AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY});
AWS.config.update({
    region: "us-west-2",
    //endpoint: "http://localhost:8000"
    endpoint: "https://dynamodb.us-west-2.amazonaws.com"
  });
  var docClient = new AWS.DynamoDB.DocumentClient()
  var table = "Movies";
  var recipeNumber = 1;
  var stringSomething;

module.exports.recipiesGetList = function (req,res) {
    var year = 2013;
    var title = "Rush";
    var params = {
        TableName : "Movies",
        KeyConditionExpression: "#yr = :yyyy",
        ExpressionAttributeNames:{
            "#yr": "year"
        },
        ExpressionAttributeValues: {
            ":yyyy":2013
        }
    };
    docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query succeeded.");
            data.Items.forEach(function(item) {
                console.log(item);
                res.render('recipeList', { title: 'ListOfRecipies',
                recipes: data.Items
                });  
            });
            
        }
    });
    /* docClient.get(params, function(err, data) {
        if (err) {
            res.status(404);
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.status(200);            

            res.render('recipeList', { title: 'ListOfRecipies',
            recipes: [{
                name: "This is the data",
                content: (JSON.stringify(data))
            }]
            });
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    }); */

};



/**All the HTTP Request under this are just place holders, remember to change them. */
module.exports.recipiesCreate = function (req,res) {
    var year = 2015;
    var title = "The Big New Movie";
    var params = {
        TableName:table,
        Item:{
            "year": year,
            "title": title,
            "info":{
                "plot": "Nothing happens at all.",
                "rating": 0
            }
        }
    }
    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        console.log(params);
        if (err) {
            res.status(404);
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.status(200);
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
};
module.exports.recipiesReadOne = function (req,res) {
    var year = 2013;
    var title = req.params[0];
    console.log();

    var params = {
        TableName: table,
        Key:{
            "year": year,
            "title": title
        }
    };
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.status(400);
        } else {
            res.render('recipe', { title: 'One Recipe',
            recipe: data.Item
        });
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.status(200);
        }
    });

};
module.exports.recipiesUpdateOne = function (req,res) {
    res.status(200);
    res.json({"status" : "success"});

};
module.exports.recipiesDeleteOne = function (req,res) {
    res.status(200);
    res.json({"status" : "success"});

    var sendJsonResponse = function(res, status, content) {
        res.status(status);
        res.json(content);
    };

};

