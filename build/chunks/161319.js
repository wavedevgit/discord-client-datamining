/** chunk id: 161319 params = (module,exports,require) **/
n.d(t, {
    PR: () => P,
    Recurring3PModal: () => L,
    uE: () => M
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(544028),
    d = n(287809),
    c = n(954571),
    u = n(975571),
    _ = n(927578),
    m = n(728458),
    g = n(792656),
    A = n(264779),
    h = n(597758),
    x = n(35587),
    p = n(412260),
    T = n(852218),
    E = n(699443),
    C = n(934204),
    S = n(788868),
    f = n(652215),
    N = n(985018),
    b = n(929993),
    I = n(870378),
    v = n(8496);
let j = {
        [T.KS]: {
            title: N.t.sfGgOG,
            body: N.t.igiSKe,
            bodyWithExpiration: N.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, i.jsx)(E.a1, {}),
                light: (0, i.jsx)(E.Gn, {})
            },
            asset: v.A
        },
        [T.Cs]: {
            title: N.t["9N8obd"],
            body: N.t["34g+Z3"],
            bodyWithExpiration: N.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, i.jsx)(E.WF, {}),
                light: (0, i.jsx)(E.s, {})
            },
            asset: I.A
        }
    },
    O = e => {
        let {
            recurrence: t
        } = e, n = (0, i.jsx)(l.rOg, {
            color: a.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), r = (0, i.jsx)(l.K0, {
            icon: l.TdU,
            size: "sm",
            variant: "secondary",
            "aria-label": "",
            color: "icon-feedback-positive",
            onClick: () => {
                navigator.clipboard.writeText(t.code), d(n)
            }
        }), [o, d] = s.useState(() => r);
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
                    text: N.intl.formatToPlainString(N.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), c.default.track(f.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    y = () => Object.entries(j).map(e => {
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
                            children: N.intl.string(n.title)
                        }), (0, i.jsx)(l.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: N.intl.string(n.body)
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: b.R4,
                    children: (0, i.jsx)(a._V3, {
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
    R = e => {
        var t;
        let n, d, {
                promotionRecurrences: c
            } = e,
            [_, g] = s.useState(c.length > 1),
            [h, x] = s.useState([]),
            [p, T] = s.useState(new Set);
        s.useEffect(() => {
            x([c.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [c]);
        let E = (t = c[0].partnerId, n = (0, r.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (d = j[t]) ? null : n ? d.logos.dark : d.logos.light),
            C = (0, i.jsx)(a._V3, {
                src: c[0].asset,
                className: b.Ys,
                width: 100,
                height: 100,
                zoomable: !1
            });
        return (0, i.jsxs)("div", {
            children: [h.map((e, t) => {
                let n = p.has(e.id),
                    s = null == e.code;
                return (0, i.jsxs)("div", {
                    className: b.lA,
                    children: [(0, i.jsxs)("div", {
                        className: b.LV,
                        children: [(0, i.jsxs)("div", {
                            className: b.JN,
                            children: [E, (0, i.jsxs)("div", {
                                className: b.yO,
                                children: [(0, i.jsx)(l.DZT, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: N.intl.string(e.title)
                                }), (0, i.jsx)(l.DZT, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: n ? N.intl.format(N.t.i2EuFO, {
                                        helpdeskArticle: u.A.getArticleURL(f.MVz.RECURRING_PROMOTION)
                                    }) : s ? N.intl.string(e.body) : N.intl.format(e.bodyWithExpiration, {
                                        date: e.endDate
                                    })
                                })]
                            }), s && (n ? (0, i.jsx)(l.$nd, {
                                icon: l.EpV,
                                variant: "critical-secondary",
                                size: "sm",
                                disabled: !0,
                                text: N.intl.string(N.t["8LKchl"])
                            }) : (0, i.jsx)(l.$nd, {
                                icon: l.XAi,
                                variant: "overlay-primary",
                                size: "sm",
                                text: N.intl.string(N.t.vwASIl),
                                onClick: () => {
                                    (0, A.kd)({
                                        promotionId: e.id,
                                        analyticsLocations: []
                                    }).then(n => {
                                        x([...h.slice(0, t), {
                                            ...e,
                                            code: n.code
                                        }, ...h.slice(t + 1)])
                                    }).catch(t => {
                                        T(t => new Set([...t, e.id])), m.A.captureException(t)
                                    })
                                }
                            }))]
                        }), (0, i.jsx)("div", {
                            className: b.R4,
                            children: C
                        })]
                    }), null != e.code && (0, i.jsx)(O, {
                        recurrence: e
                    })]
                }, e.id)
            }), _ && (0, i.jsx)(l.DUT, {
                className: b.K8,
                onClick: () => {
                    g(!1), x([...h, ...c.slice(1)])
                },
                children: (0, i.jsx)(l.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: N.intl.string(N.t.rjjZxV)
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
                children: (0, i.jsx)(C.z, {})
            }), {}), (0, i.jsx)("div", {
                className: b.SX,
                style: {
                    width: `${t}%`
                }
            })]
        })
    },
    D = e => e.promotionType === T.pt.THIRD_PARTY_OUTBOUND_RECURRING ? e.partnerId?.toLowerCase() ?? null : e.outboundTitle.toLowerCase(),
    L = e => {
        let t, n, s, {
                transitionState: a,
                onClose: o
            } = e,
            {
                promotionsLoaded: c,
                claimedOutboundPromotionCodeMap: m
            } = (0, x.y7)(),
            T = (0, r.yK)([p.A], () => p.A.outboundRecurringPromotions),
            E = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
            C = !1 === _.Ay.isPremiumExactly(E, S.PremiumTypes.TIER_2),
            I = E?.isFractionalPremiumWithNoStandardSub(),
            v = null == E || C || I;
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
                let t = D(e),
                    s = (e => {
                        let {
                            promotion: t
                        } = e, n = D(t);
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
            promotions: T,
            codesByPromotion: m
        });
        return (0, i.jsx)(l.Modal, {
            title: N.intl.string(N.t["7ioAjs"]),
            subtitle: N.intl.format(N.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(f.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === v) return (0, i.jsx)(g.A, {
                    subscriptionTier: S.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        o()
                    },
                    onSubscribeModalClose: e => {
                        if (e) return h.Ay.fetchActivePromotions()
                    }
                })
            })(),
            transitionState: a,
            onClose: o,
            children: (n = new Date((t = new Date(new Date().toLocaleString("en-US", {
                timeZone: "America/New_York"
            }))).getFullYear(), t.getMonth() + 1, 0).getDate(), s = t.getDate() / n * 100, v ? (0, i.jsx)(y, {}) : (0, i.jsxs)("div", {
                className: b.kL,
                children: [(0, i.jsx)("div", {
                    className: b.Ps,
                    children: (0, i.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: N.intl.format(N.t["43kZKL"], {
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
                        return (0, i.jsx)(R, {
                            promotionRecurrences: n
                        }, t)
                    })
                })]
            }))
        })
    },
    M = e => {
        let {
            analyticsLocations: t
        } = e;
        c.default.track(f.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), h.Ay.fetchActivePromotions(), (0, a.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(n.bind(n, 161319));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }