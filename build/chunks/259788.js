/** chunk id: 259788, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => h,
    GI: () => u,
    J5: () => s,
    g_: () => d,
    jc: () => o,
    nj: () => c,
    nl: () => a
});
var i = n(839214);
let r = {
        timeToLiveMs: 5e3,
        reappearTimeMs: 1e4
    },
    l = (0, i.D)(() => r),
    a = 1e4,
    s = 2e4,
    o = 500,
    u = 1e3;

function c(e) {
    l.setState({
        timeToLiveMs: e
    })
}

function d(e) {
    l.setState({
        reappearTimeMs: e
    })
}
let h = l