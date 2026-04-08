/** chunk id: 396375 params = (module,exports,require) **/
r.d(t, {
    A: () => u
});
var i = r(627968);
r(64700);
var n = r(582754),
    a = r(421380),
    s = r(736653),
    l = r(234419),
    o = r(725807),
    c = r(145310),
    d = r(991497);
let u = e => {
    let {
        textOptions: t,
        subscriptionTier: r,
        hasActivePromotion: u = !1,
        isPersistentCTA: m = !1,
        useShorterCTA: x = !1,
        showGradient: g,
        confirmationFooter: T,
        color: p,
        ...h
    } = e, I = (0, s.Ay)(), {
        buttonText: f,
        marketingSubscriptionTierSkuId: j
    } = (0, c.s)({
        hasActivePromotion: u,
        subscriptionTier: r,
        useShorterCTA: x,
        isPersistentCTA: m
    }), A = (0, l.V)(), v = A?.subscription_trial, R = null != v && j === v.sku_id, _ = p ?? ((0, n.Mw)(I) ? a.XD.BRAND_INVERTED : a.XD.BRAND);
    return (0, i.jsx)(o.A, {
        color: _,
        textOptions: {
            textOverride: f,
            textClassName: R ? d.A : void 0,
            ...t
        },
        onlyShineOnHover: !0,
        subscriptionTier: j,
        showGradient: g,
        confirmationFooter: T,
        ...h
    })
}