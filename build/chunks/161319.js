/** Chunk was on web.js **/
/** chunk id: 161319, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    PR: () => k,
    Recurring3PModal: () => F,
    uE: () => B
}), n(896048), n(638769), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(544028),
    c = n(287809),
    u = n(954571),
    d = n(975571),
    f = n(927578),
    p = n(728458),
    _ = n(792656),
    h = n(264779),
    m = n(597758),
    g = n(35587),
    E = n(412260),
    y = n(852218),
    b = n(699443),
    O = n(934204),
    v = n(788868),
    A = n(652215),
    I = n(985018),
    S = n(342087),
    T = n(870378),
    C = n(8496);

function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            N(e, t, n[t])
        })
    }
    return e
}

function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function P(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let D = {
        [y.KS]: {
            title: I.t.sfGgOG,
            body: I.t.igiSKe,
            bodyWithExpiration: I.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(b.a1, {}),
                light: (0, r.jsx)(b.Gn, {})
            },
            asset: C.A
        },
        [y.Cs]: {
            title: I.t["9N8obd"],
            body: I.t["34g+Z3"],
            bodyWithExpiration: I.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(b.WF, {}),
                light: (0, r.jsx)(b.s, {})
            },
            asset: T.A
        }
    },
    x = e => {
        let t = (0, s.bG)([l.A], () => (0, a.Mwr)(l.A.theme)),
            n = D[e];
        return null == n ? null : t ? n.logos.dark : n.logos.light
    },
    L = e => {
        let {
            recurrence: t
        } = e, n = (0, r.jsx)(a.rOg, {
            color: o.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), s = (0, r.jsx)(a.K0, {
            icon: a.TdU,
            size: "sm",
            variant: "secondary",
            "aria-label": "",
            color: "icon-feedback-positive",
            onClick: () => {
                navigator.clipboard.writeText(t.code), c(n)
            }
        }), [l, c] = i.useState(() => s);
        if (null != t.code) return (0, r.jsx)("div", {
            className: S.oP,
            children: (0, r.jsxs)("div", {
                className: S.t0,
                children: [(0, r.jsx)("div", {
                    className: S.cD,
                    children: (0, r.jsx)(a.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), l, (0, r.jsx)(a.$nd, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: I.intl.formatToPlainString(I.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), u.default.track(A.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    j = () => Object.entries(D).map(e => {
        let [t, n] = e;
        return (0, r.jsx)("div", {
            className: S.lA,
            children: (0, r.jsxs)("div", {
                className: S.LV,
                children: [(0, r.jsxs)("div", {
                    className: S.JN,
                    children: [(0, r.jsx)("div", {
                        className: S.MC,
                        children: (0, r.jsx)(a.XAi, {
                            size: "refresh_sm"
                        })
                    }), (0, r.jsxs)("div", {
                        className: S.yO,
                        children: [(0, r.jsx)(a.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: I.intl.string(n.title)
                        }), (0, r.jsx)(a.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: I.intl.string(n.body)
                        })]
                    })]
                }), (0, r.jsx)("div", {
                    className: S.R4,
                    children: (0, r.jsx)(o._V3, {
                        src: n.asset,
                        className: S.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1
                    })
                })]
            })
        }, t)
    }),
    M = e => {
        let {
            promotionRecurrences: t
        } = e, [n, s] = i.useState(t.length > 1), [l, c] = i.useState([]), [u, f] = i.useState(new Set);
        i.useEffect(() => {
            c([t.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [t]);
        let _ = x(t[0].partnerId),
            m = (0, r.jsx)(o._V3, {
                src: t[0].asset,
                className: S.Ys,
                width: 100,
                height: 100,
                zoomable: !1
            });
        return (0, r.jsxs)("div", {
            children: [l.map((e, t) => {
                let n = u.has(e.id),
                    i = null == e.code;
                return (0, r.jsxs)("div", {
                    className: S.lA,
                    children: [(0, r.jsxs)("div", {
                        className: S.LV,
                        children: [(0, r.jsxs)("div", {
                            className: S.JN,
                            children: [_, (0, r.jsxs)("div", {
                                className: S.yO,
                                children: [(0, r.jsx)(a.DZT, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: I.intl.string(e.title)
                                }), (0, r.jsx)(a.DZT, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: n ? I.intl.format(I.t.i2EuFO, {
                                        helpdeskArticle: d.A.getArticleURL(A.MVz.RECURRING_PROMOTION)
                                    }) : i ? I.intl.string(e.body) : I.intl.format(e.bodyWithExpiration, {
                                        date: e.endDate
                                    })
                                })]
                            }), i && (n ? (0, r.jsx)(a.$nd, {
                                icon: a.EpV,
                                variant: "critical-secondary",
                                size: "sm",
                                disabled: !0,
                                text: I.intl.string(I.t["8LKchl"])
                            }) : (0, r.jsx)(a.$nd, {
                                icon: a.XAi,
                                variant: "overlay-primary",
                                size: "sm",
                                text: I.intl.string(I.t.vwASIl),
                                onClick: () => {
                                    (0, h.kd)({
                                        promotionId: e.id,
                                        analyticsLocations: []
                                    }).then(n => {
                                        c([...l.slice(0, t), P(w({}, e), {
                                            code: n.code
                                        }), ...l.slice(t + 1)])
                                    }).catch(t => {
                                        f(t => new Set([...t, e.id])), p.A.captureException(t)
                                    })
                                }
                            }))]
                        }), (0, r.jsx)("div", {
                            className: S.R4,
                            children: m
                        })]
                    }), null != e.code && (0, r.jsx)(L, {
                        recurrence: e
                    })]
                }, e.id)
            }), n && (0, r.jsx)(a.DUT, {
                className: S.K8,
                onClick: () => {
                    s(!1), c([...l, ...t.slice(1)])
                },
                children: (0, r.jsx)(a.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: I.intl.string(I.t.rjjZxV)
                })
            })]
        })
    },
    k = e => {
        let {
            percentage: t
        } = e, n = () => {
            let e = 1.8;
            return (0, r.jsx)("div", {
                className: S.ML,
                style: {
                    left: "".concat(t - e, "%")
                },
                children: (0, r.jsx)(O.z, {})
            })
        };
        return (0, r.jsxs)("div", {
            className: S.hr,
            children: [t > 0 && t < 100 && (0, r.jsx)(n, {}), (0, r.jsx)("div", {
                className: S.SX,
                style: {
                    width: "".concat(t, "%")
                }
            })]
        })
    },
    U = e => {
        if (e.promotionType === y.pt.THIRD_PARTY_OUTBOUND_RECURRING) {
            var t, n;
            return null != (t = null == (n = e.partnerId) ? void 0 : n.toLowerCase()) ? t : null
        }
        return e.outboundTitle.toLowerCase()
    },
    G = e => {
        var t;
        let {
            promotion: n
        } = e, r = U(n);
        return null == r ? null : null != (t = D[r]) ? t : null
    },
    V = e => {
        let {
            promotions: t,
            codesByPromotion: n
        } = e, r = {};
        return t.filter(e => !0 === (0, h.HB)({
            promotionPartner: e.outboundTitle,
            promotionType: e.promotionType
        })).forEach(e => {
            var t;
            let i = U(e),
                a = G({
                    promotion: e
                });
            if (null == i || null == a) return;
            i in r || (r[i] = []);
            let s = w({
                id: e.id,
                partnerId: i,
                startDate: e.startDate,
                endDate: e.endDate,
                code: null != (t = n[e.id]) ? t : null
            }, a);
            r[i].push(s)
        }), r
    },
    F = e => {
        let {
            onClose: t
        } = e, {
            promotionsLoaded: n,
            claimedOutboundPromotionCodeMap: i
        } = (0, g.y7)(), o = (0, s.yK)([E.A], () => E.A.outboundRecurringPromotions), l = (0, s.bG)([c.default], () => c.default.getCurrentUser()), u = !1 === f.Ay.isPremiumExactly(l, v.PremiumTypes.TIER_2), p = null == l ? void 0 : l.isFractionalPremiumWithNoStandardSub(), h = null == l || u || p;
        if (!1 === n) return (0, r.jsx)(a.y$y, {});
        let y = V({
                promotions: o,
                codesByPromotion: i
            }),
            b = () => {
                if (!0 === h) return (0, r.jsx)(_.A, {
                    subscriptionTier: v.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        t()
                    },
                    onSubscribeModalClose: e => {
                        if (e) return m.Ay.fetchActivePromotions()
                    }
                })
            },
            O = () => {
                let e = new Date(new Date().toLocaleString("en-US", {
                        timeZone: "America/New_York"
                    })),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = e.getDate() / t * 100;
                return h ? (0, r.jsx)(j, {}) : (0, r.jsxs)("div", {
                    className: S.kL,
                    children: [(0, r.jsx)("div", {
                        className: S.Ps,
                        children: (0, r.jsx)(a.EYj, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: I.intl.format(I.t["43kZKL"], {
                                days: t - e.getDate()
                            })
                        })
                    }), (0, r.jsx)(k, {
                        percentage: n
                    }), (0, r.jsx)("div", {
                        className: S.kR,
                        children: Object.entries(y).sort((e, t) => {
                            let [n] = e, [r] = t;
                            return r.localeCompare(n)
                        }).map(e => {
                            let [t, n] = e;
                            return (0, r.jsx)(M, {
                                promotionRecurrences: n
                            }, t)
                        })
                    })]
                })
            };
        return (0, r.jsx)(a.Modal, {
            title: I.intl.string(I.t["7ioAjs"]),
            subtitle: I.intl.format(I.t.LOYRxB, {
                helpCenterLink: d.A.getArticleURL(A.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: b(),
            transitionState: a.ip4.ENTERED,
            onClose: t,
            children: O()
        })
    },
    B = e => {
        let {
            analyticsLocations: t
        } = e;
        u.default.track(A.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), m.Ay.fetchActivePromotions(), (0, o.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(n.bind(n, 161319));
            return t => (0, r.jsx)(e, w({}, t))
        })
    }