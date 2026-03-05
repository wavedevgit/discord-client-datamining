/** chunk id: 9458, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(531260),
    r = n(849528),
    o = n(764231),
    d = n(112848),
    c = n(627380),
    u = n(149757),
    _ = n(30084),
    g = n(920050),
    m = n(788868),
    A = n(985018),
    h = n(568298),
    p = n(714206);

function x(e) {
    let {
        fractionalState: t
    } = (0, a.A)(), n = t === m.xc.FP_ONLY, s = (0, d.$F)(), x = (0, d.Xb)(), E = s?.status === d.Wo.UPCOMING || n, T = (0, u.N)(s?.id), S = (0, r.z)(), C = (0, c.t)();
    return (0, i.useMemo)(() => {
        let t, i = null != C && C.days <= 30;
        return null != s ? s.status === d.Wo.UPCOMING ? t = A.intl.formatToPlainString(A.t.a1eKDi, {
            days: C?.days ?? 0
        }) : t = (0, o.T)(s.id, s.tenureReqNumMonths) ?? void 0 : n && (t = (0, o.T)(m.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0), {
            id: g.TENURE_BADGE_CARD_ID,
            title: null != s ? A.intl.string(s.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
            pillText: A.intl.string(A.t["jyYgZ+"]),
            primaryAsset: null != T ? E ? T.standard : T.ambientLarge : n ? p : null,
            primaryAssetClassName: l()(h.p, {
                [h.n]: E
            }),
            caption: null != x ? A.intl.formatToPlainString(A.t.Hu4jfi, {
                date: new Date(x)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: S ?? void 0,
            ctaText: A.intl.string(A.t.jVcuVY),
            onCtaClick: () => (0, _.D)({
                analyticsLocations: e
            })
        }
    }, [s, T, E, x, S, n, C, e])
}