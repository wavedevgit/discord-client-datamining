/** chunk id: 9458 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    m = n(30084),
    _ = n(920050),
    g = n(788868),
    A = n(985018),
    x = n(160664),
    p = n(714206);

function h(e) {
    let {
        fractionalState: t
    } = (0, a.A)(), n = t === g.xc.FP_ONLY, s = (0, d.$F)(), h = (0, d.Xb)(), f = s?.status === d.Wo.UPCOMING || n, T = (0, u.N)(s?.id), E = (0, r.z)(), S = (0, c.t)();
    return (0, i.useMemo)(() => {
        let t, i = null != S && S.days <= 30;
        return null != s ? s.status === d.Wo.UPCOMING ? t = A.intl.formatToPlainString(A.t.a1eKDi, {
            days: S?.days ?? 0
        }) : t = (0, o.T)(s.id, s.tenureReqNumMonths) ?? void 0 : n && (t = (0, o.T)(g.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0), {
            id: _.TENURE_BADGE_CARD_ID,
            title: null != s ? A.intl.string(s.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
            pillText: A.intl.string(A.t["jyYgZ+"]),
            primaryAsset: null != T ? f ? T.standard : T.ambientLarge : n ? p : null,
            primaryAssetClassName: l()(x.p, {
                [x.n]: f
            }),
            caption: null != h ? A.intl.formatToPlainString(A.t.Hu4jfi, {
                date: new Date(h)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: E ?? void 0,
            ctaText: A.intl.string(A.t.jVcuVY),
            onCtaClick: () => (0, m.D)({
                analyticsLocations: e
            })
        }
    }, [s, T, f, h, E, n, S, e])
}