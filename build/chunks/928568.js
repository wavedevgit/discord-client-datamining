/** Chunk was on web.js **/
/** chunk id: 928568, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(311907),
    i = n(212455),
    a = n(71393);

function s() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A, a.A], n = e.computeGuildIds(), r = t.getGuilds();
    return n.filter(e => null == r[e])
}

function o() {
    return (0, r.yK)([i.A, a.A], () => s([i.A, a.A]))
}