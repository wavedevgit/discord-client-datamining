/** chunk id: 177975, original params: t,e,n (module,exports,require) **/
n.d(e, {
    R: () => r
});
let l = (0, n(600975).C)({
    kind: "user",
    id: "2025-04_custom_status_clear_after_times",
    label: "Custom Status Clear After Times Experiment",
    defaultConfig: {
        enabled: !1
    },
    treatments: [{
        id: 1,
        label: "Enable custom status clear after times",
        config: {
            enabled: !0
        }
    }]
});

function r(t) {
    let {
        location: e,
        autoTrackExposure: n = !0
    } = t, {
        enabled: r
    } = l.useExperiment({
        location: e
    }, {
        autoTrackExposure: n
    });
    return r
}