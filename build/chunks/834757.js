/** Chunk was on web.js **/
/** chunk id: 834757, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AO: () => f,
    Ee: () => u,
    nr: () => c
});
var r = n(311907),
    i = n(52133),
    a = n(290863),
    o = n(652215);

function s(e) {
    return e.type === o.$pd.PLAYING
}

function l(e, t) {
    return t.findActivity(e, s)
}

function c(e, t) {
    return null != e ? l(e.ownerId, t) : null
}

function u(e, t) {
    if (null == e) return null;
    let n = c(e, t);
    return null == n ? null : {
        id: n.application_id,
        name: n.name
    }
}

function d(e, t) {
    return e === t || null != e && null != t && (0, i.A)(e, t)
}

function f(e) {
    return (0, r.bG)([a.A], () => u(e, a.A), [e], d)
}