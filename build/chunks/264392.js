/** chunk id: 264392 params = (module,exports,require) **/
n.d(t, {
    i: () => l
});
var i = n(527815);

function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4e3;
    return new Promise(t => {
        let n = setTimeout(() => {
            t()
        }, e);
        (0, i.t)(() => {
            clearTimeout(n), t()
        })
    })
}