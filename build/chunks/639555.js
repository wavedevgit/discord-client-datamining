/** chunk id: 639555, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Rv: () => l
});
let r = (0, n(600975).C)({
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

function l(e) {
    let {
        location: t
    } = e, {
        enabled: n
    } = r.useExperiment({
        location: t
    }, {
        autoTrackExposure: !1
    });
    return n
}