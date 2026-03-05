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
    _ = n(580630),
    g = n(422936),
    m = n(234419),
    A = n(511484),
    h = n(356309),
    p = n(121304),
    x = n(788868),
    E = n(985018),
    T = n(232765),
    S = n(115292),
    C = n(799919);
let f = e => {
        let {
            includes: t
        } = e;
        return t ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.BNr, {
                size: "sm",
                color: r.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, i.jsx)(o.AC4, {
                children: E.intl.string(E.t["tq+6t/"])
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.aoi, {
                size: "xs",
                color: r.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, i.jsx)(o.AC4, {
                children: E.intl.string(E.t.l4qZrp)
            })]
        })
    },
    I = e => {
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
                }) : (0, i.jsx)(f, {
                    includes: !!n.includes
                })
            }), (0, i.jsx)("td", {
                className: T.Hn,
                children: null != s.text ? (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: s.text
                }) : (0, i.jsx)(f, {
                    includes: !!s.includes
                })
            })]
        })
    },
    b = e => {
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
            }), n.map(e => (0, i.jsx)(I, {
                ...e
            }, e.id))]
        })
    },
    N = e => {
        let {
            premiumType: t,
            priceString: n
        } = e, s = t === x.PremiumTypes.TIER_0 ? E.intl.string(E.t.tUbSDK) : E.intl.string(E.t.Ipxkog);
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
    v = e => {
        let {
            tier0Price: t,
            tier2Price: n,
            shouldUseDiscountPrice: s,
            tier2DiscountedPriceString: l
        } = e, a = s ? l : (0, _.$g)(n.amount, n.currency);
        return (0, i.jsx)("thead", {
            children: (0, i.jsxs)("tr", {
                className: T.U1,
                children: [(0, i.jsx)("th", {
                    scope: "col",
                    className: T.Cr,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-xl/bold",
                        children: E.intl.string(E.t.ED4UVD)
                    })
                }), (0, i.jsx)("th", {
                    scope: "col",
                    className: T.Hn,
                    children: (0, i.jsx)(N, {
                        premiumType: x.PremiumTypes.TIER_0,
                        priceString: (0, _.$g)(t.amount, t.currency)
                    })
                }), (0, i.jsx)("th", {
                    scope: "col",
                    className: T.Hn,
                    children: (0, i.jsx)(N, {
                        premiumType: x.PremiumTypes.TIER_2,
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
                selectedPlanTier: r = x.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: _
            } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            f = (0, m.V)(),
            I = f?.subscription_trial?.sku_id,
            N = (0, g.O)(),
            j = null != N && (0, A.U9)(N, x.pe.TIER_2),
            O = (0, A.N1)(x.gD.PREMIUM_MONTH_TIER_2),
            R = `${O}/${(0,u.FJ)(x.WT.MONTH)}`,
            y = (0, u.JM)(x.gD.PREMIUM_MONTH_TIER_0),
            P = (0, u.JM)(x.gD.PREMIUM_MONTH_TIER_2),
            L = (0, p.g)();
        if (l) t = null;
        else {
            let e = null != f ? E.intl.string(E.t.IBYG5U) : E.intl.string(E.t.TR2B4T);
            t = (0, i.jsx)(h.D, {
                className: a()(T.Io, T.SP),
                text: e
            })
        }
        let D = I === x.pe.TIER_0 || r === x.PremiumTypes.TIER_0;
        return (0, i.jsx)(c.f5, {
            value: _,
            children: (0, i.jsxs)("div", {
                className: a()(T.zr, n),
                children: [(0, i.jsx)(o.Heading, {
                    className: T.Qw,
                    variant: "display-md",
                    color: "text-strong",
                    children: E.intl.string(E.t.DbPgAd)
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
                                src: C,
                                alt: "",
                                className: T.kQ
                            }), (0, i.jsx)("img", {
                                src: S,
                                alt: "",
                                className: T.kQ
                            })]
                        })]
                    }), (0, i.jsxs)("table", {
                        className: T.tp,
                        children: [(0, i.jsx)(v, {
                            tier0Price: y,
                            tier2Price: P,
                            shouldUseDiscountPrice: j,
                            tier2DiscountedPriceString: R
                        }), L.map(e => (0, s.createElement)(b, {
                            ...e,
                            key: e.id
                        }))]
                    })]
                })]
            })
        })
    }