/** chunk id: 466459 params = (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => u,
    o: () => o
});
var r = n(791282),
    i = n.n(r),
    a = n(575593),
    l = n(311907),
    s = n(4227);
let o = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            r = t.items ?? [],
            l = i()(r.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case a.R.BUNDLE:
                return {
                    isPurchased: n || r.length > 0 && l.length === r.length, isPartiallyOwnedBundle: l.length > 0 && l.length < r.length, isPartiallyOwnedVariantsGroup: !1
                };
            case a.R.VARIANTS_GROUP:
                let s = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    o = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !s;
                return {
                    isPurchased: s ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1
                };
            default:
                return {
                    isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    u = e => (0, l.cf)([s.A], () => o(s.A, e))