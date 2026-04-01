/** chunk id: 161319 params = (module,exports,require) **/
r.d(t, {
    Recurring3PModal: () => S,
    u: () => T
}), r(321073);
var a = r(627968),
    n = r(64700),
    s = r(158954),
    i = r(311907),
    l = r(397927),
    o = r(287809),
    d = r(954571),
    c = r(405269),
    u = r(975571),
    m = r(927578),
    _ = r(398523),
    p = r(881373),
    f = r(792656),
    h = r(264779),
    b = r(597758),
    x = r(35587),
    g = r(412260),
    C = r(852218),
    A = r(729640),
    R = r(116011),
    v = r(788868),
    E = r(652215),
    N = r(985018),
    j = r(276478);
let I = e => {
        let {
            partnerIds: t
        } = e;
        return (null != t ? Object.entries(R.oL).filter(e => {
            let [r] = e;
            return t.includes(r)
        }) : Object.entries(R.oL)).map(e => {
            let [t, r] = e;
            return (0, a.jsx)("div", {
                className: j.lA,
                children: (0, a.jsxs)("div", {
                    className: j.LV,
                    children: [(0, a.jsxs)("div", {
                        className: j.JN,
                        children: [(0, a.jsx)("div", {
                            className: j.MC,
                            children: (0, a.jsx)(s.XAi, {
                                size: "refresh_sm"
                            })
                        }), (0, a.jsxs)("div", {
                            className: j.yO,
                            children: [(0, a.jsx)(s.DZT, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: N.intl.formatToPlainString(r.title, r.titleParams ?? {})
                            }), (0, a.jsx)(s.DZT, {
                                variant: "heading-sm/medium",
                                color: "text-subtle",
                                children: N.intl.formatToPlainString(r.body, r.bodyParams ?? {})
                            })]
                        })]
                    }), (0, a.jsx)("div", {
                        className: j.R4,
                        children: (0, a.jsx)(l._V3, {
                            src: r.asset,
                            className: j.Ys,
                            width: 100,
                            height: 100,
                            zoomable: !1
                        })
                    })]
                })
            }, t)
        })
    },
    y = e => {
        let {
            promotionRecurrences: t
        } = e, [r, i] = n.useState(t.length > 1), [l, o] = n.useState([]);
        return n.useEffect(() => {
            o([t.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [t]), (0, a.jsxs)("div", {
            children: [l.map(e => (0, a.jsx)(R.wx, {
                recurrence: e,
                showPartnerLogo: !0,
                showPartnerImage: !0
            }, e.id)), r && (0, a.jsx)(s.DUT, {
                className: j.K8,
                onClick: () => {
                    i(!1), o([...l, ...t.slice(1)])
                },
                children: (0, a.jsx)(s.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: N.intl.string(N.t.rjjZxV)
                })
            })]
        })
    },
    P = e => e.promotionType === C.pt.THIRD_PARTY_OUTBOUND_RECURRING ? e.partnerId?.toLowerCase() ?? null : e.outboundTitle.toLowerCase(),
    S = e => {
        let t, r, l, d, {
                transitionState: S,
                onClose: T,
                partnerIds: w
            } = e,
            O = (t = _.A.useExperiment({
                location: "Recurring3PModal"
            }).enabled, r = (0, p.YS)({
                location: "Recurring3PModal"
            }).functionalityEnabled, n.useMemo(() => {
                let e = [];
                return t && e.push(C.KS, C.Cs), r && e.push(C.XY), null != w ? w.filter(t => e.includes(t)) : e
            }, [t, r, w])),
            {
                promotionsLoaded: D,
                claimedOutboundPromotionCodeMap: M
            } = (0, x.y7)(),
            U = (0, i.yK)([g.A], () => g.A.outboundRecurringPromotions),
            L = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
            B = !1 === m.Ay.isPremiumExactly(L, v.PremiumTypes.TIER_2),
            k = L?.isFractionalPremiumWithNoStandardSub(),
            G = null == L || B || k;
        if (!1 === D) return (0, a.jsx)(s.y$y, {});
        let V = (e => {
            let {
                promotions: t,
                codesByPromotion: r,
                partnerIds: a
            } = e, n = {};
            return t.filter(e => !0 === (0, h.HB)({
                promotionPartner: e.outboundTitle,
                promotionType: e.promotionType
            })).forEach(e => {
                let t = P(e),
                    s = (e => {
                        let {
                            promotion: t
                        } = e, r = P(t);
                        return null == r ? null : R.oL[r] ?? null
                    })({
                        promotion: e
                    });
                if (null == t || null == s || null != a && !a.includes(t)) return;
                t in n || (n[t] = []);
                let i = {
                    id: e.id,
                    partnerId: t,
                    startDate: e.startDate,
                    endDate: e.endDate,
                    code: r[e.id] ?? null,
                    ...s,
                    title: N.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                    body: N.intl.formatToPlainString(s.body, s.bodyParams ?? {})
                };
                n[t].push(i)
            }), n
        })({
            promotions: U,
            codesByPromotion: M,
            partnerIds: O
        });
        return (0, a.jsx)(s.Modal, {
            title: N.intl.string(N.t["7ioAjs"]),
            subtitle: N.intl.format(N.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(E.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === G) return (0, a.jsx)(f.A, {
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
            children: (l = (0, c.N5)(), d = (0, c.P6)(), G ? (0, a.jsx)(I, {
                partnerIds: O
            }) : (0, a.jsxs)("div", {
                className: j.kL,
                children: [(0, a.jsx)("div", {
                    className: j.Ps,
                    children: (0, a.jsx)(s.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: N.intl.format(N.t["43kZKL"], {
                            days: d
                        })
                    })
                }), (0, a.jsx)("div", {
                    className: j.G9,
                    children: (0, a.jsx)(A.P, {
                        percentage: l
                    })
                }), (0, a.jsx)("div", {
                    className: j.kR,
                    children: Object.entries(V).sort((e, t) => {
                        let [r] = e, [a] = t;
                        return a.localeCompare(r)
                    }).map(e => {
                        let [t, r] = e;
                        return (0, a.jsx)(y, {
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
            partnerIds: n
        } = e;
        d.default.track(E.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), b.Ay.fetchActivePromotions(), (0, l.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(r.bind(r, 161319));
            return t => (0, a.jsx)(e, {
                ...t,
                partnerIds: n
            })
        })
    }