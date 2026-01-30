/** chunk id: 338234, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Uw: () => i,
    fC: () => l
});
let r = (0, n(600975).C)({
    kind: "guild",
    id: "2025-01_voice_user_activities",
    label: "Voice User Activities on Hover",
    defaultConfig: {
        enableUserHoverActivities: !1
    },
    treatments: [{
        id: 1,
        label: "Enable activities on user hover",
        config: {
            enableUserHoverActivities: !0
        }
    }]
});

function l(e) {
    let {
        guildId: t,
        location: n
    } = e;
    return r.useExperiment({
        guildId: t,
        location: n
    }, {
        autoTrackExposure: !0
    })
}

function i(e) {
    let {
        guildId: t,
        location: n
    } = e;
    return r.getCurrentConfig({
        guildId: t,
        location: n
    }, {
        autoTrackExposure: !0
    })
}