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
let r = {
        timeToLiveMs: 5e3,
        reappearTimeMs: 1e4
    },
    l = (0, i.D)(() => r),
    s = 1e4,
    a = 2e4,
    o = 500,
    u = 1e3;

function d(e) {
    l.setState({
        timeToLiveMs: e
    })
}

function c(e) {
    l.setState({
        reappearTimeMs: e
    })
}
let h = l