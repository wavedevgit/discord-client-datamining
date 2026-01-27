/** Chunk was on 82575 **/
/** chunk id: 49111, original params: e,t,n (module,exports,require) **/
n.d(t, {
    LK: () => l,
    _9: () => s
});
let i = (0, n(945810).mj)({
    name: "2025-12-server-trending-notification",
    kind: "user",
    defaultConfig: {
        showSettingsToggle: !1
    },
    variations: {
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