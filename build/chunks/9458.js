/** chunk id: 9458 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    m = n(920050),
    g = n(788868),
    A = n(985018),
    x = n(160664),
    h = n(714206);

function p(e) {
    let {
        fractionalState: t
    } = (0, a.A)(), n = t === g.xc.FP_ONLY, s = (0, d.$F)(), p = (0, d.Xb)(), T = s?.status === d.Wo.UPCOMING || n, E = (0, u.N)(s?.id), S = (0, r.z)(), C = (0, c.t)();
    return (0, i.useMemo)(() => {
        let t, i = null != C && C.days <= 30;
        return null != s ? s.status === d.Wo.UPCOMING ? t = A.intl.formatToPlainString(A.t.a1eKDi, {
            days: C?.days ?? 0
        }) : t = (0, o.T)(s.id, s.tenureReqNumMonths) ?? void 0 : n && (t = (0, o.T)(g.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0), {
            id: m.TENURE_BADGE_CARD_ID,
            title: null != s ? A.intl.string(s.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
            pillText: A.intl.string(A.t["jyYgZ+"]),
            primaryAsset: null != E ? T ? E.standard : E.ambientLarge : n ? h : null,
            primaryAssetClassName: l()(x.p, {
                [x.n]: T
            }),
            caption: null != p ? A.intl.formatToPlainString(A.t.Hu4jfi, {
                date: new Date(p)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: S ?? void 0,
            ctaText: A.intl.string(A.t.jVcuVY),
            onCtaClick: () => (0, _.D)({
                analyticsLocations: e
            })
        }
    }, [s, E, T, p, S, n, C, e])
}