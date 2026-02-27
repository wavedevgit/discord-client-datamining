/** chunk id: 466459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => c,
    o: () => o
});
var a = n(791282),
    r = n.n(a),
    i = n(575593),
    s = n(311907),
    l = n(4227);
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