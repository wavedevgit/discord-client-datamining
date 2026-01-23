/** Chunk was on 59275 **/
/** chunk id: 313276, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(64700),
    l = n(155999),
    s = n.n(l),
    a = n(311907),
    i = n(590180);

function o() {
    let e = (0, a.bG)([i.A], () => i.A.products);
    return (0, r.useCallback)(t => s()(t.map(t => {
        let n = e.get(t);
        return null != n && null != n.variantGroupStoreListingId ? i.A.getProductByStoreListingId(n.variantGroupStoreListingId) : n
    }).filter(e => null != e), "storeListingId"), [e])
}