/** chunk id: 545167, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => l
});
var i = n(945810),
    a = n(723702);
let r = (0, i.mj)({
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

function l(e) {
    if (!(0, a.isDesktop)()) return !1;
    let {
        allowEnhancedNav: t
    } = r.getConfig(e);
    return t
}