/** chunk id: 334726, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => r,
    r: () => l
});
var i = n(945810),
    s = n(890164);
let a = (0, i.mj)({
        name: "2026-02-activity-privacy-matching",
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
    r = e => {
        let t = (0, s.lX)(e),
            n = a.useConfig({
                location: e
            }).enabled;
        return t || n
    },
    l = e => (0, s.W1)(e) || a.getConfig({
        location: e
    }).enabled