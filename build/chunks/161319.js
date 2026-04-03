/** chunk id: 161319 params = (module,exports,require) **/
r.d(t, {
    Recurring3PModal: () => S,
    u: () => T
}), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    d = r(287809),
    o = r(954571),
    c = r(405269),
    u = r(975571),
    m = r(927578),
    _ = r(398523),
    p = r(881373),
    f = r(792656),
    h = r(264779),
    b = r(597758),
    g = r(35587),
    x = r(412260),
    C = r(852218),
    A = r(729640),
    R = r(116011),
    v = r(788868),
    E = r(652215),
    j = r(985018),
    N = r(276478);
let y = e => {
        let {
            partnerIds: t
        } = e;
        return (null != t ? Object.entries(R.oL).filter(e => {
            let [r] = e;
            return t.includes(r)
        }) : Object.entries(R.oL)).map(e => {
            let [t, r] = e;
            return (0, n.jsx)("div", {
                className: N.lA,
                children: (0, n.jsxs)("div", {
                    className: N.LV,
                    children: [(0, n.jsxs)("div", {
                        className: N.JN,
                        children: [(0, n.jsx)("div", {
                            className: N.MC,
                            children: (0, n.jsx)(i.XAi, {
                                size: "refresh_sm"
                            })
                        }), (0, n.jsxs)("div", {
                            className: N.yO,
                            children: [(0, n.jsx)(i.DZT, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: j.intl.formatToPlainString(r.title, r.titleParams ?? {})
                            }), (0, n.jsx)(i.DZT, {
                                variant: "heading-sm/medium",
                                color: "text-subtle",
                                children: j.intl.formatToPlainString(r.body, r.bodyParams ?? {})
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        className: N.R4,
                        children: (0, n.jsx)(l._V3, {
                            src: r.asset,
                            className: N.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1
                        })
                    })]
                })
            }, t)
        })
    },
    I = e => {
        let {
            promotionRecurrences: t
        } = e, [r, s] = a.useState(t.length > 1), [l, d] = a.useState([]);
        return a.useEffect(() => {
            d([t.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [t]), (0, n.jsxs)("div", {
            children: [l.map(e => (0, n.jsx)(R.wx, {
                recurrence: e,
                showPartnerLogo: !0,
                showPartnerImage: !0
            }, e.id)), r && (0, n.jsx)(i.DUT, {
                className: N.K8,
                onClick: () => {
                    s(!1), d([...l, ...t.slice(1)])
                },
                children: (0, n.jsx)(i.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t.rjjZxV)
                })
            })]
        })
    },
    P = e => e.promotionType === C.pt.THIRD_PARTY_OUTBOUND_RECURRING ? e.partnerId?.toLowerCase() ?? null : e.outboundTitle.toLowerCase(),
    S = e => {
        let t, r, l, o, {
                transitionState: S,
                onClose: T,
                partnerIds: w
            } = e,
            O = (t = _.A.useExperiment({
                location: "Recurring3PModal"
            }).enabled, r = (0, p.YS)({
                location: "Recurring3PModal"
            }).functionalityEnabled, a.useMemo(() => {
                let e = [];
                return t && e.push(C.KS, C.Cs), r && e.push(C.XY), null != w ? w.filter(t => e.includes(t)) : e
            }, [t, r, w])),
            {
                promotionsLoaded: D,
                claimedOutboundPromotionCodeMap: M
            } = (0, g.y7)(),
            U = (0, s.yK)([x.A], () => x.A.outboundRecurringPromotions),
            L = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
            B = !1 === m.Ay.isPremiumExactly(L, v.PremiumTypes.TIER_2),
            k = L?.isFractionalPremiumWithNoStandardSub(),
            G = null == L || B || k;
        if (!1 === D) return (0, n.jsx)(i.y$y, {});
        let V = (e => {
            let {
                promotions: t,
                codesByPromotion: r,
                partnerIds: n
            } = e, a = {};
            return t.filter(e => !0 === (0, h.HB)({
                promotionPartner: e.outboundTitle,
                promotionType: e.promotionType
            })).forEach(e => {
                let t = P(e),
                    i = (e => {
                        let {
                            promotion: t
                        } = e, r = P(t);
                        return null == r ? null : R.oL[r] ?? null
                    })({
                        promotion: e
                    });
                if (null == t || null == i || null != n && !n.includes(t)) return;
                t in a || (a[t] = []);
                let s = {
                    id: e.id,
                    partnerId: t,
                    startDate: e.startDate,
                    endDate: e.endDate,
                    code: r[e.id] ?? null,
                    ...i,
                    title: j.intl.formatToPlainString(i.title, i.titleParams ?? {}),
                    body: j.intl.formatToPlainString(i.body, i.bodyParams ?? {})
                };
                a[t].push(s)
            }), a
        })({
            promotions: U,
            codesByPromotion: M,
            partnerIds: O
        });
        return (0, n.jsx)(i.Modal, {
            title: j.intl.string(j.t["7ioAjs"]),
            subtitle: j.intl.format(j.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(E.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === G) return (0, n.jsx)(f.A, {
                    subscriptionTier: v.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        T()
                    },
                    onSubscribeModalClose: e => {
                        if (e) return b.Ay.fetchActivePromotions()
                    }
                })
            })(),
            transitionState: S,
            onClose: T,
            children: (l = (0, c.N5)(), o = (0, c.P6)(), G ? (0, n.jsx)(y, {
                partnerIds: O
            }) : (0, n.jsxs)("div", {
                className: N.kL,
                children: [(0, n.jsx)("div", {
                    className: N.Ps,
                    children: (0, n.jsx)(i.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: j.intl.format(j.t["43kZKL"], {
                            days: o
                        })
                    })
                }), (0, n.jsx)("div", {
                    className: N.G9,
                    children: (0, n.jsx)(A.P, {
                        percentage: l
                    })
                }), (0, n.jsx)("div", {
                    className: N.kR,
                    children: Object.entries(V).sort((e, t) => {
                        let [r] = e, [n] = t;
                        return n.localeCompare(r)
                    }).map(e => {
                        let [t, r] = e;
                        return (0, n.jsx)(I, {
                            promotionRecurrences: r
                        }, t)
                    })
                })]
            }))
        })
    },
    T = e => {
        let {
            analyticsLocations: t,
            partnerIds: a
        } = e;
        o.default.track(E.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), b.Ay.fetchActivePromotions(), (0, l.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(r.bind(r, 161319));
            return t => (0, n.jsx)(e, {
                ...t,
                partnerIds: a
            })
        })
    }