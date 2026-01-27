/** Chunk was on web.js **/
/** chunk id: 507263, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => u
}), n(142703), n(321073);
var r = n(73153),
    i = n(426620),
    a = n(142120);
let o = [];

function s() {
    return null != i.A.getType()
}

function l() {
    s() || (o.forEach(e => c(e)), o = [])
}

function c(e) {
    setImmediate(() => e())
}

function u(e) {
    a.A.isConnectedOrOverlay() && !s() ? c(e) : o.push(e)
}
r.h.subscribe("CONNECTION_OPEN", l), r.h.subscribe("CONNECTION_RESUMED", l), r.h.subscribe("NUF_COMPLETE", l)