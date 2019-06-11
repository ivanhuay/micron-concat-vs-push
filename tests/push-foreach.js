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
    b.forEach((elm) => {
        a.push(elm);
    });
}

module.exports = {
    beforeAll,
    test
};
