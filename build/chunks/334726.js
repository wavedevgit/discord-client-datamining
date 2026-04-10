/** chunk id: 334726 params = (module,exports,require) **/
n.d(t, {
    i: () => r,
    r: () => a
});
var i = n(945810),
    s = n(890164);
let l = (0, i.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: {
            copyChanges: !1,
            upsell: !1
        },
        variations: {
            0: {
                copyChanges: !1,
                upsell: !1
            },
            1: {
                copyChanges: !0,
                upsell: !1
            },
            2: {
                copyChanges: !0,
                upsell: !0
            }
        }
    }),
    r = e => {
        let t = (0, s.lX)(e),
            n = l.useConfig({
                location: e
            });
        return t || n.copyChanges
    },
    a = e => (0, s.W1)(e) || l.getConfig({
        location: e
    }).upsell