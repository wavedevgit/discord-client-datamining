/** chunk id: 545167, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => a
});
var i = n(945810),
    r = n(723702);
let l = (0, i.mj)({
    name: "2026-02-bf-browser",
    kind: "user",
    defaultConfig: {
        allowEnhancedNav: !0
    },
    variations: {
        1: {
            allowEnhancedNav: !1
        }
    }
});

function a(e) {
    if (!(0, r.isDesktop)()) return !1;
    let {
        allowEnhancedNav: t
    } = l.getConfig(e);
    return t
}