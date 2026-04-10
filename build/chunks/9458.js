/** chunk id: 9458 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(531260),
    l = n(655752),
    c = n(849528),
    o = n(764231),
    d = n(112848),
    u = n(627380),
    _ = n(149757),
    m = n(30084),
    p = n(920050),
    g = n(788868),
    A = n(985018),
    x = n(593009),
    h = n(714206);

function f(e) {
    let {
        fractionalState: t
    } = (0, s.A)(), n = t === g.xc.FP_ONLY, r = (0, d.$F)(), f = (0, d.Xb)(), b = r?.status === d.Wo.UPCOMING || n, N = (0, _.N)(r?.id), C = (0, c.z)(), R = (0, u.t)(), v = (0, l.P)();
    return (0, i.useMemo)(() => {
        let t, i = null != v ? A.intl.string(v.nameUnformattedNitro) : void 0;
        return null == r ? n && (t = (0, o.T)(g.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0) : t = r.status === d.Wo.UPCOMING ? A.intl.formatToPlainString(A.t.a1eKDi, {
            days: R?.days ?? 0
        }) : function(e, t) {
            if (null != e && null != t) {
                if (e.days <= 30) return A.intl.formatToPlainString(A.t.NEXoaI, {
                    days: e.days,
                    nextBadgeName: t
                });
                if (e.months <= 3) return A.intl.formatToPlainString(A.t.KDV8oD, {
                    months: e.months,
                    nextBadgeName: t
                })
            }
        }(R, i) ?? (0, o.T)(r.id, r.tenureReqNumMonths) ?? void 0, {
            id: p.TENURE_BADGE_CARD_ID,
            title: null != r ? A.intl.string(r.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
            pillText: A.intl.string(A.t["jyYgZ+"]),
            primaryAsset: null != N ? b ? N.standard : N.ambientLarge : n ? h : null,
            primaryAssetClassName: a()(x.p, {
                [x.n]: b
            }),
            caption: null != f ? A.intl.formatToPlainString(A.t.Hu4jfi, {
                date: new Date(f)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: C ?? void 0,
            ctaText: A.intl.string(A.t.jVcuVY),
            onCtaClick: () => (0, m.D)({
                analyticsLocations: e
            })
        }
    }, [r, N, b, f, C, n, R, v, e])
}