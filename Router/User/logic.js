let bcrypt = require('bcrypt-nodejs');
let crypto = require('crypto');
let salt_make = require('../MakeSalt');

exports.signIn = (req, res) => {
    let salt = salt_make.makeSalt();
    const cipher = crypto.createCipher('aes-256-cbc', salt);
    const cipher1 = crypto.createCipher('aes-256-cbc', salt);
    let num = req.query.num;
    console.log(num);
    let arr = [];
    let arr1 = [];

    arr.push(cipher.update(num, 'utf8', 'base64'));
    arr.push(cipher.final('base64'));

    arr1.push(cipher1.update('1', 'utf8', 'base64'));
    arr1.push(cipher1.final('base64'));

    console.log(arr);
    console.log(arr1);
    if (arr[1] == arr1[1]) {
        console.log('same');
    }
    // console.log(result);

    var decipher = crypto.createDecipher('aes-256-cbc', salt);
    var decipher1 = crypto.createDecipher('aes-256-cbc', salt);
    var plainChunks = [];
    var plainChunks1 = [];
    plainChunks.push(decipher.update(arr[1], 'base64', 'utf8'));
    plainChunks.push(decipher.final('utf8'));

    plainChunks1.push(decipher1.update(arr1[1], 'base64', 'utf8'));
    plainChunks1.push(decipher1.final('utf8'));

    console.log(plainChunks);
    console.log(plainChunks1);

};


exports.signUp = (req, res) => {
    console.log('signUp')
};