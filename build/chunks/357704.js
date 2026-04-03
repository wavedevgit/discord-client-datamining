/** chunk id: 357704 params = (module,exports,require) **/
"use strict";
s.d(t, {
    K: () => i
});
var n = s(64700),
    r = s(311907),
    l = s(4227);

function i(e, t) {
    let s = n.useMemo(() => e?.products.filter(e => e.skuId !== t).map(e => e.skuId) ?? [], [e?.products, t]),
        i = (0, r.bG)([l.A], () => l.A.getPurchases(s));
    return {
        readyToClaim: n.useMemo(() => i.length === s.length, [i, s]),
        collectibleProductSkuIds: s,
        collectedSkuIds: i
    }
}