/** Chunk was on 38763 **/
/** chunk id: 664531, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a,
    a: () => l
});
let i = (0, n(600975).C)({
        kind: "user",
        id: "2022-08_back_to_school",
        label: "Back to School Event",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Back to School experience enabled",
            config: {
                enabled: !0
            }
        }]
    }),
    a = i;

function l() {
    return i.getCurrentConfig({
        location: "68acbb_1"
    }, {
        autoTrackExposure: !1
    }).enabled
}