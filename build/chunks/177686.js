/** chunk id: 177686, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    VG: () => l,
    W7: () => c,
    qH: () => u
});
var r = n(734057),
    i = n(222823),
    a = n(531685),
    o = n(365971);

function s(e) {
    var t;
    let n = i.Ay.getChannelIdsForWindowId(e)[0];
    return null == n ? null : null != (t = r.A.getChannel(n)) ? t : null
}

function l(e) {
    if (null == e) return null;
    let t = (0, o.Q2)(e);
    return null == t ? null : s(t)
}

function c() {
    let e = a.A.getFocusedWindowId();
    return null == e ? null : s(e)
}

function u(e, t) {
    if (null == e || null == t) return !1;
    let n = (0, o.Q2)(e);
    return n === (0, o.Q2)(t) && null != n
}