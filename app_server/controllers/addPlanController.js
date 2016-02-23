/**
 * Created by sharmava on 2/22/16.
 */

module.exports.addPlan = function(req,res){
    res.render('addPlan',{title : 'New Plan',
                          message : 'Create new plan here'});
};