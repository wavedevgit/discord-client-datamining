/** chunk id: 377168 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    q: () => a
});
var i = n(600975),
    r = n(996744),
    l = n(688151);
let a = (0, i.C)({
    kind: "user",
    id: "2025-06_voice_filters_ea",
    label: "Voice Filters EA",
    defaultConfig: {
        enabled: null
    },
    commonTriggerPoint: l.$G.CONNECTION_OPEN,
    treatments: [{
        id: 0,
        label: "User don't see voice filters EA",
        config: {
            enabled: null
        }
    }, {
        id: 1,
        label: "User sees voice filters EA",
        config: {
            enabled: !0
        }
    }]
});

function s(e) {
    let {
        location: t
    } = e, {
        enabled: n
    } = a.useExperiment({
        location: t
    }, {
        autoTrackExposure: !1
    }), i = (0, r.Cg)({
        location: "VoiceFiltersEarlyAccess",
        autoTrackExposure: !0
    });
    return n && i
}