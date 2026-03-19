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
    m = n(422936),
    g = n(234419),
    A = n(511484),
    x = n(356309),
    h = n(121304),
    p = n(788868),
    T = n(985018),
    E = n(232765),
    S = n(115292),
    f = n(799919);
let C = e => {
        let {
            includes: t
        } = e;
        return t ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.BNr, {
                size: "sm",
                color: r.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, i.jsx)(o.AC4, {
                children: T.intl.string(T.t["tq+6t/"])
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.aoi, {
                size: "xs",
                color: r.A.colors.TEXT_STRONG,
                "aria-hidden": !0
            }), (0, i.jsx)(o.AC4, {
                children: T.intl.string(T.t.l4qZrp)
            })]
        })
    },
    b = e => {
        let {
            label: t,
            tier0ColumnData: n,
            tier2ColumnData: s
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(E.nM, E.WQ),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: E.nx,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: t
                })
            }), (0, i.jsx)("td", {
                className: E.Hn,
                children: null != n.text ? (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: n.text
                }) : (0, i.jsx)(C, {
                    includes: !!n.includes
                })
            }), (0, i.jsx)("td", {
                className: E.Hn,
                children: null != s.text ? (0, i.jsx)(o.Text, {
                    variant: "text-md/medium",
                    children: s.text
                }) : (0, i.jsx)(C, {
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
                className: a()(E.nM, E.Gf),
                children: (0, i.jsx)("td", {
                    className: E.nx,
                    colSpan: 3,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-lg/bold",
                        children: t
                    })
                })
            }), n.map(e => (0, i.jsx)(b, {
                ...e
            }, e.id))]
        })
    },
    I = e => {
        let {
            premiumType: t,
            priceString: n
        } = e, s = t === p.PremiumTypes.TIER_0 ? T.intl.string(T.t.tUbSDK) : T.intl.string(T.t.Ipxkog);
        return (0, i.jsxs)("div", {
            className: E.nn,
            children: [(0, i.jsxs)("div", {
                className: E.KS,
                children: [(0, i.jsx)(o.tvc, {
                    colorClass: E.oG
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
                className: E.U1,
                children: [(0, i.jsx)("th", {
                    scope: "col",
                    className: E.Cr,
                    children: (0, i.jsx)(o.Heading, {
                        variant: "heading-xl/bold",
                        children: T.intl.string(T.t.ED4UVD)
                    })
                }), (0, i.jsx)("th", {
                    scope: "col",
                    className: E.Hn,
                    children: (0, i.jsx)(I, {
                        premiumType: p.PremiumTypes.TIER_0,
                        priceString: (0, _.$g)(t.amount, t.currency)
                    })
                }), (0, i.jsx)("th", {
                    scope: "col",
                    className: E.Hn,
                    children: (0, i.jsx)(I, {
                        premiumType: p.PremiumTypes.TIER_2,
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
                selectedPlanTier: r = p.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: _
            } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            C = (0, g.V)(),
            b = C?.subscription_trial?.sku_id,
            I = (0, m.O)(),
            j = null != I && (0, A.U9)(I, p.pe.TIER_2),
            y = (0, A.N1)(p.gD.PREMIUM_MONTH_TIER_2),
            R = `${y}/${(0,u.FJ)(p.WT.MONTH)}`,
            O = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_0),
            L = (0, u.JM)(p.gD.PREMIUM_MONTH_TIER_2),
            D = (0, h.g)();
        if (l) t = null;
        else {
            let e = null != C ? T.intl.string(T.t.IBYG5U) : T.intl.string(T.t.TR2B4T);
            t = (0, i.jsx)(x.D, {
                className: a()(E.Io, E.SP),
                text: e
            })
        }
        let P = b === p.pe.TIER_0 || r === p.PremiumTypes.TIER_0;
        return (0, i.jsx)(c.f5, {
            value: _,
            children: (0, i.jsxs)("div", {
                className: a()(E.zr, n),
                children: [(0, i.jsx)(o.Heading, {
                    className: E.Qw,
                    variant: "display-md",
                    color: "text-strong",
                    children: T.intl.string(T.t.DbPgAd)
                }), (0, i.jsxs)("div", {
                    className: E.wY,
                    children: [(0, i.jsxs)("div", {
                        className: a()(E.fO, {
                            [E.Vd]: P,
                            [E.hA]: !P
                        }),
                        children: [!P && t, (0, i.jsx)("div", {
                            className: E.xQ
                        }), (0, i.jsxs)("div", {
                            className: E.wN,
                            children: [(0, i.jsx)("img", {
                                src: f,
                                alt: "",
                                className: E.kQ
                            }), (0, i.jsx)("img", {
                                src: S,
                                alt: "",
                                className: E.kQ
                            })]
                        })]
                    }), (0, i.jsxs)("table", {
                        className: E.tp,
                        children: [(0, i.jsx)(v, {
                            tier0Price: O,
                            tier2Price: L,
                            shouldUseDiscountPrice: j,
                            tier2DiscountedPriceString: R
                        }), D.map(e => (0, s.createElement)(N, {
                            ...e,
                            key: e.id
                        }))]
                    })]
                })]
            })
        })
    }