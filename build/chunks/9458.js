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
    g = n(788868),
    A = n(985018),
    f = n(593009),
    h = n(714206);

function b(e) {
    let {
        fractionalState: t
    } = (0, s.A)(), n = t === g.xc.FP_ONLY, r = (0, d.$F)(), b = (0, d.Xb)(), x = r?.status === d.Wo.UPCOMING || n, C = (0, _.N)(r?.id), N = (0, o.z)(), R = (0, u.t)(), v = (0, l.P)();
    return (0, i.useMemo)(() => {
        let t, i = null != v ? A.intl.string(v.nameUnformattedNitro) : void 0;
        return null == r ? n && (t = (0, c.T)(g.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0) : t = r.status === d.Wo.UPCOMING ? A.intl.formatToPlainString(A.t.a1eKDi, {
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
        }(R, i) ?? (0, c.T)(r.id, r.tenureReqNumMonths) ?? void 0, {
            id: p.TENURE_BADGE_CARD_ID,
            title: null != r ? A.intl.string(r.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
            pillText: A.intl.string(A.t["jyYgZ+"]),
            primaryAsset: null != C ? x ? C.standard : C.ambientLarge : n ? h : null,
            primaryAssetClassName: a()(f.p, {
                [f.n]: x
            }),
            caption: null != b ? A.intl.formatToPlainString(A.t.Hu4jfi, {
                date: new Date(b)
            }) : void 0,
            description: t,
            subscriptionRequired: !0,
            progress: N ?? void 0,
            ctaText: A.intl.string(A.t.jVcuVY),
            onCtaClick: () => (0, m.D)({
                analyticsLocations: e
            })
        }
    }, [r, C, x, b, N, n, R, v, e])
}