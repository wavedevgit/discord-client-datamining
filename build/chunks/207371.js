/** chunk id: 207371, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => d,
    x: () => u
}), n(938796);
var r = n(64700),
    i = n(665260),
    a = n(735991),
    o = n(216238),
    s = n(652215);

function l(e) {
    var t;
    if (!(0, a.$B)(e)) return !1;
    let n = null != (t = e.flags) ? t : 0,
        r = (0, i.Lt)(n, s.gfo.EMBEDDED),
        o = (0, i.Lt)(n, s.gfo.CONTEXTLESS_ACTIVITY);
    return r && o
}

function c(e, t) {
    return null != e && !!l(e)
}

function u(e) {
    return c(e, (0, o.oj)("canLaunchFrame"))
}

function d(e) {
    let t = (0, o.$N)("canLaunchFrame");
    return r.useMemo(() => c(e, t), [e, t])
}