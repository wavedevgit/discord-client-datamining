/** chunk id: 312852, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => o
});
var r = n(311907),
    i = n(4227),
    a = n(623373);
let o = e => {
    let t = (0, r.bG)([i.A], () => i.A.purchases);
    return null != e && (0, a.B1)(e) ? Math.max(0, e.variants.findIndex(e => !t.has(e.skuId))) : 0
}