/** chunk id: 104357, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => a
});
var i = n(945810),
    r = n(916023);
let l = (0, i.mj)({
    name: "2025-12-social-layer-storefront-rtc-entrypoint-user-experiment",
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

function a(e) {
    let {
        location: t
    } = e, n = (0, r.kt)({
        location: t
    }), i = l.useConfig({
        location: t
    }).enabled;
    return n && i
}