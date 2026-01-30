/** chunk id: 319191, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => d
});
var i, a = n(311907),
    o = n(73153),
    s = n(194486);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = () => {
    r = r === s.B.BASIC ? s.B.PREMIUM : s.B.BASIC
};
class u extends(i = a.Ay.PersistedStore) {
    initialize(e) {
        var t;
        r = null != (t = null == e ? void 0 : e.animationType) ? t : s.B.PREMIUM
    }
    getState() {
        return {
            animationType: r
        }
    }
}
l(u, "displayName", "VoiceChannelEffectsPersistedStore"), l(u, "persistKey", "VoiceChannelEffectsPersistedStore");
let d = new u(o.h, {
    VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: c
})