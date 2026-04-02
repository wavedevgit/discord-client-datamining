/** chunk id: 558593 params = (module,exports,require) **/
n.d(t, {
    q: () => l
});
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-02_game_claim_coachmark",
    label: "Game Claim Coachmark",
    defaultConfig: {
        enabled: !1
    },
    treatments: [{
        id: 1,
        label: "Enable Game Claim Coachmark",
        config: {
            enabled: !0
        }
    }]
});

function l(e, t) {
    return i.useExperiment({
        guildId: e,
        location: t
    }, {
        autoTrackExposure: !1
    }).enabled
}