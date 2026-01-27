/** Chunk was on 93140 **/
/** chunk id: 37770, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F: () => s,
    I: () => c
});
var r = n(311907),
    i = n(250105),
    l = n(217222),
    o = n(128319);
let a = (0, i.Ay)({
    name: "2025-10-windows-mute-detection",
    kind: "user",
    defaultConfig: {
        windowsMuteAndZeroVolumeDetectionEnabled: !1
    },
    variations: {
        1: {
            windowsMuteAndZeroVolumeDetectionEnabled: !0
        }
    }
});

function s(e) {
    let {
        location: t
    } = e, {
        isInHoldout: n
    } = o.p.getCurrentConfig({
        location: t
    }, {
        autoTrackExposure: !0
    });
    return n ? a.definition.defaultConfig : a.getConfig({
        location: t
    })
}

function c(e) {
    let {
        location: t
    } = e;
    return (0, r.bG)([l.A], () => s({
        location: t
    }))
}