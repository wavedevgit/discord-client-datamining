/** Chunk was on web.js **/
/** chunk id: 476697, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048);
var r = n(874124),
    i = n(753070);

function a(e, t, n) {
    let a = i.yw[e];
    if (null == a) return null;
    for (let i of a)
        if ((0, r.A)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
    return null
}