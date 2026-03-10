/** chunk id: 843685 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(582754),
    d = n(397927),
    c = n(736653),
    u = n(793574),
    _ = n(688810),
    g = n(160946),
    m = n(166403),
    A = n(927578),
    h = n(422936),
    p = n(234419),
    x = n(511484),
    E = n(121304),
    T = n(788868),
    S = n(985018),
    C = n(821413),
    f = n(196093),
    I = n(979653),
    b = n(255631),
    N = n(193023);
let v = () => (0, i.jsx)("div", {
        className: C.Zr,
        children: (0, i.jsx)(d.Heading, {
            className: C.uC,
            variant: "text-xs/bold",
            children: S.intl.string(S.t.TR2B4T)
        })
    }),
    j = () => (0, i.jsx)("div", {
        className: C.Zr,
        children: (0, i.jsx)(d.Heading, {
            className: C.uC,
            variant: "heading-deprecated-12/extrabold",
            children: S.intl.string(S.t.IBYG5U)
        })
    }),
    O = e => {
        let {
            text: t,
            badge: n,
            variant: s
        } = e;
        return (0, i.jsxs)(d.Text, {
            color: "none",
            variant: s ?? "text-md/medium",
            className: C.wb,
            children: [t, null != n && (0, i.jsxs)(i.Fragment, {
                children: [" ", n]
            })]
        })
    },
    R = e => {
        let {
            isIncluded: t,
            isTier0: n
        } = e;
        return t ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.A9s, {
                size: "md",
                color: "currentColor",
                className: n ? C.M0 : C.PE,
                "aria-hidden": !0
            }), (0, i.jsx)(d.AC4, {
                children: S.intl.string(S.t["tq+6t/"])
            })]
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.PGe, {
                size: "md",
                color: "currentColor",
                className: C.ut,
                "aria-hidden": !0
            }), (0, i.jsx)(d.AC4, {
                children: S.intl.string(S.t.l4qZrp)
            })]
        })
    },
    y = e => {
        let {
            label: t,
            tier0ColumnData: n,
            tier2ColumnData: s,
            withBottomMargin: l
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(C.nM, C.YI, {
                [C.ML]: l
            }),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: C.nx,
                children: (0, i.jsx)(O, {
                    text: t
                })
            }), (0, i.jsx)("td", {
                className: C.Hn,
                children: null != n.text ? (0, i.jsx)(O, {
                    text: n.text
                }) : (0, i.jsx)(R, {
                    isIncluded: !!n.includes,
                    isTier0: !0
                })
            }), (0, i.jsx)("td", {
                className: C.Hn,
                children: null != s.text ? (0, i.jsx)(O, {
                    text: s.text
                }) : (0, i.jsx)(R, {
                    isIncluded: !!s.includes
                })
            })]
        })
    },
    P = e => {
        let {
            title: t,
            rows: n
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("tr", {
                className: C.nM,
                children: [(0, i.jsx)("th", {
                    scope: "row",
                    className: C.nx,
                    children: (0, i.jsx)(O, {
                        text: t,
                        variant: "text-lg/bold"
                    })
                }), (0, i.jsx)("td", {}), (0, i.jsx)("td", {})]
            }), n.map((e, t) => (0, i.jsx)(y, {
                ...e,
                withBottomMargin: t === n.length - 1
            }, e.id))]
        })
    },
    L = e => {
        let t, {
                premiumType: n
            } = e,
            s = (0, c.Ay)();
        t = n === T.PremiumTypes.TIER_0 ? (0, o.Mw)(s) ? f : I : (0, o.Mw)(s) ? b : N;
        let l = (0, A.Dd)(n);
        return (0, i.jsx)("img", {
            src: t,
            className: C.wm,
            alt: l
        })
    },
    D = () => (0, i.jsx)("thead", {
        children: (0, i.jsxs)("tr", {
            className: a()(C.U1, C.Y9),
            children: [(0, i.jsx)("th", {
                scope: "col",
                className: C.Cr,
                children: (0, i.jsx)(d.Heading, {
                    className: C.__invalid_textColor,
                    variant: "heading-xl/semibold",
                    children: S.intl.string(S.t.XXENra)
                })
            }), (0, i.jsx)("th", {
                scope: "col",
                className: C.e4,
                children: (0, i.jsx)(L, {
                    premiumType: T.PremiumTypes.TIER_0
                })
            }), (0, i.jsx)("th", {
                scope: "col",
                className: a()(C.e4, C.Y9),
                children: (0, i.jsx)(L, {
                    premiumType: T.PremiumTypes.TIER_2
                })
            })]
        })
    }),
    G = e => {
        let {
            tier0MonthlyPrice: t,
            tier2MonthlyPrice: n,
            shouldUseDiscountPrice: s,
            tier2DiscountedPriceString: l
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(C.nM, C.YI, C.ML),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: C.nx,
                children: (0, i.jsx)(O, {
                    text: S.intl.string(S.t["09yRK3"]),
                    variant: "text-lg/bold"
                })
            }), (0, i.jsx)("td", {
                className: C.Hn,
                children: (0, i.jsx)(O, {
                    text: A.Ay.formatPriceString(t, T.WT.MONTH)
                })
            }), (0, i.jsx)("td", {
                className: C.Hn,
                children: (0, i.jsx)(O, {
                    text: s ? l : A.Ay.formatPriceString(n, T.WT.MONTH)
                })
            })]
        })
    },
    M = e => {
        let t, {
                className: n,
                hidePill: l = !1,
                selectedPlanColumnClassName: o,
                selectedPlanTier: d = T.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: c
            } = (0, _.Ay)(u.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            S = (0, r.bG)([m.A], () => m.A.hasFetchedSubscriptions()),
            f = (0, g.Y)(T.T7),
            I = (0, p.V)(),
            b = I?.subscription_trial?.sku_id,
            N = (0, h.O)(),
            O = null != N && (0, x.U9)(N, T.pe.TIER_2),
            R = (0, x.N1)(T.gD.PREMIUM_MONTH_TIER_2),
            y = `${R}/${(0,A.FJ)(T.WT.MONTH)}`,
            L = (0, A.JM)(T.gD.PREMIUM_MONTH_TIER_0),
            M = (0, A.JM)(T.gD.PREMIUM_MONTH_TIER_2),
            U = (0, E.g)();
        if (!S || !f) return null;
        t = l ? null : null != I ? (0, i.jsx)(j, {}) : (0, i.jsx)(v, {});
        let k = b === T.pe.TIER_0 || d === T.PremiumTypes.TIER_0;
        return (0, i.jsx)(_.f5, {
            value: c,
            children: (0, i.jsx)("div", {
                className: a()(C.zr, n),
                "data-testid": "application-home-marketing-page-comparison-table",
                children: (0, i.jsxs)("div", {
                    className: C.wY,
                    children: [(0, i.jsxs)("div", {
                        className: a()(o, {
                            [C.sO]: k,
                            [C.Yr]: !k
                        }),
                        children: [!k && t, (0, i.jsx)("div", {
                            className: a()({
                                [C.A9]: k,
                                [C.ce]: !k
                            })
                        })]
                    }), (0, i.jsxs)("table", {
                        className: C.tp,
                        children: [(0, i.jsx)(D, {}), (0, i.jsxs)("tbody", {
                            children: [(0, i.jsx)(G, {
                                tier0MonthlyPrice: L,
                                tier2MonthlyPrice: M,
                                shouldUseDiscountPrice: O,
                                tier2DiscountedPriceString: y
                            }), U.map(e => (0, s.createElement)(P, {
                                ...e,
                                key: e.id
                            }))]
                        })]
                    })]
                })
            })
        })
    }