/** chunk id: 639555, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Rv: () => i
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

function i(t) {
    let {
        location: e
    } = t, {
        enabled: n
    } = r.useExperiment({
        location: e
    }, {
        autoTrackExposure: !1
    });
    return n
}