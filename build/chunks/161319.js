/** chunk id: 161319 params = (module,exports,require) **/
r.d(t, {
    Recurring3PModal: () => y,
    uE: () => P
}), r(321073);
var a = r(627968),
    n = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    o = r(287809),
    d = r(954571),
    c = r(975571),
    u = r(927578),
    m = r(792656),
    _ = r(264779),
    p = r(597758),
    f = r(35587),
    b = r(412260),
    h = r(852218),
    g = r(934204),
    x = r(116011),
    C = r(788868),
    A = r(652215),
    R = r(985018),
    v = r(276478);
let E = () => Object.entries(x.o).map(e => {
        let [t, r] = e;
        return (0, a.jsx)("div", {
            className: v.lA,
            children: (0, a.jsxs)("div", {
                className: v.LV,
                children: [(0, a.jsxs)("div", {
                    className: v.JN,
                    children: [(0, a.jsx)("div", {
                        className: v.MC,
                        children: (0, a.jsx)(i.XAi, {
                            size: "refresh_sm"
                        })
                    }), (0, a.jsxs)("div", {
                        className: v.yO,
                        children: [(0, a.jsx)(i.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: R.intl.string(r.title)
                        }), (0, a.jsx)(i.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: R.intl.string(r.body)
                        })]
                    })]
                }), (0, a.jsx)("div", {
                    className: v.R4,
                    children: (0, a.jsx)(l._V3, {
                        src: r.asset,
                        className: v.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            })
        }, t)
    }),
    N = e => {
        let {
            promotionRecurrences: t
        } = e, [r, s] = n.useState(t.length > 1), [l, o] = n.useState([]);
        return n.useEffect(() => {
            o([t.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [t]), (0, a.jsxs)("div", {
            children: [l.map(e => (0, a.jsx)(x.w, {
                recurrence: e,
                showPartnerLogo: !0,
                showPartnerImage: !0
            }, e.id)), r && (0, a.jsx)(i.DUT, {
                className: v.K8,
                onClick: () => {
                    s(!1), o([...l, ...t.slice(1)])
                },
                children: (0, a.jsx)(i.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t.rjjZxV)
                })
            })]
        })
    },
    j = e => {
        let {
            percentage: t
        } = e;
        return (0, a.jsxs)("div", {
            className: v.hr,
            children: [t > 0 && t < 100 && (0, a.jsx)(() => (0, a.jsx)("div", {
                className: v.ML,
                style: {
                    left: `calc(${t}% - 5px)`
                },
                children: (0, a.jsx)(g.z, {})
            }), {}), (0, a.jsx)("div", {
                className: v.SX,
                style: {
                    width: `${t}%`
                }
            })]
        })
    },
    I = e => e.promotionType === h.pt.THIRD_PARTY_OUTBOUND_RECURRING ? e.partnerId?.toLowerCase() ?? null : e.outboundTitle.toLowerCase(),
    y = e => {
        let t, r, n, {
                transitionState: l,
                onClose: d
            } = e,
            {
                promotionsLoaded: h,
                claimedOutboundPromotionCodeMap: g
            } = (0, f.y7)(),
            y = (0, s.yK)([b.A], () => b.A.outboundRecurringPromotions),
            P = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            S = !1 === u.Ay.isPremiumExactly(P, C.PremiumTypes.TIER_2),
            T = P?.isFractionalPremiumWithNoStandardSub(),
            w = null == P || S || T;
        if (!1 === h) return (0, a.jsx)(i.y$y, {});
        let O = (e => {
            let {
                promotions: t,
                codesByPromotion: r
            } = e, a = {};
            return t.filter(e => !0 === (0, _.HB)({
                promotionPartner: e.outboundTitle,
                promotionType: e.promotionType
            })).forEach(e => {
                let t = I(e),
                    n = (e => {
                        let {
                            promotion: t
                        } = e, r = I(t);
                        return null == r ? null : x.o[r] ?? null
                    })({
                        promotion: e
                    });
                if (null == t || null == n) return;
                t in a || (a[t] = []);
                let i = {
                    id: e.id,
                    partnerId: t,
                    startDate: e.startDate,
                    endDate: e.endDate,
                    code: r[e.id] ?? null,
                    ...n
                };
                a[t].push(i)
            }), a
        })({
            promotions: y,
            codesByPromotion: g
        });
        return (0, a.jsx)(i.Modal, {
            title: R.intl.string(R.t["7ioAjs"]),
            subtitle: R.intl.format(R.t.LOYRxB, {
                helpCenterLink: c.A.getArticleURL(A.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === w) return (0, a.jsx)(m.A, {
                    subscriptionTier: C.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        d()
                    },
                    onSubscribeModalClose: e => {
                        if (e) return p.Ay.fetchActivePromotions()
                    }
                })
            })(),
            transitionState: l,
            onClose: d,
            children: (r = new Date((t = new Date(new Date().toLocaleString("en-US", {
                timeZone: "America/New_York"
            }))).getFullYear(), t.getMonth() + 1, 0).getDate(), n = t.getDate() / r * 100, w ? (0, a.jsx)(E, {}) : (0, a.jsxs)("div", {
                className: v.kL,
                children: [(0, a.jsx)("div", {
                    className: v.Ps,
                    children: (0, a.jsx)(i.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: R.intl.format(R.t["43kZKL"], {
                            days: r - t.getDate()
                        })
                    })
                }), (0, a.jsx)("div", {
                    className: v.G9,
                    children: (0, a.jsx)(j, {
                        percentage: n
                    })
                }), (0, a.jsx)("div", {
                    className: v.kR,
                    children: Object.entries(O).sort((e, t) => {
                        let [r] = e, [a] = t;
                        return a.localeCompare(r)
                    }).map(e => {
                        let [t, r] = e;
                        return (0, a.jsx)(N, {
                            promotionRecurrences: r
                        }, t)
                    })
                })]
            }))
        })
    },
    P = e => {
        let {
            analyticsLocations: t
        } = e;
        d.default.track(A.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), p.Ay.fetchActivePromotions(), (0, l.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(r.bind(r, 161319));
            return t => (0, a.jsx)(e, {
                ...t
            })
        })
    }