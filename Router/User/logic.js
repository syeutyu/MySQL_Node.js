let bcrypt = require('bcrypt-nodejs');

exports.signIn = (req, res) => {
    let num = req.query.num;
    console.log(num);
    let num1 = 1;
    console.log(bcrypt.hashSync(num));
    console.log(bcrypt.hashSync(num1));
    if (bcrypt.hashSync(num) == bcrypt.hashSync(num1)) {
        console.log('µ¿µî');
    }
};

exports.signUp = (req, res) => {
    console.log('signUp')
};