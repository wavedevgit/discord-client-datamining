/** Chunk was on 59275 **/
/** chunk id: 357704, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => a
});
var r = n(64700),
    l = n(311907),
    s = n(4227);

function a(e, t) {
    let n = r.useMemo(() => {
            var n;
            return null != (n = null == e ? void 0 : e.products.filter(e => e.skuId !== t).map(e => e.skuId)) ? n : []
        }, [null == e ? void 0 : e.products, t]),
        a = (0, l.bG)([s.A], () => s.A.getPurchases(n));
    return {
        readyToClaim: r.useMemo(() => a.length === n.length, [a, n]),
        collectibleProductSkuIds: n,
        collectedSkuIds: a
    }
}