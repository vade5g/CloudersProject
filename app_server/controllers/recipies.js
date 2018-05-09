/**Get home page*/
module.exports.index = function(req,res) {
    res.render('index',{ title: 'Recipies For Clouders'});
};

module.exports.recipeList = function(req,res) {

    res.render('recipeList', { title: 'ListOfRecipies',
        recipes:[{
            name: 'Pancakes',
            content: 'Sugar,milk,flour,eggs'    
        },{
            name: 'Mac n Cheese',
            content: 'Macaroni, Cheese'
        }
        ]
    });
};

//Used For Postman when working locally and testing the REST structure.
module.exports.getRecipies = function (req, res) {
    var data = ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email()
    });
    res.status(200).send(data);
};
module.exports.viewRecipe = function(req,res) {
    res.render('recipe', {title: 'One Recipe',
        recipe: {
            name: 'something',
            content: 'another thing'
        }
});
}
module.exports.addRecipe = function(req,res) {
    res.render('addRecipe', {title: 'Add Recipe'});
}
