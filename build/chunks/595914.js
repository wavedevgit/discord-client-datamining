/** chunk id: 595914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
let l = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_announcement_composer",
    label: "announcement composer",
    defaultConfig: {
        announcementComposer: !1
    },
    treatments: [{
        id: 1,
        label: "show announcement composer",
        config: {
            announcementComposer: !0
        }
    }]
});

function r(e) {
    return l.useExperiment({
        location: e
    }, {
        autoTrackExposure: !0
    }).announcementComposer
}