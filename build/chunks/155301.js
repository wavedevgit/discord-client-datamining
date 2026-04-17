/** chunk id: 155301 params = (module,exports,require) **/
n.d(e, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(459793),
    a = n(94420),
    s = n(97352),
    o = n(927578),
    d = n(937008),
    c = n(156312),
    u = n(534479),
    p = n(615310);

function m(t) {
    let {
        initialStep: e,
        initialPlanId: n,
        guildId: m,
        setAnalyticsData: f
    } = t, {
        selectedSkuId: x,
        setSelectedSkuId: g,
        setSelectedPlanId: h
    } = (0, a.t4)(t => ({
        selectedSkuId: t.selectedSkuId,
        setSelectedSkuId: t.setSelectedSkuId,
        setSelectedPlanId: t.setSelectedPlanId
    })), {
        blockedPayments: S,
        hasFetchedSubscriptions: b,
        hasFetchedSubscriptionPlans: A,
        currencyLoading: j,
        priceOptions: v,
        setSubscriptionMetadataRequest: E,
        displayCurrency: C
    } = (0, c.P5)(), y = (0, p.l)(), {
        isGift: I
    } = (0, d.Pv)(), [N, P] = l.useState(!b || !A || j);
    return (l.useEffect(() => {
        P(!b || !A || j)
    }, [j, A, b]), l.useEffect(() => {
        null != m && E({
            guild_id: m
        })
    }, [m, E]), l.useEffect(() => {
        h(n);
        let t = null != n ? s.A.get(n) : null;
        N || S || (f(e => {
            let n = null != t ? (0, o.y8)(t.id, !1, I, {
                paymentSourceId: v.paymentSourceId
            }) : void 0;
            return {
                ...e,
                subscription_plan_id: t?.id,
                price: n?.amount,
                regular_price: t?.price,
                currency: C
            }
        }), null != t && (g(t?.skuId), y(e)))
    }, [S, n, I, N, v, C, x, f, h, g, y, e]), N) ? (0, i.jsx)(u.A, {}) : S ? (0, i.jsx)(r.oO, {}) : null
}