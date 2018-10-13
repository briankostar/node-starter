var express = require('express');
var router = express.Router();
let sampleCtrl = require('../controllers').sample


router.route('/')
    .get(sampleCtrl.getAll)
    .post(sampleCtrl.create);

router.param('id', sampleCtrl.load);

router.route('/:id')
    .get(sampleCtrl.get)
    .put(sampleCtrl.update)
    .delete(sampleCtrl.remove);

module.exports = router;
