/** chunk id: 466459 params = (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => l,
    o: () => o
});
var a = n(791282),
    r = n.n(a),
    i = n(575593),
    s = n(311907),
    c = n(4227);
let o = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            a = t.items ?? [],
            s = r()(a.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case i.R.BUNDLE:
                return {
                    isPurchased: n || a.length > 0 && s.length === a.length, isPartiallyOwnedBundle: s.length > 0 && s.length < a.length, isPartiallyOwnedVariantsGroup: !1
                };
            case i.R.VARIANTS_GROUP:
                let c = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    o = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !c;
                return {
                    isPurchased: c ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: o ?? !1
                };
            default:
                return {
                    isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    l = e => (0, s.cf)([c.A], () => o(c.A, e))