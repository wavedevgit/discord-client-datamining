/** chunk id: 536195 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(827734),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(927578),
    m = n(580630),
    _ = n(422936),
    g = n(234419),
    A = n(511484),
    x = n(356309),
    p = n(121304),
    h = n(788868),
    f = n(985018),
    T = n(870143),
    E = n(115292),
    S = n(799919);
let b = e => {
        let {
            includes: t
        } = e;
        return t ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.BNr, {
                size: "sm",
                color: r.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, i.jsx)(o.AC4, {
                children: f.intl.string(f.t["tq+6t/"])
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.aoi, {
                size: "xs",
                color: r.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, i.jsx)(o.AC4, {
                children: f.intl.string(f.t.l4qZrp)
            })]
        })
    },
    C = e => {
        let {
            label: t,
            tier0ColumnData: n,
            tier2ColumnData: s
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(T.nM, T.WQ),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: T.nx,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: t
                })
            }), (0, i.jsx)("td", {
                className: T.Hn,
                children: null != n.text ? (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: n.text
                }) : (0, i.jsx)(b, {
                    includes: !!n.includes
                })
            }), (0, i.jsx)("td", {
                className: T.Hn,
                children: null != s.text ? (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: s.text
                }) : (0, i.jsx)(b, {
                    includes: !!s.includes
                })
            })]
        })
    },
    N = e => {
        let {
            title: t,
            rows: n
        } = e;
        return (0, i.jsxs)("tbody", {
            children: [(0, i.jsx)("tr", {
                className: a()(T.nM, T.Gf),
                children: (0, i.jsx)("td", {
                    className: T.nx,
                    colSpan: 3,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        children: t
                    })
                })
            }), n.map(e => (0, i.jsx)(C, {
                ...e
            }, e.id))]
        })
    },
    v = e => {
        let {
            premiumType: t,
            priceString: n
        } = e, s = t === h.PremiumTypes.TIER_0 ? f.intl.string(f.t.tUbSDK) : f.intl.string(f.t.Ipxkog);
        return (0, i.jsxs)("div", {
            className: T.nn,
            children: [(0, i.jsxs)("div", {
                className: T.KS,
                children: [(0, i.jsx)(o.tvc, {
                    colorClass: T.oG
                }), (0, i.jsx)(o.Heading, {
                    variant: "heading-sm/semibold",
                    children: s
                })]
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                children: n
            })]
        })
    },
    I = e => {
        let {
            tier0Price: t,
            tier2Price: n,
            shouldUseDiscountPrice: s,
            tier2DiscountedPriceString: l
        } = e, a = s ? l : (0, m.$g)(n.amount, n.currency);
        return (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: T.U1,
                children: [(0, i.jsx)("th", {
                    scope: "col",
                    className: T.Cr,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-xl/bold",
                        children: f.intl.string(f.t.ED4UVD)
                    })
                }), (0, i.jsx)("th", {
                    scope: "col",
                    className: T.Hn,
                    children: (0, i.jsx)(v, {
                        premiumType: h.PremiumTypes.TIER_0,
                        priceString: (0, m.$g)(t.amount, t.currency)
                    })
                }), (0, i.jsx)("th", {
                    scope: "col",
                    className: T.Hn,
                    children: (0, i.jsx)(v, {
                        premiumType: h.PremiumTypes.TIER_2,
                        priceString: a
                    })
                })]
            })
        })
    },
    j = e => {
        let t, {
                className: n,
                hidePill: l = !1,
                selectedPlanTier: r = h.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: m
            } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            b = (0, g.V)(),
            C = b?.subscription_trial?.sku_id,
            v = (0, _.O)(),
            j = null != v && (0, A.U9)(v, h.pe.TIER_2),
            y = (0, A.N1)(h.gD.PREMIUM_MONTH_TIER_2),
            O = `${y}/${(0,u.FJ)(h.WT.MONTH)}`,
            R = (0, u.JM)(h.gD.PREMIUM_MONTH_TIER_0),
            L = (0, u.JM)(h.gD.PREMIUM_MONTH_TIER_2),
            P = (0, p.g)();
        if (l) t = null;
        else {
            let e = null != b ? f.intl.string(f.t.IBYG5U) : f.intl.string(f.t.TR2B4T);
            t = (0, i.jsx)(x.D, {
                className: a()(T.Io, T.SP),
                text: e
            })
        }
        let D = C === h.pe.TIER_0 || r === h.PremiumTypes.TIER_0;
        return (0, i.jsx)(c.f5, {
            value: m,
            children: (0, i.jsxs)("div", {
                className: a()(T.zr, n),
                children: [(0, i.jsx)(o.Heading, {
                    className: T.Qw,
                    variant: "display-md",
                    color: "text-strong",
                    children: f.intl.string(f.t.DbPgAd)
                }), (0, i.jsxs)("div", {
                    className: T.wY,
                    children: [(0, i.jsxs)("div", {
                        className: a()(T.fO, {
                            [T.Vd]: D,
                            [T.hA]: !D
                        }),
                        children: [!D && t, (0, i.jsx)("div", {
                            className: T.xQ
                        }), (0, i.jsxs)("div", {
                            className: T.wN,
                            children: [(0, i.jsx)("img", {
                                src: S,
                                alt: "",
                                className: T.kQ
                            }), (0, i.jsx)("img", {
                                src: E,
                                alt: "",
                                className: T.kQ
                            })]
                        })]
                    }), (0, i.jsxs)("table", {
                        className: T.tp,
                        children: [(0, i.jsx)(I, {
                            tier0Price: R,
                            tier2Price: L,
                            shouldUseDiscountPrice: j,
                            tier2DiscountedPriceString: O
                        }), P.map(e => (0, s.createElement)(N, {
                            ...e,
                            key: e.id
                        }))]
                    })]
                })]
            })
        })
    }