/*Route to about*/ 
module.exports.about = function(req,res) {
    res.render('about',{ title: 'About'});
};