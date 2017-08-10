let router = require('express').Router();
let logic = require('./logic');

router.route('/get').get(logic.signIn);
router.route('/post').post(logic.signUp);

module.exports = router;