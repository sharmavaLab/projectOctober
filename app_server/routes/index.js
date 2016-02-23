var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var homeCtr = require('../controllers/homePageController');
var addPlanCtrl = require('../controllers/addPlanController');
var editPlanCtrl = require('../controllers/editPlanController');
var listPlanController = require('../controllers/listPlanController');


/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/main', ctrlMain.indexMain);

router.get('/home', homeCtr.home);
router.get('/plan/addPlan', addPlanCtrl.addPlan);
router.get('/plan/editPlan', editPlanCtrl.editPlan);
router.get('/plan/listPlan',listPlanController.listPlan);

module.exports = router;
