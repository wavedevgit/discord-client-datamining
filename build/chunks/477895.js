/** Chunk was on 82575 **/
/** chunk id: 477895, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Bf: () => s,
    Oi: () => l
});
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-01-friend-is-online-notif-rate-limits",
    defaultConfig: {
        showSettingsToggle: !1
    },
    variations: {
        1: {
            showSettingsToggle: !0
        },
        2: {
            showSettingsToggle: !0
        },
        3: {
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