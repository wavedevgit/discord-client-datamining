/** chunk id: 259788, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => h,
    GI: () => u,
    J5: () => o,
    g_: () => d,
    jc: () => s,
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
    o = 2e4,
    s = 500,
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