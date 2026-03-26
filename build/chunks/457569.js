/** chunk id: 457569 params = (module,exports,require) **/
a.d(t, {
    A: () => n
});
let r = (0, a(945810).mj)({
    name: "2026-03-enable-premium-group-cta",
    kind: "user",
    defaultConfig: {
        enabled: !1
    },
    variations: {
        0: {
            enabled: !1
        },
        1: {
            enabled: !0
        }
    }
});

function n(e) {
    let {
        location: t
    } = e, {
        enabled: a
    } = r.useConfig({
        location: t
    });
    return a
}