/** Chunk was on 82575 **/
/** chunk id: 479715, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AQ: () => l,
    ZA: () => s
});
let i = (0, n(945810).mj)({
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

function s(e) {
    return i.useConfig({
        location: e
    })
}

function l(e) {
    return i.getConfig({
        location: e
    }).showSettingsToggle
}