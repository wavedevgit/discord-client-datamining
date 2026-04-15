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
    c = n(725807),
    o = n(145310),
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
        ...x
    } = e, h = (0, s.Ay)(), {
        buttonText: f,
        marketingSubscriptionTierSkuId: b
    } = (0, o.s)({
        hasActivePromotion: u,
        subscriptionTier: n,
        useShorterCTA: m,
        isPersistentCTA: _
    }), N = (0, l.V)(), C = N?.subscription_trial, R = null != C && b === C.sku_id, v = A ?? ((0, r.Mw)(h) ? a.XD.BRAND_INVERTED : a.XD.BRAND);
    return (0, i.jsx)(c.A, {
        color: v,
        textOptions: {
            textOverride: f,
            textClassName: R ? d.A : void 0,
            ...t
        },
        onlyShineOnHover: !0,
        subscriptionTier: b,
        showGradient: p,
        confirmationFooter: g,
        ...x
    })
}