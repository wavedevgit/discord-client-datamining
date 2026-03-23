/** chunk id: 235390 params = (module,exports,require) **/
n.d(t, {
    MA: () => a
});
let i = (0, n(600975).C)({
    kind: "user",
    id: "2025-04_ignore_user_feedback",
    label: "Ignore User Feedback Experiment",
    defaultConfig: {
        enabled: !1,
        shouldGetShorterIgnoreDuration: !1
    },
    treatments: [{
        id: 1,
        label: "Enable Ignore User Feedback Survey",
        config: {
            enabled: !0,
            shouldGetShorterIgnoreDuration: !1
        }
    }, {
        id: 2,
        label: "Enable Ignore User Feedback Survey w/ shorter duration for testing",
        config: {
            enabled: !0,
            shouldGetShorterIgnoreDuration: !0
        }
    }]
});

function a(e) {
    return i.getCurrentConfig({
        location: e
    }, {
        autoTrackExposure: !0
    })
}