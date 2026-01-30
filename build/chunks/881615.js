/** chunk id: 881615, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Db: () => u,
    sN: () => c
});
var r = n(835245),
    i = n(927813),
    a = n(728458),
    o = n(604594);
let s = 12 * i.A.Millis.HOUR,
    l = null;

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == l || d(l) ? l = {
        uuid: (0, r.A)(),
        createdAtTimestamp: t,
        lastUsedTimestamp: t,
        version: o.Ir
    } : (e && (l.lastUsedTimestamp = t), l)
}

function u() {
    l = null
}

function d(e) {
    let t = Date.now();
    if (t < e.createdAtTimestamp) return a.A.addBreadcrumb({
        category: "ad",
        message: "future facing timestamp Date.now(): ".concat(t, ", initialized timestamp: ").concat(e.createdAtTimestamp)
    }), !0;
    let n = t - e.lastUsedTimestamp > o.jj,
        r = t - e.createdAtTimestamp > s;
    return n || r
}