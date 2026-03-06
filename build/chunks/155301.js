/** chunk id: 155301 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    d = n(156312),
    c = n(534479);

function u(e) {
    let {
        initialStep: t,
        initialPlanId: n,
        guildId: u,
        setAnalyticsData: m,
        handleClose: p
    } = e, {
        blockedPayments: f,
        setStep: x,
        hasFetchedSubscriptions: g,
        hasFetchedSubscriptionPlans: h,
        currencyLoading: b,
        selectedSkuId: A,
        setSelectedSkuId: j,
        setSelectedPlanId: v,
        priceOptions: S,
        setSubscriptionMetadataRequest: C
    } = (0, d.P5)(), {
        isGift: _
    } = (0, o.Pv)(), [y, N] = l.useState(!g || !h || b);
    return (l.useEffect(() => {
        N(!g || !h || b)
    }, [b, h, g]), l.useEffect(() => {
        null != u && C({
            guild_id: u
        })
    }, [u, C]), l.useEffect(() => {
        v(n);
        let e = null != n ? a.A.get(n) : null;
        y || f || (m(t => {
            let n = null != e ? (0, s.y8)(e.id, !1, _, S) : void 0;
            return {
                ...t,
                subscription_plan_id: e?.id,
                price: n?.amount,
                regular_price: e?.price,
                currency: S.currency
            }
        }), null != e && (j(e?.skuId), x(t)))
    }, [f, n, _, y, S, A, m, v, j, x, t]), y) ? (0, i.jsx)(c.A, {}) : f ? (0, i.jsx)(r.oO, {
        onClose: p
    }) : null
}