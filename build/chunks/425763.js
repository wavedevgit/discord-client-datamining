/** Chunk was on web.js **/
/** chunk id: 425763, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    VU: () => s,
    ef: () => o,
    ny: () => l
});
var r = n(353640),
    i = n(121894);
let a = (0, r.v)(e => ({
    inDndMode: !1
}));

function o(e) {
    (0, i.r)(() => a.setState({
        inDndMode: e
    }))
}

function s() {
    return a(e => e.inDndMode)
}

function l() {
    return a.getState().inDndMode
}