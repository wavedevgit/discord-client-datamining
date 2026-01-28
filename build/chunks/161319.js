/** Chunk was on 5606 **/
/** chunk id: 161319, original params: e,t,n (module,exports,require) **/
n.d(t, {
    PR: () => D,
    Recurring3PModal: () => L,
    uE: () => M
}), n(896048), n(638769), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(544028),
    c = n(287809),
    d = n(954571),
    u = n(975571),
    p = n(927578),
    _ = n(728458),
    m = n(792656),
    g = n(264779),
    f = n(597758),
    b = n(35587),
    h = n(412260),
    A = n(852218),
    E = n(699443),
    x = n(934204),
    O = n(788868),
    C = n(652215),
    y = n(985018),
    j = n(342087),
    T = n(870378),
    v = n(8496);

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let I = {
        [A.KS]: {
            title: y.t.sfGgOG,
            body: y.t.igiSKe,
            bodyWithExpiration: y.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(E.a1, {}),
                light: (0, r.jsx)(E.Gn, {})
            },
            asset: v.A
        },
        [A.Cs]: {
            title: y.t["9N8obd"],
            body: y.t["34g+Z3"],
            bodyWithExpiration: y.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(E.WF, {}),
                light: (0, r.jsx)(E.s, {})
            },
            asset: T.A
        }
    },
    N = e => {
        let {
            recurrence: t
        } = e, n = (0, r.jsx)(l.rOg, {
            color: a.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT
        }), s = (0, r.jsx)(l.K0, {
            icon: l.TdU,
            size: "sm",
            variant: "secondary",
            "aria-label": "",
            color: "icon-feedback-positive",
            onClick: () => {
                navigator.clipboard.writeText(t.code), c(n)
            }
        }), [o, c] = i.useState(() => s);
        if (null != t.code) return (0, r.jsx)("div", {
            className: j.oP,
            children: (0, r.jsxs)("div", {
                className: j.t0,
                children: [(0, r.jsx)("div", {
                    className: j.cD,
                    children: (0, r.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t.code
                    })
                }), o, (0, r.jsx)(l.$nd, {
                    variant: "overlay-primary",
                    size: "sm",
                    text: y.intl.formatToPlainString(y.t.DF68t7, {
                        redemptionURL: t.redemptionURL
                    }),
                    onClick: () => {
                        window.open(t.redemptionURL, "_blank"), d.default.track(C.HAw.RECURRING_PROMOTION_CLAIMED)
                    }
                })]
            })
        })
    },
    P = () => Object.entries(I).map(e => {
        let [t, n] = e;
        return (0, r.jsx)("div", {
            className: j.lA,
            children: (0, r.jsxs)("div", {
                className: j.LV,
                children: [(0, r.jsxs)("div", {
                    className: j.JN,
                    children: [(0, r.jsx)("div", {
                        className: j.MC,
                        children: (0, r.jsx)(l.XAi, {
                            size: "refresh_sm"
                        })
                    }), (0, r.jsxs)("div", {
                        className: j.yO,
                        children: [(0, r.jsx)(l.DZT, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: y.intl.string(n.title)
                        }), (0, r.jsx)(l.DZT, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: y.intl.string(n.body)
                        })]
                    })]
                }), (0, r.jsx)("div", {
                    className: j.R4,
                    children: (0, r.jsx)(a._V3, {
                        src: n.asset,
                        className: j.Ys,
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
        let n, c, {
                promotionRecurrences: d
            } = e,
            [p, m] = i.useState(d.length > 1),
            [f, b] = i.useState([]),
            [h, A] = i.useState(new Set);
        i.useEffect(() => {
            b([d.sort((e, t) => t.startDate > e.startDate ? 1 : -1)[0]])
        }, [d]);
        let E = (t = d[0].partnerId, n = (0, s.bG)([o.A], () => (0, l.Mwr)(o.A.theme)), null == (c = I[t]) ? null : n ? c.logos.dark : c.logos.light),
            x = (0, r.jsx)(a._V3, {
                src: d[0].asset,
                className: j.Ys,
                width: 100,
                height: 100,
                zoomable: !1
            });
        return (0, r.jsxs)("div", {
            children: [f.map((e, t) => {
                let n = h.has(e.id),
                    i = null == e.code;
                return (0, r.jsxs)("div", {
                    className: j.lA,
                    children: [(0, r.jsxs)("div", {
                        className: j.LV,
                        children: [(0, r.jsxs)("div", {
                            className: j.JN,
                            children: [E, (0, r.jsxs)("div", {
                                className: j.yO,
                                children: [(0, r.jsx)(l.DZT, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: y.intl.string(e.title)
                                }), (0, r.jsx)(l.DZT, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: n ? y.intl.format(y.t.i2EuFO, {
                                        helpdeskArticle: u.A.getArticleURL(C.MVz.RECURRING_PROMOTION)
                                    }) : i ? y.intl.string(e.body) : y.intl.format(e.bodyWithExpiration, {
                                        date: e.endDate
                                    })
                                })]
                            }), i && (n ? (0, r.jsx)(l.$nd, {
                                icon: l.EpV,
                                variant: "critical-secondary",
                                size: "sm",
                                disabled: !0,
                                text: y.intl.string(y.t["8LKchl"])
                            }) : (0, r.jsx)(l.$nd, {
                                icon: l.XAi,
                                variant: "overlay-primary",
                                size: "sm",
                                text: y.intl.string(y.t.vwASIl),
                                onClick: () => {
                                    (0, g.kd)({
                                        promotionId: e.id,
                                        analyticsLocations: []
                                    }).then(n => {
                                        var r, i;
                                        b([...f.slice(0, t), (r = S({}, e), i = i = {
                                            code: n.code
                                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r)
                                            }
                                            return n
                                        })(Object(i)).forEach(function(e) {
                                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                                        }), r), ...f.slice(t + 1)])
                                    }).catch(t => {
                                        A(t => new Set([...t, e.id])), _.A.captureException(t)
                                    })
                                }
                            }))]
                        }), (0, r.jsx)("div", {
                            className: j.R4,
                            children: x
                        })]
                    }), null != e.code && (0, r.jsx)(N, {
                        recurrence: e
                    })]
                }, e.id)
            }), p && (0, r.jsx)(l.DUT, {
                className: j.K8,
                onClick: () => {
                    m(!1), b([...f, ...d.slice(1)])
                },
                children: (0, r.jsx)(l.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: y.intl.string(y.t.rjjZxV)
                })
            })]
        })
    },
    D = e => {
        let {
            percentage: t
        } = e;
        return (0, r.jsxs)("div", {
            className: j.hr,
            children: [t > 0 && t < 100 && (0, r.jsx)(() => (0, r.jsx)("div", {
                className: j.ML,
                style: {
                    left: "calc(".concat(t, "% - ").concat(5, "px)")
                },
                children: (0, r.jsx)(x.z, {})
            }), {}), (0, r.jsx)("div", {
                className: j.SX,
                style: {
                    width: "".concat(t, "%")
                }
            })]
        })
    },
    w = e => {
        if (e.promotionType === A.pt.THIRD_PARTY_OUTBOUND_RECURRING) {
            var t, n;
            return null != (t = null == (n = e.partnerId) ? void 0 : n.toLowerCase()) ? t : null
        }
        return e.outboundTitle.toLowerCase()
    },
    L = e => {
        let t, n, i, {
                onClose: a
            } = e,
            {
                promotionsLoaded: o,
                claimedOutboundPromotionCodeMap: d
            } = (0, b.y7)(),
            _ = (0, s.yK)([h.A], () => h.A.outboundRecurringPromotions),
            A = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
            E = !1 === p.Ay.isPremiumExactly(A, O.PremiumTypes.TIER_2),
            x = null == A ? void 0 : A.isFractionalPremiumWithNoStandardSub(),
            T = null == A || E || x;
        if (!1 === o) return (0, r.jsx)(l.y$y, {});
        let v = (e => {
            let {
                promotions: t,
                codesByPromotion: n
            } = e, r = {};
            return t.filter(e => !0 === (0, g.HB)({
                promotionPartner: e.outboundTitle,
                promotionType: e.promotionType
            })).forEach(e => {
                var t;
                let i = w(e),
                    l = (e => {
                        var t;
                        let {
                            promotion: n
                        } = e, r = w(n);
                        return null == r ? null : null != (t = I[r]) ? t : null
                    })({
                        promotion: e
                    });
                if (null == i || null == l) return;
                i in r || (r[i] = []);
                let s = S({
                    id: e.id,
                    partnerId: i,
                    startDate: e.startDate,
                    endDate: e.endDate,
                    code: null != (t = n[e.id]) ? t : null
                }, l);
                r[i].push(s)
            }), r
        })({
            promotions: _,
            codesByPromotion: d
        });
        return (0, r.jsx)(l.Modal, {
            title: y.intl.string(y.t["7ioAjs"]),
            subtitle: y.intl.format(y.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(C.MVz.RECURRING_PROMOTION)
            }),
            actions: [],
            preview: (() => {
                if (!0 === T) return (0, r.jsx)(m.A, {
                    subscriptionTier: O.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        a()
                    },
                    onSubscribeModalClose: e => {
                        if (e) return f.Ay.fetchActivePromotions()
                    }
                })
            })(),
            transitionState: l.ip4.ENTERED,
            onClose: a,
            children: (n = new Date((t = new Date(new Date().toLocaleString("en-US", {
                timeZone: "America/New_York"
            }))).getFullYear(), t.getMonth() + 1, 0).getDate(), i = t.getDate() / n * 100, T ? (0, r.jsx)(P, {}) : (0, r.jsxs)("div", {
                className: j.kL,
                children: [(0, r.jsx)("div", {
                    className: j.Ps,
                    children: (0, r.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: y.intl.format(y.t["43kZKL"], {
                            days: n - t.getDate()
                        })
                    })
                }), (0, r.jsx)(D, {
                    percentage: i
                }), (0, r.jsx)("div", {
                    className: j.kR,
                    children: Object.entries(v).sort((e, t) => {
                        let [n] = e, [r] = t;
                        return r.localeCompare(n)
                    }).map(e => {
                        let [t, n] = e;
                        return (0, r.jsx)(R, {
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
        d.default.track(C.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t
        }), f.Ay.fetchActivePromotions(), (0, a.mMO)(async () => {
            let {
                Recurring3PModal: e
            } = await Promise.resolve().then(n.bind(n, 161319));
            return t => (0, r.jsx)(e, S({}, t))
        })
    }