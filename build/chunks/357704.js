/** chunk id: 357704, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => a
});
var s = n(64700),
    l = n(311907),
    r = n(4227);

function a(e, t) {
    let n = s.useMemo(() => e?.products.filter(e => e.skuId !== t).map(e => e.skuId) ?? [], [e?.products, t]),
        a = (0, l.bG)([r.A], () => r.A.getPurchases(n));
    return {
        readyToClaim: s.useMemo(() => a.length === n.length, [a, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: a
    }
}