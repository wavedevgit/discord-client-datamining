/** chunk id: 338234, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Uw: () => r,
    fC: () => l
});
let n = (0, i(600975).C)({
    kind: "guild",
    id: "2026-02_voice_user_hover_activities",
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

function l(t) {
    let {
        guildId: e,
        location: i
    } = t;
    return n.useExperiment({
        guildId: e,
        location: i
    }, {
        autoTrackExposure: !0
    })
}

function r(t) {
    let {
        guildId: e,
        location: i
    } = t;
    return n.getCurrentConfig({
        guildId: e,
        location: i
    }, {
        autoTrackExposure: !0
    })
}