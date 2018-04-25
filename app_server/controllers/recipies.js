/**Get home page*/
module.exports.index = function(req,res) {
    res.render('index',{ title: 'Recipies For Clouders'});
};

module.exports.recipeList = function(req,res) {
    res.render('recipeList', { title: 'ListOfRecipies',
        recipes: [{
            name: 'Pancakes',
            content: 'Sugar,milk,flour,eggs'    
        },{
            name: 'Mac n Cheese',
            content: 'Macaroni, Cheese'
        }
        ]
    });
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
