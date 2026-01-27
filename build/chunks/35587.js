/** Chunk was on web.js **/
/** chunk id: 35587, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Eu: () => y,
    IO: () => E,
    y7: () => g
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(73153),
    o = n(287809),
    s = n(816733),
    l = n(927578),
    c = n(89366),
    u = n(637073),
    d = n(728364),
    f = n(264779),
    p = n(597758),
    _ = n(412260),
    h = n(788868);

function m(e, t, n, a) {
    let o = (0, i.yK)([_.A], () => _.A.outboundPromotions),
        s = (0, i.bG)([_.A], () => _.A.consumedInboundPromotionId);
    return r.useMemo(() => o.filter(r => r.id !== s && !!(0, f.OP)(r) && !n && (!e && !t || (0, f.S0)(r, a))), [o, s, n, e, t, a])
}

function g() {
    let e = (0, i.bG)([_.A], () => _.A.lastFetchedActivePromotions),
        t = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        n = (0, c.QQ)(),
        g = (0, i.bG)([s.A], () => s.A.hasAnyUnexpiredOffer()),
        E = (0, u.d)(),
        [y, b] = r.useState(!1),
        [O, v] = r.useState([]);
    r.useEffect(() => {
        (null != e || E) && a.h.wait(() => p.Ay.markOutboundPromotionsSeen())
    }, [e, E]);
    let A = r.useCallback(e => {
            v(t => t.some(t => {
                let {
                    promotion: n
                } = t;
                return n.id === e.promotion.id
            }) ? t : [...t, e])
        }, []),
        I = l.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        S = d.m.useExperiment({
            location: "useOutboundPromotions"
        }, {
            autoTrackExposure: !1,
            disable: I
        }).enabled || I;
    r.useEffect(() => {
        a.h.wait(() => {
            S && (null == e || E) && p.Ay.fetchActivePromotions()
        })
    }, [e, S, E]), r.useEffect(() => {
        a.h.wait(() => {
            (0, f.b3)().then(e => {
                v(e), b(!0)
            }).catch(() => {
                v([]), b(!0)
            })
        })
    }, []);
    let T = {};
    for (let {
            code: e,
            promotion: t
        }
        of O) T[t.id] = e;
    let C = m(n, g, E, T),
        N = new Set(C.map(e => {
            let {
                id: t
            } = e;
            return t
        }));
    return {
        promotionsLoaded: y && (!S || null != e || E),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: O.filter(e => {
            let {
                promotion: t
            } = e;
            return !N.has(t.id) && !1 === (0, f.HB)({
                promotionPartner: t.outboundTitle,
                promotionType: t.promotionType
            })
        }).filter(e => (0, f.OP)(e.promotion)),
        claimedOutboundPromotionCodeMap: T,
        addClaimedOutboundPromotionCode: A
    }
}

function E() {
    let e = (0, i.bG)([_.A], () => _.A.lastSeenOutboundPromotionStartDate),
        t = m((0, c.QQ)(), (0, i.bG)([s.A], () => s.A.hasAnyUnexpiredOffer()), (0, u.d)(), {});
    return r.useMemo(() => null == e ? t : t.filter(t => {
        let {
            startDate: n
        } = t;
        return new Date(n) > new Date(e)
    }), [t, e]).filter(e => (0, f.OP)(e))
}

function y() {
    return {
        promotion: (0, i.bG)([_.A], () => _.A.bogoPromotion)
    }
}