/** chunk id: 864145, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K5: () => o,
    UL: () => a,
    X9: () => s
});
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    id: "2024-11_soundmoji_rendering",
    label: "Render soundmojis",
    kind: "user",
    defaultConfig: {
        enabled: !1
    },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [{
        id: 1,
        label: "Enabled",
        config: {
            enabled: !0
        }
    }]
});

function o(e) {
    let {
        location: t
    } = e;
    return a.getCurrentConfig({
        location: t
    }, {
        autoTrackExposure: !1
    }).enabled
}

function s(e) {
    let {
        location: t
    } = e;
    return a.useExperiment({
        location: t
    }, {
        autoTrackExposure: !1
    }).enabled
}