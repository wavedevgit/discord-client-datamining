/** chunk id: 259788 params = (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    GI: () => d,
    J5: () => l,
    g_: () => u,
    jc: () => o,
    nj: () => c,
    nl: () => s
});
var i = n(839214);
let a = {
        timeToLiveMs: 5e3,
        reappearTimeMs: 1e4
    },
    r = (0, i.D)(() => a),
    s = 1e4,
    l = 2e4,
    o = 500,
    d = 1e3;

function c(e) {
    r.setState({
        timeToLiveMs: e
    })
}

function u(e) {
    r.setState({
        reappearTimeMs: e
    })
}
let _ = r