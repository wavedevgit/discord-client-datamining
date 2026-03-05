/** chunk id: 466459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => c,
    o: () => o
});
var a = n(791282),
    l = n.n(a),
    s = n(575593),
    r = n(311907),
    i = n(4227);
let o = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            a = t.items ?? [],
            r = l()(a.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case s.R.BUNDLE:
                return {
                    isPurchased: n || a.length > 0 && r.length === a.length, isPartiallyOwnedBundle: r.length > 0 && r.length < a.length, isPartiallyOwnedVariantsGroup: !1
                };
            case s.R.VARIANTS_GROUP:
                let i = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    o = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !i;
                return {
                    isPurchased: i ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1
                };
            default:
                return {
                    isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    c = e => (0, r.cf)([i.A], () => o(i.A, e))