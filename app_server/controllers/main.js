/**
 * Created by sharmava on 2/21/16.
 */
module.exports.index = function(req, res){
    res.render('index',{title : 'Project October'});
};

module.exports.indexMain = function(req, res){
    res.render('index',{title : 'Project October Main'});
};