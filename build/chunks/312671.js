/** Chunk was on web.js **/
/** chunk id: 312671, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(235079);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = {
    soundpack: o.i.CLASSIC,
    lastSoundpackExperimentId: null
};

function c(e) {
    let {
        soundpack: t,
        forExperimentId: n
    } = e;
    l = {
        soundpack: t,
        lastSoundpackExperimentId: void 0 !== n ? n : l.lastSoundpackExperimentId
    }
}
class u extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (l = e, Object.values(o.i).includes(l.soundpack) || (l.soundpack = o.i.CLASSIC))
    }
    getState() {
        return l
    }
    getSoundpack() {
        return l.soundpack
    }
    getLastSoundpackExperimentId() {
        return l.lastSoundpackExperimentId
    }
}
s(u, "displayName", "SoundpackStore"), s(u, "persistKey", "SoundpackStore");
let d = new u(a.h, {
    SET_SOUNDPACK: c
})