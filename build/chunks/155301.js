/** chunk id: 155301, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    c = n(156312),
    d = n(534479);

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
    } = (0, c.P5)(), {
        isGift: N
    } = (0, o.Pv)(), [_, y] = r.useState(!g || !h || b);
    return (r.useEffect(() => {
        y(!g || !h || b)
    }, [b, h, g]), r.useEffect(() => {
        null != u && C({
            guild_id: u
        })
    }, [u, C]), r.useEffect(() => {
        v(n);
        let e = null != n ? a.A.get(n) : null;
        _ || f || (m(t => {
            let n = null != e ? (0, s.y8)(e.id, !1, N, S) : void 0;
            return {
                ...t,
                subscription_plan_id: e?.id,
                price: n?.amount,
                regular_price: e?.price,
                currency: S.currency
            }
        }), null != e && (j(e?.skuId), x(t)))
    }, [f, n, N, _, S, A, m, v, j, x, t]), _) ? (0, i.jsx)(d.A, {}) : f ? (0, i.jsx)(l.oO, {
        onClose: p
    }) : null
}