var express = require('express');
var router = express.Router();
var ctrlRecipies = require('../controllers/recipies');

// locations
router.get('/recipies', ctrlRecipies.recipiesGetList);
router.post('/recipies', ctrlRecipies.recipiesCreate);
router.get('/recipies/:recipeid', ctrlRecipies.recipiesReadOne);
router.put('/recipies/:recipeid', ctrlRecipies.recipiesUpdateOne);
router.delete('/recipies/:recipeid', ctrlRecipies.recipiesDeleteOne);


module.exports = router;