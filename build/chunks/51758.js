/** Chunk was on web.js **/
/** chunk id: 51758, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => c,
    V: () => l
}), n(896048);
var r = n(311907),
    i = n(696451),
    a = n(71393),
    o = n(287809),
    s = n(709977);

function l(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, o.default, i.Ay];
    if (null == e) return !1;
    let l = t.getGuild(e),
        c = n.getCurrentUser(),
        u = !1;
    if (null != c) {
        var d, f;
        u = null != (d = null == (f = r.getMember(e, c.id)) ? void 0 : f.isPending) && d
    }
    return u && !!(0, s.Qd)(l)
}

function c(e) {
    return (0, r.bG)([a.A, o.default, i.Ay], () => null != e && l(e, [a.A, o.default, i.Ay]), [e])
}