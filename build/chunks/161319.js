/** chunk id: 161319 params = (module,exports,require) **/
n.d(t, {
    PR: () => P,
    Recurring3PModal: () => L,
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
    A = n(792656),
    m = n(264779),
    h = n(597758),
    p = n(35587),
    x = n(412260),
    E = n(852218),
    T = n(699443),
    S = n(934204),
    C = n(788868),
    I = n(652215),
    f = n(985018),
    N = n(342087),
    b = n(870378),
    v = n(8496);
let O = {
        [E.KS]: {
            title: f.t.sfGgOG,
            body: f.t.igiSKe,
            bodyWithExpiration: f.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, i.jsx)(T.a1, {}),
                light: (0, i.jsx)(T.Gn, {})
            },
            asset: v.A
        },
        [E.Cs]: {
            title: f.t["9N8obd"],
            body: f.t["34g+Z3"],
            bodyWithExpiration: f.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, i.jsx)(T.WF, {}),
                light: (0, i.jsx)(T.s, {})
            },
            asset: b.A
        }
    },
    j = e => {
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
            className: N.oP,
            children: (0, i.jsxs)("div", {
                className: N.t0,
                children: [(0, i.jsx)("div", {
                    className: N.cD,
                    children: (0, i.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), o, (0, i.jsx)(l.$nd, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: f.intl.formatToPlainString(f.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), c.default.track(I.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    R = () => Object.entries(O).map(e => {
        let [t, n] = e;
        return (0, i.jsx)("div", {
            className: N.lA,
            children: (0, i.jsxs)("div", {
                className: N.LV,
                children: [(0, i.jsxs)("div", {
                    className: N.JN,
                    children: [(0, i.jsx)("div", {
                        className: N.MC,
                        children: (0, i.jsx)(l.XAi, {
                            size: "refresh_sm"
                        })
                    }), (0, i.jsxs)("div", {
                        className: N.yO,
                        children: [(0, i.jsx)(l.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: f.intl.string(n.title)
                        }), (0, i.jsx)(l.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: f.intl.string(n.body)
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: N.R4,
                    children: (0, i.jsx)(r._V3, {
                        src: n.asset,
                        className: N.Ys,
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
            [_, A] = s.useState(c.length > 1),
            [h, p] = s.useState([]),
            [x, E] = s.useState(new Set);
        s.useEffect(() => {
            p([c.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [c]);
        let T = (t = c[0].partnerId, n = (0, a.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (d = O[t]) ? null : n ? d.logos.dark : d.logos.light),
            S = (0, i.jsx)(r._V3, {
                src: c[0].asset,
                className: N.Ys,
                width: 100,
                height: 100,
                zoomable: !1
            });
        return (0, i.jsxs)("div", {
            children: [h.map((e, t) => {
                let n = x.has(e.id),
                    s = null == e.code;
                return (0, i.jsxs)("div", {
                    className: N.lA,
                    children: [(0, i.jsxs)("div", {
                        className: N.LV,
                        children: [(0, i.jsxs)("div", {
                            className: N.JN,
                            children: [T, (0, i.jsxs)("div", {
                                className: N.yO,
                                children: [(0, i.jsx)(l.DZT, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: f.intl.string(e.title)
                                }), (0, i.jsx)(l.DZT, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: n ? f.intl.format(f.t.i2EuFO, {
                                        helpdeskArticle: u.A.getArticleURL(I.MVz.RECURRING_PROMOTION)
                                    }) : s ? f.intl.string(e.body) : f.intl.format(e.bodyWithExpiration, {
                                        date: e.endDate
                                    })
                                })]
                            }), s && (n ? (0, i.jsx)(l.$nd, {
                                icon: l.EpV,
                                variant: "critical-secondary",
                                size: "sm",
                                disabled: !0,
                                text: f.intl.string(f.t["8LKchl"])
                            }) : (0, i.jsx)(l.$nd, {
                                icon: l.XAi,
                                variant: "overlay-primary",
                                size: "sm",
                                text: f.intl.string(f.t.vwASIl),
                                onClick: () => {
                                    (0, m.kd)({
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
                            className: N.R4,
                            children: S
                        })]
                    }), null != e.code && (0, i.jsx)(j, {
                        recurrence: e
                    })]
                }, e.id)
            }), _ && (0, i.jsx)(l.DUT, {
                className: N.K8,
                onClick: () => {
                    A(!1), p([...h, ...c.slice(1)])
                },
                children: (0, i.jsx)(l.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: f.intl.string(f.t.rjjZxV)
                })
            })]
        })
    },
    P = e => {
        let {
            percentage: t
        } = e;
        return (0, i.jsxs)("div", {
            className: N.hr,
            children: [t > 0 && t < 100 && (0, i.jsx)(() => (0, i.jsx)("div", {
                className: N.ML,
                style: {
                    left: `calc(${t}% - 5px)`
                },
                children: (0, i.jsx)(S.z, {})
            }), {}), (0, i.jsx)("div", {
                className: N.SX,
                style: {
                    width: `${t}%`
                }
            })]
        })
    },
    D = e => e.promotionType === E.pt.THIRD_PARTY_OUTBOUND_RECURRING ? e.partnerId?.toLowerCase() ?? null : e.outboundTitle.toLowerCase(),
    L = e => {
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
            b = T?.isFractionalPremiumWithNoStandardSub(),
            v = null == T || S || b;
        if (!1 === c) return (0, i.jsx)(l.y$y, {});
        let j = (e => {
            let {
                promotions: t,
                codesByPromotion: n
            } = e, i = {};
            return t.filter(e => !0 === (0, m.HB)({
                promotionPartner: e.outboundTitle,
                promotionType: e.promotionType
            })).forEach(e => {
                let t = D(e),
                    s = (e => {
                        let {
                            promotion: t
                        } = e, n = D(t);
                        return null == n ? null : O[n] ?? null
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
            title: f.intl.string(f.t["7ioAjs"]),
            subtitle: f.intl.format(f.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(I.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === v) return (0, i.jsx)(A.A, {
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
                className: N.kL,
                children: [(0, i.jsx)("div", {
                    className: N.Ps,
                    children: (0, i.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: f.intl.format(f.t["43kZKL"], {
                            days: n - t.getDate()
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: N.G9,
                    children: (0, i.jsx)(P, {
                        percentage: s
                    })
                }), (0, i.jsx)("div", {
                    className: N.kR,
                    children: Object.entries(j).sort((e, t) => {
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
        c.default.track(I.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
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