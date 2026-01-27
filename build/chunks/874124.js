/** Chunk was on web.js **/
/** chunk id: 874124, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(258585),
    i = n(787931),
    a = n(753070);

function o(e, t, n, o, s, l) {
    if (e === a.jQ.PRESET_AUTO) return (0, r.eO)({
        location: "canStreamWithSettings"
    }).allowAutoQuality;
    for (let r of a.ZV)
        if ((null == r.preset || e === r.preset) && t === r.resolution && n === r.fps && (0, i.A)(r, o, s, l)) return !0;
    return !1
}