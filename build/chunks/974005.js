/** Chunk was on web.js **/
/** chunk id: 974005, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(927578),
    f = n(580630),
    p = n(422936),
    _ = n(234419),
    h = n(511484),
    m = n(356309),
    g = n(121304),
    E = n(788868),
    y = n(985018),
    b = n(11297),
    O = n(115292),
    v = n(799919);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let C = e => {
        let {
            includes: t
        } = e;
        return t ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.BNr, {
                size: "sm",
                color: o.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, r.jsx)(l.AC4, {
                children: y.intl.string(y.t["tq+6t/"])
            })]
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.aoi, {
                size: "xs",
                color: o.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, r.jsx)(l.AC4, {
                children: y.intl.string(y.t.l4qZrp)
            })]
        })
    },
    N = e => {
        let {
            label: t,
            tier0ColumnData: n,
            tier2ColumnData: i
        } = e;
        return (0, r.jsxs)("tr", {
            className: s()(b.nM, b.WQ),
            children: [(0, r.jsx)("th", {
                scope: "row",
                className: b.nx,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    children: t
                })
            }), (0, r.jsx)("td", {
                className: b.Hn,
                children: null != n.text ? (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    children: n.text
                }) : (0, r.jsx)(C, {
                    includes: !!n.includes
                })
            }), (0, r.jsx)("td", {
                className: b.Hn,
                children: null != i.text ? (0, r.jsx)(l.Text, {
                    variant: "text-md/medium",
                    children: i.text
                }) : (0, r.jsx)(C, {
                    includes: !!i.includes
                })
            })]
        })
    },
    w = e => {
        let {
            title: t,
            rows: n
        } = e;
        return (0, r.jsxs)("tbody", {
            children: [(0, r.jsx)("tr", {
                className: s()(b.nM, b.Gf),
                children: (0, r.jsx)("td", {
                    className: b.nx,
                    colSpan: 3,
                    children: (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/bold",
                        children: t
                    })
                })
            }), n.map(e => (0, r.jsx)(N, I({}, e), e.id))]
        })
    },
    R = e => {
        let {
            premiumType: t,
            priceString: n
        } = e, i = t === E.PremiumTypes.TIER_0 ? y.intl.string(y.t.tUbSDK) : y.intl.string(y.t.Ipxkog);
        return (0, r.jsxs)("div", {
            className: b.nn,
            children: [(0, r.jsxs)("div", {
                className: b.KS,
                children: [(0, r.jsx)(l.tvc, {
                    colorClass: b.oG
                }), (0, r.jsx)(l.Heading, {
                    variant: "heading-sm/semibold",
                    children: i
                })]
            }), (0, r.jsx)(l.Heading, {
                variant: "heading-sm/semibold",
                children: n
            })]
        })
    },
    P = e => {
        let {
            tier0Price: t,
            tier2Price: n,
            shouldUseDiscountPrice: i,
            tier2DiscountedPriceString: a
        } = e, s = i ? a : (0, f.$g)(n.amount, n.currency);
        return (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: b.U1,
                children: [(0, r.jsx)("th", {
                    scope: "col",
                    className: b.Cr,
                    children: (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/bold",
                        children: y.intl.string(y.t.ED4UVD)
                    })
                }), (0, r.jsx)("th", {
                    scope: "col",
                    className: b.Hn,
                    children: (0, r.jsx)(R, {
                        premiumType: E.PremiumTypes.TIER_0,
                        priceString: (0, f.$g)(t.amount, t.currency)
                    })
                }), (0, r.jsx)("th", {
                    scope: "col",
                    className: b.Hn,
                    children: (0, r.jsx)(R, {
                        premiumType: E.PremiumTypes.TIER_2,
                        priceString: s
                    })
                })]
            })
        })
    },
    D = e => {
        var t;
        let n, {
                className: a,
                hidePill: o = !1,
                selectedPlanTier: f = E.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: A
            } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, _.V)(),
            C = null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id,
            N = (0, p.O)(),
            R = null != N && (0, h.U9)(N, E.pe.TIER_2),
            D = (0, h.N1)(E.gD.PREMIUM_MONTH_TIER_2),
            x = "".concat(D, "/").concat((0, d.FJ)(E.WT.MONTH)),
            L = (0, d.JM)(E.gD.PREMIUM_MONTH_TIER_0),
            j = (0, d.JM)(E.gD.PREMIUM_MONTH_TIER_2),
            M = (0, g.g)();
        if (o) n = null;
        else {
            let e = null != S ? y.intl.string(y.t.IBYG5U) : y.intl.string(y.t.TR2B4T);
            n = (0, r.jsx)(m.D, {
                className: s()(b.Io, b.SP),
                text: e
            })
        }
        let k = C === E.pe.TIER_0 || f === E.PremiumTypes.TIER_0;
        return (0, r.jsx)(u.f5, {
            value: A,
            children: (0, r.jsxs)("div", {
                className: s()(b.zr, a),
                children: [(0, r.jsx)(l.Heading, {
                    className: b.Qw,
                    variant: "display-md",
                    color: "text-strong",
                    children: y.intl.string(y.t.DbPgAd)
                }), (0, r.jsxs)("div", {
                    className: b.wY,
                    children: [(0, r.jsxs)("div", {
                        className: s()(b.fO, {
                            [b.Vd]: k,
                            [b.hA]: !k
                        }),
                        children: [!k && n, (0, r.jsx)("div", {
                            className: b.xQ
                        }), (0, r.jsxs)("div", {
                            className: b.wN,
                            children: [(0, r.jsx)("img", {
                                src: v,
                                alt: "",
                                className: b.kQ
                            }), (0, r.jsx)("img", {
                                src: O,
                                alt: "",
                                className: b.kQ
                            })]
                        })]
                    }), (0, r.jsxs)("table", {
                        className: b.tp,
                        children: [(0, r.jsx)(P, {
                            tier0Price: L,
                            tier2Price: j,
                            shouldUseDiscountPrice: R,
                            tier2DiscountedPriceString: x
                        }), M.map(e => (0, i.createElement)(w, T(I({}, e), {
                            key: e.id
                        })))]
                    })]
                })]
            })
        })
    }