/** chunk id: 155301 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    l = n(459793),
    a = n(97352),
    s = n(927578),
    o = n(937008),
    d = n(156312),
    c = n(534479),
    u = n(615310);

function m(e) {
    let {
        initialStep: t,
        initialPlanId: n,
        guildId: m,
        setAnalyticsData: p
    } = e, {
        blockedPayments: f,
        hasFetchedSubscriptions: x,
        hasFetchedSubscriptionPlans: g,
        currencyLoading: h,
        selectedSkuId: b,
        setSelectedSkuId: A,
        setSelectedPlanId: j,
        priceOptions: S,
        setSubscriptionMetadataRequest: v,
        displayCurrency: _
    } = (0, d.P5)(), C = (0, u.l)(), {
        isGift: N
    } = (0, o.Pv)(), [y, E] = r.useState(!x || !g || h);
    return (r.useEffect(() => {
        E(!x || !g || h)
    }, [h, g, x]), r.useEffect(() => {
        null != m && v({
            guild_id: m
        })
    }, [m, v]), r.useEffect(() => {
        j(n);
        let e = null != n ? a.A.get(n) : null;
        y || f || (p(t => {
            let n = null != e ? (0, s.y8)(e.id, !1, N, {
                paymentSourceId: S.paymentSourceId
            }) : void 0;
            return {
                ...t,
                subscription_plan_id: e?.id,
                price: n?.amount,
                regular_price: e?.price,
                currency: _
            }
        }), null != e && (A(e?.skuId), C(t)))
    }, [f, n, N, y, S, _, b, p, j, A, C, t]), y) ? (0, i.jsx)(c.A, {}) : f ? (0, i.jsx)(l.oO, {}) : null
}