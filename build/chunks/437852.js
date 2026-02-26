/** chunk id: 437852, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    Ay: () => o,
    Fq: () => l,
    qe: () => r
});
var n = i(600975),
    s = i(945810),
    a = i(688151);
let l = (0, s.mj)({
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
    r = (0, n.C)({
        id: "2025-11_seasonal_gifting_2025_reminder",
        label: "Seasonal Gifting 2025 Reminder",
        kind: "user",
        defaultConfig: {
            enabled: !1
        },
        commonTriggerPoint: a.$G.CONNECTION_OPEN,
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    }),
    o = l