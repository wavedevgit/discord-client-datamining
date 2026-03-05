/** chunk id: 466459, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    h: () => c,
    o: () => u
});
var n = r(791282),
    s = r.n(n),
    l = r(575593),
    a = r(311907),
    i = r(4227);
let u = (e, t) => {
        let r = null != e.getPurchase(t.skuId),
            n = t.items ?? [],
            a = s()(n.map(t => e.getPurchase(t.skuId)));
        switch (t?.type) {
            case l.R.BUNDLE:
                return {
                    isPurchased: r || n.length > 0 && a.length === n.length, isPartiallyOwnedBundle: a.length > 0 && a.length < n.length, isPartiallyOwnedVariantsGroup: !1
                };
            case l.R.VARIANTS_GROUP:
                let i = t.variants?.every(t => null != e.getPurchase(t.skuId)),
                    u = t.variants?.some(t => null != e.getPurchase(t.skuId)) && !i;
                return {
                    isPurchased: i ?? !1, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: u ?? !1
                };
            default:
                return {
                    isPurchased: r, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1
                }
        }
    },
    c = e => (0, a.cf)([i.A], () => u(i.A, e))