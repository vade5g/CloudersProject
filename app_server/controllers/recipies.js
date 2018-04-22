/**Get home page*/
module.exports.index = function(req,res) {
    res.render('index',{ title: 'Recipies For Clouders'});
};

module.exports.recipeList = function(req,res) {
    res.render('recipeList', { title: 'ListOfRecipies'});
}
module.exports.viewRecipe = function(req,res) {
    res.render('recipe', {title: 'One Recipe'});
}
module.exports.addRecipe = function(req,res) {
    res.render('addRecipe', {title: 'Add Recipe'});
}