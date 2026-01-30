/** chunk id: 809976, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    oK: () => l,
    ty: () => c
});
var r = n(923457),
    i = n(600975),
    a = n(207560);
let o = (0, i.C)({
        kind: "user",
        id: "2025-01_default_activity_status",
        label: "Guild activity status defaults",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable new defaults",
            config: {
                enabled: !0
            }
        }]
    }),
    s = (0, i.C)({
        kind: "user",
        id: "2025-01_default_activity_status_new_users",
        label: "Guild activity status defaults",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable new defaults",
            config: {
                enabled: !0
            }
        }]
    }),
    l = e => o.getCurrentConfig({
        location: e
    }, {
        autoTrackExposure: !1
    }).enabled || s.getCurrentConfig({
        location: e
    }, {
        autoTrackExposure: !1
    }).enabled || (0, a.To)(r.p.GUILD_ACTIVITY_STATUS),
    c = e => {
        let t = o.useExperiment({
                location: e
            }, {
                autoTrackExposure: !1
            }).enabled,
            n = s.useExperiment({
                location: e
            }, {
                autoTrackExposure: !1
            }).enabled,
            i = (0, a.yv)(r.p.GUILD_ACTIVITY_STATUS);
        return t || n || i
    }