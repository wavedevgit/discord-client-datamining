/** chunk id: 639555 params = (module,exports,require) **/
n.d(e, {
    Rv: () => l
});
let i = (0, n(600975).C)({
    kind: "user",
    id: "2025-01_inappropriate_conversations_new_defaults",
    label: "Inappropriate Conversation Warning Default On",
    defaultConfig: {
        enabled: !1
    },
    treatments: [{
        id: 1,
        label: "Inappropriate Conversation Warnings On",
        config: {
            enabled: !0
        }
    }]
});

function l(t) {
    let {
        location: e
    } = t, {
        enabled: n
    } = i.useExperiment({
        location: e
    }, {
        autoTrackExposure: !1
    });
    return n
}