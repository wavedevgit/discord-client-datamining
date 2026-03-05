/** chunk id: 813077, original params: e,t,n (module,exports,require) **/
n.d(t, {
    FW: () => l,
    wI: () => s
});
let i = (0, n(945810).mj)({
        name: "2026-02-store-country-display",
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
    }),
    s = e => i.useConfig({
        location: e
    }).enabled,
    l = e => i.getConfig({
        location: e
    }).enabled