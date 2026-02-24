/** chunk id: 466459, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => l,
    o: () => s
});
var a = n(791282),
    i = n.n(a),
    r = n(575593),
    o = n(311907),
    c = n(4227);
let s = (e, t) => {
        let n = null != e.getPurchase(t.skuId),
            a = t.items ?? [],
            o = i()(a.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case r.R.BUNDLE:
                return {
                    isPurchased: n || a.length > 0 && o.length === a.length, isPartiallyOwnedBundle: o.length > 0 && o.length < a.length, isPartiallyOwnedVariantsGroup: !1
                };
            case r.R.VARIANTS_GROUP:
                let c = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    s = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !c;
                return {
                    isPurchased: c ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: s ?? !1
                };
            default:
                return {
                    isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    l = e => (0, o.cf)([c.A], () => s(c.A, e))