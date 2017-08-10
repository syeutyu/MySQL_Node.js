exports.makeSalt = () => {
    return Math.round((new Date().valueOf() * Math.random())) + '';

};