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
    m = n(30084),
    _ = n(920050),
    g = n(788868),
    x = n(985018),
    A = n(593009),
    h = n(714206);

function p(e) {
    let {
        fractionalState: t
    } = (0, a.A)(), n = t === g.xc.FP_ONLY, s = (0, d.$F)(), p = (0, d.Xb)(), T = s?.status === d.Wo.UPCOMING || n, f = (0, u.N)(s?.id), S = (0, r.z)(), E = (0, c.t)();
    return (0, i.useMemo)(() => {
        let t, i = null != E && E.days <= 30;
        return null != s ? s.status === d.Wo.UPCOMING ? t = x.intl.formatToPlainString(x.t.a1eKDi, {
            days: E?.days ?? 0
        }) : t = (0, o.T)(s.id, s.tenureReqNumMonths) ?? void 0 : n && (t = (0, o.T)(g.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0), {
            id: _.TENURE_BADGE_CARD_ID,
            title: null != s ? x.intl.string(s.nameUnformattedNitro) : n ? x.intl.string(x.t.tx9Fvw) : "",
            pillText: x.intl.string(x.t["jyYgZ+"]),
            primaryAsset: null != f ? T ? f.standard : f.ambientLarge : n ? h : null,
            primaryAssetClassName: l()(A.p, {
                [A.n]: T
            }),
            caption: null != p ? x.intl.formatToPlainString(x.t.Hu4jfi, {
                date: new Date(p)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: S ?? void 0,
            ctaText: x.intl.string(x.t.jVcuVY),
            onCtaClick: () => (0, m.D)({
                analyticsLocations: e
            })
        }
    }, [s, f, T, p, S, n, E, e])
}