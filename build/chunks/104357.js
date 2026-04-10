/** chunk id: 104357 params = (module,exports,require) **/
n.d(t, {
    T: () => l
});
let i = (0, n(945810).mj)({
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

function l(e) {
    let {
        location: t
    } = e;
    return i.useConfig({
        location: t
    }).enabled
}