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
    let a = getInitial();
    let c = a.concat(b);
}

module.exports = {
    beforeAll,
    test
};
