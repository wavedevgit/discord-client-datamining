/** chunk id: 259788 params = (module,exports,require) **/
n.d(t, {
    Ay: () => h,
    GI: () => u,
    J5: () => a,
    g_: () => c,
    jc: () => o,
    nj: () => d,
    nl: () => s
});
var i = n(839214);
let l = {
        timeToLiveMs: 5e3,
        reappearTimeMs: 1e4
    },
    r = (0, i.D)(() => l),
    s = 1e4,
    a = 2e4,
    o = 500,
    u = 1e3;

function d(e) {
    r.setState({
        timeToLiveMs: e
    })
}

function c(e) {
    r.setState({
        reappearTimeMs: e
    })
}
let h = r