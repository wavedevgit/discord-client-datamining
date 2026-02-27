/** chunk id: 466459, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    h: () => d,
    o: () => o
});
var r = l(791282),
    a = l.n(r),
    n = l(575593),
    i = l(311907),
    s = l(4227);
let o = (e, t) => {
        let l = null != e.getPurchase(t.skuId),
            r = t.items ?? [],
            i = a()(r.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case n.R.BUNDLE:
                return {
                    isPurchased: l || r.length > 0 && i.length === r.length, isPartiallyOwnedBundle: i.length > 0 && i.length < r.length, isPartiallyOwnedVariantsGroup: !1
                };
            case n.R.VARIANTS_GROUP:
                let s = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    o = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !s;
                return {
                    isPurchased: s ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1
                };
            default:
                return {
                    isPurchased: l, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    d = e => (0, i.cf)([s.A], () => o(s.A, e))