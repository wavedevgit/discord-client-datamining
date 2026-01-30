/** chunk id: 453774, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(429913),
    i = n(871123),
    a = n(916023);

function o(e, t) {
    var n, o;
    let s = (0, i.Xg)(e) ? [] : null != (n = null == e || null == (o = e.linkedGames) ? void 0 : o.map(e => e.id)) ? n : [],
        l = (0, r.A)(s);
    if (!(0, a.kt)({
            location: t
        }) || null == e) return null;
    if ((0, i.Xg)(e)) return e;
    for (let e of l)
        if (null != e && (0, i.Xg)(e)) return e;
    return null
}