/** chunk id: 466459, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    h: () => d,
    o: () => o
});
var l = a(791282),
    r = a.n(l),
    n = a(575593),
    s = a(311907),
    i = a(4227);
let o = (e, t) => {
        let a = null != e.getPurchase(t.skuId),
            l = t.items ?? [],
            s = r()(l.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case n.R.BUNDLE:
                return {
                    isPurchased: a || l.length > 0 && s.length === l.length, isPartiallyOwnedBundle: s.length > 0 && s.length < l.length, isPartiallyOwnedVariantsGroup: !1
                };
            case n.R.VARIANTS_GROUP:
                let i = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    o = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !i;
                return {
                    isPurchased: i ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1
                };
            default:
                return {
                    isPurchased: a, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    d = e => (0, s.cf)([i.A], () => o(i.A, e))