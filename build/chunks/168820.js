/** Chunk was on 1636 **/
/** chunk id: 168820, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => a
});
var r = n(945810),
    i = n(332628);
let l = (0, r.mj)({
    name: "2025-12-video-stats-for-nerds",
    kind: "user",
    defaultConfig: {
        enableVideoStatsForNerds: !1
    },
    variations: {
        0: {
            enableVideoStatsForNerds: !1
        },
        1: {
            enableVideoStatsForNerds: !0
        }
    }
});

function a(e) {
    let {
        location: t
    } = e, {
        isInHoldout: n
    } = i.i.getCurrentConfig({
        location: t
    }, {
        autoTrackExposure: !0
    });
    return n ? {
        enableVideoStatsForNerds: !1
    } : l.getConfig({
        location: t
    })
}