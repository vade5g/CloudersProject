var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/recipies');
var ctrlOthers = require('../controllers/others');
var ctrlDatabase = require('./../../app_api/controllers/recipies');
/* GET home page. */
router.get('/', ctrlMain.index);

/**Get other recipies */
//router.get('/recipies', ctrlMain.recipeList);
router.get('/recipe', ctrlDatabase.recipiesReadOne);
router.get('/recipe/*',ctrlDatabase.recipiesReadOne);
router.get('/recipe/new', ctrlMain.addRecipe);
router.get('/recipies', ctrlDatabase.recipiesGetList);
router.post('/recipies',ctrlDatabase.recipiesCreate);
/*Other pages*/
router.get('/about', ctrlOthers.about);


module.exports = router;
