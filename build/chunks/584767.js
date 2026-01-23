/** Chunk was on web.js **/
/** chunk id: 584767, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => V
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(793574),
    f = n(688810),
    p = n(160946),
    _ = n(166403),
    h = n(927578),
    m = n(422936),
    g = n(234419),
    E = n(511484),
    y = n(121304),
    b = n(788868),
    O = n(985018),
    v = n(976543),
    A = n(196093),
    I = n(979653),
    S = n(255631),
    T = n(193023);

function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            C(e, t, n[t])
        })
    }
    return e
}

function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function R(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let P = () => (0, r.jsx)("div", {
        className: v.Zr,
        children: (0, r.jsx)(c.Heading, {
            className: v.uC,
            variant: "text-xs/bold",
            children: O.intl.string(O.t.TR2B4T)
        })
    }),
    D = () => (0, r.jsx)("div", {
        className: v.Zr,
        children: (0, r.jsx)(c.Heading, {
            className: v.uC,
            variant: "heading-deprecated-12/extrabold",
            children: O.intl.string(O.t.IBYG5U)
        })
    }),
    x = e => {
        let {
            text: t,
            badge: n,
            variant: i
        } = e;
        return (0, r.jsxs)(c.Text, {
            color: "none",
            variant: null != i ? i : "text-md/medium",
            className: v.wb,
            children: [t, null != n && (0, r.jsxs)(r.Fragment, {
                children: [" ", n]
            })]
        })
    },
    L = e => {
        let {
            isIncluded: t,
            isTier0: n
        } = e;
        return t ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.A9s, {
                size: "md",
                color: "currentColor",
                className: n ? v.M0 : v.PE,
                "aria-hidden": !0
            }), (0, r.jsx)(c.AC4, {
                children: O.intl.string(O.t["tq+6t/"])
            })]
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.PGe, {
                size: "md",
                color: "currentColor",
                className: v.ut,
                "aria-hidden": !0
            }), (0, r.jsx)(c.AC4, {
                children: O.intl.string(O.t.l4qZrp)
            })]
        })
    },
    j = e => {
        let {
            label: t,
            tier0ColumnData: n,
            tier2ColumnData: i,
            withBottomMargin: a
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(v.nM, v.YI, {
                [v.ML]: a
            }),
            children: [(0, r.jsx)("th", {
                scope: "row",
                className: v.nx,
                children: (0, r.jsx)(x, {
                    text: t
                })
            }), (0, r.jsx)("td", {
                className: v.Hn,
                children: null != n.text ? (0, r.jsx)(x, {
                    text: n.text
                }) : (0, r.jsx)(L, {
                    isIncluded: !!n.includes,
                    isTier0: !0
                })
            }), (0, r.jsx)("td", {
                className: v.Hn,
                children: null != i.text ? (0, r.jsx)(x, {
                    text: i.text
                }) : (0, r.jsx)(L, {
                    isIncluded: !!i.includes
                })
            })]
        })
    },
    M = e => {
        let {
            title: t,
            rows: n
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("tr", {
                className: v.nM,
                children: [(0, r.jsx)("th", {
                    scope: "row",
                    className: v.nx,
                    children: (0, r.jsx)(x, {
                        text: t,
                        variant: "text-lg/bold"
                    })
                }), (0, r.jsx)("td", {}), (0, r.jsx)("td", {})]
            }), n.map((e, t) => (0, r.jsx)(j, R(N({}, e), {
                withBottomMargin: t === n.length - 1
            }), e.id))]
        })
    },
    k = e => {
        let t, {
                premiumType: n
            } = e,
            i = (0, u.Ay)();
        t = n === b.PremiumTypes.TIER_0 ? (0, l.Mw)(i) ? A : I : (0, l.Mw)(i) ? S : T;
        let a = (0, h.Dd)(n);
        return (0, r.jsx)("img", {
            src: t,
            className: v.wm,
            alt: a
        })
    },
    U = () => (0, r.jsx)("thead", {
        children: (0, r.jsxs)("tr", {
            className: s()(v.U1, v.Y9),
            children: [(0, r.jsx)("th", {
                scope: "col",
                className: v.Cr,
                children: (0, r.jsx)(c.Heading, {
                    className: v.__invalid_textColor,
                    variant: "heading-xl/semibold",
                    children: O.intl.string(O.t.XXENra)
                })
            }), (0, r.jsx)("th", {
                scope: "col",
                className: v.e4,
                children: (0, r.jsx)(k, {
                    premiumType: b.PremiumTypes.TIER_0
                })
            }), (0, r.jsx)("th", {
                scope: "col",
                className: s()(v.e4, v.Y9),
                children: (0, r.jsx)(k, {
                    premiumType: b.PremiumTypes.TIER_2
                })
            })]
        })
    }),
    G = e => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: i,
            tier2DiscountedPriceString: a
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(v.nM, v.YI, v.ML),
            children: [(0, r.jsx)("th", {
                scope: "row",
                className: v.nx,
                children: (0, r.jsx)(x, {
                    text: O.intl.string(O.t["09yRK3"]),
                    variant: "text-lg/bold"
                })
            }), (0, r.jsx)("td", {
                className: v.Hn,
                children: (0, r.jsx)(x, {
                    text: h.Ay.formatPriceString(t, b.WT.MONTH)
                })
            }), (0, r.jsx)("td", {
                className: v.Hn,
                children: (0, r.jsx)(x, {
                    text: i ? a : h.Ay.formatPriceString(n, b.WT.MONTH)
                })
            })]
        })
    },
    V = e => {
        var t;
        let n, {
                className: a,
                hidePill: l = !1,
                selectedPlanColumnClassName: c,
                selectedPlanTier: u = b.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: O
            } = (0, f.Ay)(d.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            A = (0, o.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
            I = (0, p.Y)(b.T7),
            S = (0, g.V)(),
            T = null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id,
            C = (0, m.O)(),
            w = null != C && (0, E.U9)(C, b.pe.TIER_2),
            x = (0, E.N1)(b.gD.PREMIUM_MONTH_TIER_2),
            L = "".concat(x, "/").concat((0, h.FJ)(b.WT.MONTH)),
            j = (0, h.JM)(b.gD.PREMIUM_MONTH_TIER_0),
            k = (0, h.JM)(b.gD.PREMIUM_MONTH_TIER_2),
            V = (0, y.g)();
        if (!A || !I) return null;
        n = l ? null : null != S ? (0, r.jsx)(D, {}) : (0, r.jsx)(P, {});
        let F = T === b.pe.TIER_0 || u === b.PremiumTypes.TIER_0;
        return (0, r.jsx)(f.f5, {
            value: O,
            children: (0, r.jsx)("div", {
                className: s()(v.zr, a),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, r.jsxs)("div", {
                    className: v.wY,
                    children: [(0, r.jsxs)("div", {
                        className: s()(c, {
                            [v.sO]: F,
                            [v.Yr]: !F
                        }),
                        children: [!F && n, (0, r.jsx)("div", {
                            className: s()({
                                [v.A9]: F,
                                [v.ce]: !F
                            })
                        })]
                    }), (0, r.jsxs)("table", {
                        className: v.tp,
                        children: [(0, r.jsx)(U, {}), (0, r.jsxs)("tbody", {
                            children: [(0, r.jsx)(G, {
                                tier0MonthlyPrice: j,
                                tier2MonthlyPrice: k,
                                shouldUseDiscountPrice: w,
                                tier2DiscountedPriceString: L
                            }), V.map(e => (0, i.createElement)(M, R(N({}, e), {
                                key: e.id
                            })))]
                        })]
                    })]
                })
            })
        })
    }