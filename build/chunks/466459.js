/** chunk id: 466459 params = (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => c,
    o: () => o
});
var r = n(791282),
    i = n.n(r),
    a = n(575593),
    s = n(311907),
    l = n(4227);
let o = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            r = t.items ?? [],
            s = i()(r.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case a.R.BUNDLE:
                return {
                    isPurchased: n || r.length > 0 && s.length === r.length, isPartiallyOwnedBundle: s.length > 0 && s.length < r.length, isPartiallyOwnedVariantsGroup: !1
                };
            case a.R.VARIANTS_GROUP:
                let l = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    o = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !l;
                return {
                    isPurchased: l ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1
                };
            default:
                return {
                    isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    c = e => (0, s.cf)([l.A], () => o(l.A, e))