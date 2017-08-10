let router = require('express').Router();
let logic = require('./logic');

router.route('/System/get').get(logic.signIn);
router.route('/System/post').post(logic.signUp);

module.exports = router;