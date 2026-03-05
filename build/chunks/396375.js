/** chunk id: 396375 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var a = n(582754),
    l = n(421380),
    i = n(736653),
    s = n(234419),
    u = n(465794),
    d = n(145310),
    c = n(592697);
let m = e => {
    let {
        textOptions: t,
        subscriptionTier: n,
        hasActivePromotion: m = !1,
        isPersistentCTA: o = !1,
        useShorterCTA: E = !1,
        showGradient: _,
        confirmationFooter: p,
        color: N,
        ...x
    } = e, T = (0, i.Ay)(), {
        buttonText: g,
        marketingSubscriptionTierSkuId: A
    } = (0, d.s)({
        hasActivePromotion: m,
        subscriptionTier: n,
        useShorterCTA: E,
        isPersistentCTA: o
    }), h = (0, s.V)(), f = h?.subscription_trial, b = null != f && A === f.sku_id, M = N ?? ((0, a.Mw)(T) ? l.XD.BRAND_INVERTED : l.XD.BRAND);
    return (0, r.jsx)(u.A, {
        color: M,
        textOptions: {
            textOverride: g,
            textClassName: b ? c.A : void 0,
            ...t
        },
        onlyShineOnHover: !0,
        subscriptionTier: A,
        showGradient: _,
        confirmationFooter: p,
        ...x
    })
}