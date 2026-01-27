/** Chunk was on 60667 **/
/** chunk id: 110919, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => i
});
let r = (0, n(600975).C)({
        kind: "user",
        id: "2023-12_pause_subscriptions_experiment",
        label: "Pause Subscriptions Experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Pause Subscription Enabled",
            config: {
                enabled: !0
            }
        }]
    }),
    i = e => {
        let {
            location: t,
            autoTrackExposure: n = !0,
            trackExposureOptions: i = {}
        } = e;
        return r.useExperiment({
            location: t
        }, {
            autoTrackExposure: n,
            trackExposureOptions: i
        })
    }