/** chunk id: 466459, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    h: () => o,
    o: () => c
});
var n = r(791282),
    a = r.n(n),
    s = r(575593),
    l = r(311907),
    i = r(4227);
let c = (e, t) => {
        let r = null != e.getPurchase(t.skuId),
            n = t.items ?? [],
            l = a()(n.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case s.R.BUNDLE:
                return {
                    isPurchased: r || n.length > 0 && l.length === n.length, isPartiallyOwnedBundle: l.length > 0 && l.length < n.length, isPartiallyOwnedVariantsGroup: !1
                };
            case s.R.VARIANTS_GROUP:
                let i = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    c = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !i;
                return {
                    isPurchased: i ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: c ?? !1
                };
            default:
                return {
                    isPurchased: r, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    o = e => (0, l.cf)([i.A], () => c(i.A, e))