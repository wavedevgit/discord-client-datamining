/** chunk id: 965957, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => s
});
var r = n(73153),
    i = n(954571),
    a = n(312671),
    o = n(652215);

function s(e, t) {
    i.default.track(o.HAw.SOUNDPACK_UPDATED, {
        soundpack: e,
        previous_soundpack: a.A.getSoundpack()
    }), r.h.dispatch({
        type: "SET_SOUNDPACK",
        soundpack: e,
        forExperimentId: t
    })
}