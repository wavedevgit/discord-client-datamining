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
    d = n(943386);
let u = e => {
    let {
        textOptions: t,
        subscriptionTier: n,
        hasActivePromotion: u = !1,
        isPersistentCTA: _ = !1,
        useShorterCTA: m = !1,
        showGradient: p,
        confirmationFooter: A,
        color: g,
        ...f
    } = e, x = (0, s.Ay)(), {
        buttonText: h,
        marketingSubscriptionTierSkuId: b
    } = (0, c.s)({
        hasActivePromotion: u,
        subscriptionTier: n,
        useShorterCTA: m,
        isPersistentCTA: _
    }), C = (0, l.V)(), R = C?.subscription_trial, N = null != R && b === R.sku_id, v = g ?? ((0, r.Mw)(x) ? a.XD.BRAND_INVERTED : a.XD.BRAND);
    return (0, i.jsx)(o.A, {
        color: v,
        textOptions: {
            textOverride: h,
            textClassName: N ? d.A : void 0,
            ...t
        },
        onlyShineOnHover: !0,
        subscriptionTier: b,
        showGradient: p,
        confirmationFooter: A,
        ...f
    })
}