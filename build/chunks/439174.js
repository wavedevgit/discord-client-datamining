/** Chunk was on web.js **/
/** chunk id: 439174, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Xr: () => l,
    cZ: () => s,
    e0: () => o
});
var r = n(989349),
    i = n.n(r),
    a = n(788868);
let o = e => a.VD[e],
    s = e => null == o(e) ? null : e,
    l = (e, t) => {
        if (null == t) return null;
        let n = o(e);
        if (null == n) return null;
        let r = i()(t);
        return r.add(n.tenureReqNumMonths, "months"), r.add(1, "days"), r.toDate()
    }