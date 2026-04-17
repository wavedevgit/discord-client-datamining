/** chunk id: 9458 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(531260),
    l = n(655752),
    o = n(849528),
    c = n(764231),
    d = n(112848),
    u = n(627380),
    _ = n(149757),
    m = n(30084),
    p = n(920050),
    A = n(788868),
    g = n(985018),
    f = n(792641),
    h = n(714206);

function b(e) {
    let {
        fractionalState: t
    } = (0, s.A)(), n = t === A.xc.FP_ONLY, r = (0, d.$F)(), b = (0, d.Xb)(), x = r?.status === d.Wo.UPCOMING || n, R = (0, _.N)(r?.id), C = (0, o.z)(), N = (0, u.t)(), v = (0, l.P)();
    return (0, i.useMemo)(() => {
        let t, i = null != v ? g.intl.string(v.nameUnformattedNitro) : void 0;
        return null == r ? n && (t = (0, c.T)(A.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0) : t = r.status === d.Wo.UPCOMING ? g.intl.formatToPlainString(g.t.a1eKDi, {
            days: N?.days ?? 0
        }) : function(e, t) {
            if (null != e && null != t) {
                if (e.days <= 30) return g.intl.formatToPlainString(g.t.NEXoaI, {
                    days: e.days,
                    nextBadgeName: t
                });
                if (e.months <= 3) return g.intl.formatToPlainString(g.t.KDV8oD, {
                    months: e.months,
                    nextBadgeName: t
                })
            }
        }(N, i) ?? (0, c.T)(r.id, r.tenureReqNumMonths) ?? void 0, {
            id: p.TENURE_BADGE_CARD_ID,
            title: null != r ? g.intl.string(r.nameUnformattedNitro) : n ? g.intl.string(g.t.tx9Fvw) : "",
            pillText: g.intl.string(g.t["jyYgZ+"]),
            primaryAsset: null != R ? x ? R.standard : R.ambientLarge : n ? h : null,
            primaryAssetClassName: a()(f.p, {
                [f.n]: x
            }),
            caption: null != b ? g.intl.formatToPlainString(g.t.Hu4jfi, {
                date: new Date(b)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: C ?? void 0,
            ctaText: g.intl.string(g.t.jVcuVY),
            onCtaClick: () => (0, m.D)({
                analyticsLocations: e
            })
        }
    }, [r, R, x, b, C, n, N, v, e])
}