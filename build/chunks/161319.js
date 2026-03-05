/** chunk id: 161319 params = (module,exports,require) **/
n.d(t, {
    PR: () => P,
    Recurring3PModal: () => D,
    uE: () => G
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(544028),
    d = n(287809),
    c = n(954571),
    u = n(975571),
    _ = n(927578),
    g = n(728458),
    m = n(792656),
    A = n(264779),
    h = n(597758),
    p = n(35587),
    x = n(412260),
    E = n(852218),
    T = n(699443),
    S = n(934204),
    C = n(788868),
    f = n(652215),
    I = n(985018),
    b = n(929993),
    N = n(870378),
    v = n(8496);
let j = {
        [E.KS]: {
            title: I.t.sfGgOG,
            body: I.t.igiSKe,
            bodyWithExpiration: I.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, i.jsx)(T.a1, {}),
                light: (0, i.jsx)(T.Gn, {})
            },
            asset: v.A
        },
        [E.Cs]: {
            title: I.t["9N8obd"],
            body: I.t["34g+Z3"],
            bodyWithExpiration: I.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, i.jsx)(T.WF, {}),
                light: (0, i.jsx)(T.s, {})
            },
            asset: N.A
        }
    },
    O = e => {
        let {
            recurrence: t
        } = e, n = (0, i.jsx)(l.rOg, {
            color: r.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), a = (0, i.jsx)(l.K0, {
            icon: l.TdU,
            size: "sm",
            variant: "secondary",
            "aria-label": "",
            color: "icon-feedback-positive",
            onClick: () => {
                navigator.clipboard.writeText(t.code), d(n)
            }
        }), [o, d] = s.useState(() => a);
        if (null != t.code) return (0, i.jsx)("div", {
            className: b.oP,
            children: (0, i.jsxs)("div", {
                className: b.t0,
                children: [(0, i.jsx)("div", {
                    className: b.cD,
                    children: (0, i.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), o, (0, i.jsx)(l.$nd, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: I.intl.formatToPlainString(I.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), c.default.track(f.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    R = () => Object.entries(j).map(e => {
        let [t, n] = e;
        return (0, i.jsx)("div", {
            className: b.lA,
            children: (0, i.jsxs)("div", {
                className: b.LV,
                children: [(0, i.jsxs)("div", {
                    className: b.JN,
                    children: [(0, i.jsx)("div", {
                        className: b.MC,
                        children: (0, i.jsx)(l.XAi, {
                            size: "refresh_sm"
                        })
                    }), (0, i.jsxs)("div", {
                        className: b.yO,
                        children: [(0, i.jsx)(l.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: I.intl.string(n.title)
                        }), (0, i.jsx)(l.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: I.intl.string(n.body)
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: b.R4,
                    children: (0, i.jsx)(r._V3, {
                        src: n.asset,
                        className: b.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            })
        }, t)
    }),
    y = e => {
        var t;
        let n, d, {
                promotionRecurrences: c
            } = e,
            [_, m] = s.useState(c.length > 1),
            [h, p] = s.useState([]),
            [x, E] = s.useState(new Set);
        s.useEffect(() => {
            p([c.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [c]);
        let T = (t = c[0].partnerId, n = (0, a.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (d = j[t]) ? null : n ? d.logos.dark : d.logos.light),
            S = (0, i.jsx)(r._V3, {
                src: c[0].asset,
                className: b.Ys,
                width: 100,
                height: 100,
                zoomable: !1
            });
        return (0, i.jsxs)("div", {
            children: [h.map((e, t) => {
                let n = x.has(e.id),
                    s = null == e.code;
                return (0, i.jsxs)("div", {
                    className: b.lA,
                    children: [(0, i.jsxs)("div", {
                        className: b.LV,
                        children: [(0, i.jsxs)("div", {
                            className: b.JN,
                            children: [T, (0, i.jsxs)("div", {
                                className: b.yO,
                                children: [(0, i.jsx)(l.DZT, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: I.intl.string(e.title)
                                }), (0, i.jsx)(l.DZT, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: n ? I.intl.format(I.t.i2EuFO, {
                                        helpdeskArticle: u.A.getArticleURL(f.MVz.RECURRING_PROMOTION)
                                    }) : s ? I.intl.string(e.body) : I.intl.format(e.bodyWithExpiration, {
                                        date: e.endDate
                                    })
                                })]
                            }), s && (n ? (0, i.jsx)(l.$nd, {
                                icon: l.EpV,
                                variant: "critical-secondary",
                                size: "sm",
                                disabled: !0,
                                text: I.intl.string(I.t["8LKchl"])
                            }) : (0, i.jsx)(l.$nd, {
                                icon: l.XAi,
                                variant: "overlay-primary",
                                size: "sm",
                                text: I.intl.string(I.t.vwASIl),
                                onClick: () => {
                                    (0, A.kd)({
                                        promotionId: e.id,
                                        analyticsLocations: []
                                    }).then(n => {
                                        p([...h.slice(0, t), {
                                            ...e,
                                            code: n.code
                                        }, ...h.slice(t + 1)])
                                    }).catch(t => {
                                        E(t => new Set([...t, e.id])), g.A.captureException(t)
                                    })
                                }
                            }))]
                        }), (0, i.jsx)("div", {
                            className: b.R4,
                            children: S
                        })]
                    }), null != e.code && (0, i.jsx)(O, {
                        recurrence: e
                    })]
                }, e.id)
            }), _ && (0, i.jsx)(l.DUT, {
                className: b.K8,
                onClick: () => {
                    m(!1), p([...h, ...c.slice(1)])
                },
                children: (0, i.jsx)(l.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: I.intl.string(I.t.rjjZxV)
                })
            })]
        })
    },
    P = e => {
        let {
            percentage: t
        } = e;
        return (0, i.jsxs)("div", {
            className: b.hr,
            children: [t > 0 && t < 100 && (0, i.jsx)(() => (0, i.jsx)("div", {
                className: b.ML,
                style: {
                    left: `calc(${t}% - 5px)`
                },
                children: (0, i.jsx)(S.z, {})
            }), {}), (0, i.jsx)("div", {
                className: b.SX,
                style: {
                    width: `${t}%`
                }
            })]
        })
    },
    L = e => e.promotionType === E.pt.THIRD_PARTY_OUTBOUND_RECURRING ? e.partnerId?.toLowerCase() ?? null : e.outboundTitle.toLowerCase(),
    D = e => {
        let t, n, s, {
                transitionState: r,
                onClose: o
            } = e,
            {
                promotionsLoaded: c,
                claimedOutboundPromotionCodeMap: g
            } = (0, p.y7)(),
            E = (0, a.yK)([x.A], () => x.A.outboundRecurringPromotions),
            T = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
            S = !1 === _.Ay.isPremiumExactly(T, C.PremiumTypes.TIER_2),
            N = T?.isFractionalPremiumWithNoStandardSub(),
            v = null == T || S || N;
        if (!1 === c) return (0, i.jsx)(l.y$y, {});
        let O = (e => {
            let {
                promotions: t,
                codesByPromotion: n
            } = e, i = {};
            return t.filter(e => !0 === (0, A.HB)({
                promotionPartner: e.outboundTitle,
                promotionType: e.promotionType
            })).forEach(e => {
                let t = L(e),
                    s = (e => {
                        let {
                            promotion: t
                        } = e, n = L(t);
                        return null == n ? null : j[n] ?? null
                    })({
                        promotion: e
                    });
                if (null == t || null == s) return;
                t in i || (i[t] = []);
                let l = {
                    id: e.id,
                    partnerId: t,
                    startDate: e.startDate,
                    endDate: e.endDate,
                    code: n[e.id] ?? null,
                    ...s
                };
                i[t].push(l)
            }), i
        })({
            promotions: E,
            codesByPromotion: g
        });
        return (0, i.jsx)(l.Modal, {
            title: I.intl.string(I.t["7ioAjs"]),
            subtitle: I.intl.format(I.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(f.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === v) return (0, i.jsx)(m.A, {
                    subscriptionTier: C.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        o()
                    },
                    onSubscribeModalClose: e => {
                        if (e) return h.Ay.fetchActivePromotions()
                    }
                })
            })(),
            transitionState: r,
            onClose: o,
            children: (n = new Date((t = new Date(new Date().toLocaleString("en-US", {
                timeZone: "America/New_York"
            }))).getFullYear(), t.getMonth() + 1, 0).getDate(), s = t.getDate() / n * 100, v ? (0, i.jsx)(R, {}) : (0, i.jsxs)("div", {
                className: b.kL,
                children: [(0, i.jsx)("div", {
                    className: b.Ps,
                    children: (0, i.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: I.intl.format(I.t["43kZKL"], {
                            days: n - t.getDate()
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: b.G9,
                    children: (0, i.jsx)(P, {
                        percentage: s
                    })
                }), (0, i.jsx)("div", {
                    className: b.kR,
                    children: Object.entries(O).sort((e, t) => {
                        let [n] = e, [i] = t;
                        return i.localeCompare(n)
                    }).map(e => {
                        let [t, n] = e;
                        return (0, i.jsx)(y, {
                            promotionRecurrences: n
                        }, t)
                    })
                })]
            }))
        })
    },
    G = e => {
        let {
            analyticsLocations: t
        } = e;
        c.default.track(f.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), h.Ay.fetchActivePromotions(), (0, r.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(n.bind(n, 161319));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }