module.exports = function reverse (n) {
    n = n + '';
    return n.replace(/\D/g, '').split('').reverse().join('');
};

