/** Chunk was on web.js **/
/** chunk id: 479715, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AQ: () => a,
    ZA: () => i
});
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-01-profile-updates-notification",
    defaultConfig: {
        showSettingsToggle: !1
    },
    variations: {
        0: {
            showSettingsToggle: !1
        },
        1: {
            showSettingsToggle: !0
        },
        2: {
            showSettingsToggle: !0
        }
    }
});

function i(e) {
    return r.useConfig({
        location: e
    })
}

function a(e) {
    return r.getConfig({
        location: e
    }).showSettingsToggle
}