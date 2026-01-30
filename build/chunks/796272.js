/** chunk id: 796272, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    getForceSdrEmojisStickersConfig: () => o
});
var r = n(945810),
    i = n(332628);
let a = (0, r.mj)({
    kind: "user",
    name: "2025-10-force-sdr-emojis-stickers",
    defaultConfig: {
        enabled: !1
    },
    variations: {
        0: {
            enabled: !1
        },
        1: {
            enabled: !0
        }
    }
});

function o(e) {
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
        enabled: !1
    } : a.getConfig({
        location: t
    })
}