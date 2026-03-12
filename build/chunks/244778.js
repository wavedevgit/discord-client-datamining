/** chunk id: 244778 params = (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(582754),
    d = n(421380),
    c = n(397927),
    u = n(736653),
    _ = n(793574),
    g = n(688810),
    m = n(531260),
    A = n(160946),
    h = n(287809),
    p = n(166403),
    x = n(927578),
    E = n(40185),
    T = n(89366),
    S = n(422936),
    C = n(234419),
    f = n(863156),
    N = n(194509),
    b = n(396375),
    I = n(511484),
    v = n(231265),
    j = n(795269),
    O = n(38720),
    R = n(788868),
    y = n(985018),
    P = n(472626),
    D = n(196093),
    L = n(979653),
    G = n(255631),
    M = n(193023);
let U = () => {
        let e = (0, v._)();
        return (0, i.jsx)(j.ir, {
            text: e,
            className: P.QR,
            colorOptions: j.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        })
    },
    k = () => (0, i.jsx)("div", {
        className: P.Wm,
        children: (0, i.jsx)(c.Heading, {
            className: P.uC,
            variant: "heading-deprecated-12/extrabold",
            children: y.intl.string(y.t["o/oRJB"])
        })
    }),
    V = e => {
        let t, {
                premiumType: n,
                isPremiumGroup: s
            } = e,
            l = (0, u.Ay)();
        if (s)
            if (n === R.PremiumTypes.TIER_0) return (0, i.jsx)(c.Heading, {
                variant: "display-md",
                className: P.dW,
                children: y.intl.string(y.t.tUbSDK)
            });
            else return (0, i.jsx)(c.Heading, {
                variant: "display-md",
                className: P.dW,
                children: y.intl.string(y.t.Ipxkog)
            });
        t = n === R.PremiumTypes.TIER_0 ? (0, o.Mw)(l) ? D : L : (0, o.Mw)(l) ? G : M;
        let a = (0, x.Dd)(n);
        return (0, i.jsx)("img", {
            src: t,
            className: P.wm,
            alt: a
        })
    },
    w = e => {
        let {
            label: t,
            column1: n,
            column2: s
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(P.U1, P.YI, P.Y9),
            children: [(0, i.jsx)("th", {
                scope: "col",
                className: P.Cr,
                children: t
            }), (0, i.jsx)("th", {
                scope: "col",
                className: P.e4,
                children: n
            }), (0, i.jsx)("th", {
                scope: "col",
                className: a()(P.e4, P.Y9),
                children: s
            })]
        })
    },
    H = e => {
        let {
            label: t,
            column1: n,
            column2: s,
            withBottomBorder: l = !0,
            withTopBorderRadius: r = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: d = !1,
            shortRow: c = !1
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(P.nM, {
                [P.EE]: d,
                [P.Y9]: r,
                [P.kS]: o,
                [P.YI]: l,
                [P.vs]: c
            }),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: P.nx,
                children: t
            }), (0, i.jsx)("td", {
                className: a()(P.Hn, {
                    [P.SD]: d
                }),
                children: n
            }), (0, i.jsx)("td", {
                className: a()(P.Hn, {
                    [P.Y9]: r,
                    [P.kS]: o,
                    [P.SD]: d
                }),
                children: s
            })]
        })
    },
    B = e => {
        let t, {
                className: n,
                hideCTAs: l = !1,
                headingOverride: v,
                hidePill: D = !1,
                selectedPlanColumnClassName: L,
                selectedPlanTier: G = R.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: M
            } = (0, g.Ay)(_.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            B = (0, r.bG)([p.A], () => p.A.hasFetchedSubscriptions()),
            F = (0, A.Y)(R.T7),
            Y = (0, u.Ay)(),
            z = (0, o.qB)(Y),
            X = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
            W = null != X && X.isPremiumWithPremiumGroup(),
            K = (0, x.YE)(X, R.PremiumTypes.TIER_2),
            Z = (0, C.V)(),
            q = Z?.subscription_trial?.sku_id,
            J = (0, T.Us)(),
            Q = (0, S.O)(),
            $ = null != Q && (0, I.U9)(Q, R.pe.TIER_2),
            ee = (0, I.N1)(R.gD.PREMIUM_MONTH_TIER_2),
            et = `${ee}/${(0,x.FJ)(R.WT.MONTH)}`,
            en = (0, x.JM)(R.gD.PREMIUM_MONTH_TIER_0),
            ei = (0, x.JM)(R.gD.PREMIUM_MONTH_TIER_2),
            es = (0, m.A)(),
            el = (0, O.R)(en, ei, $, et, es.fractionalState),
            ea = (0, E.cg)();
        if (!B || !F) return null;
        let er = {
            label: (0, i.jsx)(c.Heading, {
                className: P.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: y.intl.string(y.t.ED4UVD)
            }),
            column1: (0, i.jsx)(V, {
                premiumType: R.PremiumTypes.TIER_0,
                isPremiumGroup: W
            }),
            column2: (0, i.jsx)(V, {
                premiumType: R.PremiumTypes.TIER_2,
                isPremiumGroup: W
            })
        };
        l ? el.push({
            label: null,
            column1: null,
            column2: null,
            withBottomBorder: !1,
            withBottomBorderRadius: !0,
            buttonsRow: !1,
            shortRow: !0
        }) : el.push({
            label: null,
            column1: (0, i.jsxs)(i.Fragment, {
                children: [q === R.pe.TIER_2 || ea ? (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: R.pe.TIER_0,
                    showIcon: !1,
                    look: d.pR.OUTLINED,
                    color: z ? d.XD.BRAND : d.XD.WHITE
                }) : (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: R.pe.TIER_0,
                    showIcon: !1
                }), J === R.PremiumTypes.TIER_2 || null != q ? null : (0, i.jsx)(N.A, {
                    className: P.x6,
                    subscriptionTier: R.pe.TIER_0
                })]
            }),
            column2: (0, i.jsxs)(i.Fragment, {
                children: [q === R.pe.TIER_0 ? (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: R.pe.TIER_2,
                    showIcon: !1,
                    look: d.pR.OUTLINED,
                    color: z ? d.XD.BRAND : d.XD.WHITE
                }) : (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: R.pe.TIER_2,
                    showIcon: !1,
                    hasActivePromotion: ea
                }), J === R.PremiumTypes.TIER_0 || null != q ? null : (0, i.jsx)(N.A, {
                    className: P.x6,
                    subscriptionTier: R.pe.TIER_2
                })]
            }),
            withBottomBorder: !1,
            withBottomBorderRadius: !0,
            buttonsRow: null == q
        }), t = D ? null : null != q || null != J ? (0, i.jsx)(j.ir, {
            text: null != q ? y.intl.string(y.t.IBYG5U) : y.intl.string(y.t.ce1v3V),
            className: P.ls,
            colorOptions: q === R.pe.TIER_0 ? z ? j.at.PREMIUM_TIER_0_GRADIENT_FILL : j.at.PREMIUM_TIER_0_WHITE_FILL : z ? K ? j.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL : j.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL : j.at.PREMIUM_TIER_2_WHITE_FILL
        }) : ea ? (0, i.jsx)(U, {}) : (0, i.jsx)(k, {});
        let eo = q === R.pe.TIER_0 || J === R.PremiumTypes.TIER_0 || G === R.PremiumTypes.TIER_0;
        return (0, i.jsx)(g.f5, {
            value: M,
            children: (0, i.jsxs)("div", {
                className: a()(P.zr, n),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [(0, i.jsx)(c.Heading, {
                    className: a()(P.Qw, P.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: v ?? y.intl.string(y.t.FIbMh9)
                }), W && (0, i.jsx)(f.A, {
                    premiumGroupRole: X.premiumGroupRole,
                    className: P.vg
                }), (0, i.jsxs)("div", {
                    className: P.wY,
                    children: [(0, i.jsx)("div", {
                        className: a()(L, {
                            [P.A9]: eo,
                            [P.ce]: !eo && !W
                        }),
                        children: !eo && t
                    }), (0, i.jsxs)("table", {
                        className: P.tp,
                        children: [(0, i.jsx)("thead", {
                            children: (0, i.jsx)(w, {
                                ...er
                            })
                        }), (0, i.jsx)("tbody", {
                            children: el.map((e, t) => (0, s.createElement)(H, {
                                ...e,
                                key: t
                            }))
                        })]
                    })]
                })]
            })
        })
    }