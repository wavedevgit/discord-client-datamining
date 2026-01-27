/** Chunk was on web.js **/
/** chunk id: 25528, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p,
    n: () => f
}), n(896048), n(938796);
var r = n(64700),
    i = n(665260),
    a = n(311907),
    o = n(961350),
    s = n(290863),
    l = n(461213),
    c = n(652215);
let u = new Set([c.yTV.XBOX, c.yTV.PS4, c.yTV.PS5]);

function d(e) {
    return e.filter(e => {
        var t, n;
        return null != e.application_id && e.type === c.$pd.PLAYING && !(0, i.Lt)(null != (t = e.flags) ? t : 0, c.jUm.EMBEDDED) && !u.has(null != (n = e.platform) ? n : "")
    })
}

function f(e, t) {
    return d(o.default.getId() === e ? l.A.getActivities() : s.A.getActivities(e, t))
}

function p(e, t) {
    let n = (0, a.bG)([l.A, s.A, o.default], () => o.default.getId() === e ? l.A.getActivities() : s.A.getActivities(e, t));
    return r.useMemo(() => d(n), [n])
}