/**
 * Created by sharmava on 2/22/16.
 */

module.exports.editPlan = function(req,res){
    res.render('editPlan',{title : 'Edit Plan',
        message : 'Edit existing plan here'});
};