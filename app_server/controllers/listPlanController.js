/**
 * Created by sharmava on 2/22/16.
 */

module.exports.listPlan = function(req,res){
    res.render('listPlan',{title : 'List Plan',
        message : 'Get list of plans here'});
};