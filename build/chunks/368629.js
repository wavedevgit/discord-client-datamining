/** Chunk was on 42944 **/
/** chunk id: 368629, original params: e,a,n (module,exports,require) **/
n.d(a, {
    r: () => l
});
let t = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_user_profile_holdout_h2",
    label: "User Profile Holdout H2 Experiment",
    defaultConfig: {
        isInHoldout: !1
    },
    treatments: [{
        id: 1,
        label: "Is in holdout",
        config: {
            isInHoldout: !0
        }
    }]
});

function l(e) {
    let {
        location: a,
        autoTrackExposure: n = !0
    } = e, {
        isInHoldout: l
    } = t.useExperiment({
        location: a
    }, {
        autoTrackExposure: n
    });
    return l
}