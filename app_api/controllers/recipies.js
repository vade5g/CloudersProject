/* Controller for the api, Send back HTTP status updates and responses in JSON format */
module.exports.recipiesGetList = function (req,res) {
    res.status(200);
    res.json({"status" : "success"});
};

/**All the HTTP Request under this are just place holders, remember to change them. */
module.exports.recipiesCreate = function (req,res) {
    res.status(200);
    res.json({"status" : "success"});

};
module.exports.recipiesReadOne = function (req,res) {
    res.status(200);
    res.json({"status" : "success"});

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

