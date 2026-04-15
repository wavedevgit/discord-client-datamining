/** chunk id: 396375 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(582754),
    a = n(421380),
    s = n(736653),
    l = n(234419),
    o = n(725807),
    c = n(145310),
    d = n(871850);
let u = e => {
    let {
        textOptions: t,
        subscriptionTier: n,
        hasActivePromotion: u = !1,
        isPersistentCTA: _ = !1,
        useShorterCTA: m = !1,
        showGradient: p,
        confirmationFooter: g,
        color: A,
        ...f
    } = e, h = (0, s.Ay)(), {
        buttonText: b,
        marketingSubscriptionTierSkuId: x
    } = (0, c.s)({
        hasActivePromotion: u,
        subscriptionTier: n,
        useShorterCTA: m,
        isPersistentCTA: _
    }), C = (0, l.V)(), N = C?.subscription_trial, R = null != N && x === N.sku_id, v = A ?? ((0, r.Mw)(h) ? a.XD.BRAND_INVERTED : a.XD.BRAND);
    return (0, i.jsx)(o.A, {
        color: v,
        textOptions: {
            textOverride: b,
            textClassName: R ? d.A : void 0,
            ...t
        },
        onlyShineOnHover: !0,
        subscriptionTier: x,
        showGradient: p,
        confirmationFooter: g,
        ...f
    })
}