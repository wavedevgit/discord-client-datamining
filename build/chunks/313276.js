/** chunk id: 313276, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => o
});
var n = s(64700),
    r = s(155999),
    l = s.n(r),
    i = s(311907),
    a = s(590180);

function o() {
    let e = (0, i.bG)([a.A], () => a.A.products);
    return (0, n.useCallback)(t => l()(t.map(t => {
        let s = e.get(t);
        return null != s && null != s.variantGroupStoreListingId ? a.A.getProductByStoreListingId(s.variantGroupStoreListingId) : s
    }).filter(e => null != e), "storeListingId"), [e])
}