/** Chunk was on web.js **/
/** chunk id: 113493, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
}), n(896048);
var r = n(532294);

function i(e) {
    if (0 === e.length || 1 === e.length) return [];
    let t = new Set;
    return e.forEach(e => {
        t.add(r.jS[e])
    }), [...t]
}