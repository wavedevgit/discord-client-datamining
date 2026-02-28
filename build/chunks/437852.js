/** chunk id: 437852, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => d,
    Fq: () => i,
    qe: () => o
});
var a = r(600975),
    n = r(945810),
    _ = r(688151);
let i = (0, n.mj)({
        name: "2025-10-seasonal-gifting-2025",
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
    o = (0, a.C)({
        id: "2025-11_seasonal_gifting_2025_reminder",
        label: "Seasonal Gifting 2025 Reminder",
        kind: "user",
        defaultConfig: {
            enabled: !1
        },
        commonTriggerPoint: _.$G.CONNECTION_OPEN,
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    }),
    d = i