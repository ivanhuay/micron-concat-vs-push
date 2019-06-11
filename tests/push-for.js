let b = [];
function beforeAll() {
    for(let i = 0; i < 1000; i++) {
        b.push(i * 2);
    }
}
function getInitial() {
    return [1, 2, 3];
}
function test() {
    var a = getInitial();
    for(let i = 0; i < b.length; i++) {
        a.push(b[i]);
    }
}

module.exports = {
    beforeAll,
    test
};
