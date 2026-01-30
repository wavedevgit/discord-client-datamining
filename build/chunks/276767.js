/** chunk id: 276767, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => s
});
var r = n(665260),
    i = n(600975),
    a = n(788868);
let o = (0, i.C)({
        kind: "user",
        id: "2025-02_reverse_trial_perk_access_kill_switch",
        label: "Reverse Trial Perk Access Kill Switch",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Prevent perk access for users with reverse trials",
            config: {
                enabled: !0
            }
        }]
    }),
    s = (e, t) => null != t && !!(0, r.Lt)(t.purchasedFlags, a.lA.ON_REVERSE_TRIAL) && o.getCurrentConfig({
        location: e
    }, {
        autoTrackExposure: !1
    }).enabled