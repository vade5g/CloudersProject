var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/recipies');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlMain.index);

/**Get other recipies */
router.get('/recipies', ctrlMain.recipeList);
router.get('/recipe', ctrlMain.viewRecipe);
router.get('/recipe/new', ctrlMain.addRecipe);

/*Other pages*/
router.get('/about', ctrlOthers.about);


module.exports = router;
