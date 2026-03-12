/** chunk id: 244778 params = (module,exports,require) **/
n.d(t, {
    A: () => H
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(582754),
    d = n(421380),
    c = n(397927),
    u = n(736653),
    _ = n(793574),
    m = n(688810),
    g = n(531260),
    A = n(160946),
    h = n(287809),
    x = n(166403),
    p = n(927578),
    T = n(40185),
    E = n(89366),
    C = n(422936),
    S = n(234419),
    f = n(863156),
    N = n(194509),
    b = n(396375),
    I = n(511484),
    v = n(231265),
    j = n(795269),
    O = n(38720),
    y = n(788868),
    R = n(985018),
    P = n(472626),
    D = n(196093),
    L = n(979653),
    M = n(255631),
    G = n(193023);
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
            children: R.intl.string(R.t["o/oRJB"])
        })
    }),
    V = e => {
        let t, {
                premiumType: n,
                isPremiumGroup: s
            } = e,
            l = (0, u.Ay)();
        if (s)
            if (n === y.PremiumTypes.TIER_0) return (0, i.jsx)(c.Heading, {
                variant: "display-md",
                className: P.dW,
                children: R.intl.string(R.t.tUbSDK)
            });
            else return (0, i.jsx)(c.Heading, {
                variant: "display-md",
                className: P.dW,
                children: R.intl.string(R.t.Ipxkog)
            });
        t = n === y.PremiumTypes.TIER_0 ? (0, o.Mw)(l) ? D : L : (0, o.Mw)(l) ? M : G;
        let r = (0, p.Dd)(n);
        return (0, i.jsx)("img", {
            src: t,
            className: P.wm,
            alt: r
        })
    },
    w = e => {
        let {
            label: t,
            column1: n,
            column2: s
        } = e;
        return (0, i.jsxs)("tr", {
            className: r()(P.U1, P.YI, P.Y9),
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
                className: r()(P.e4, P.Y9),
                children: s
            })]
        })
    },
    B = e => {
        let {
            label: t,
            column1: n,
            column2: s,
            withBottomBorder: l = !0,
            withTopBorderRadius: a = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: d = !1,
            shortRow: c = !1
        } = e;
        return (0, i.jsxs)("tr", {
            className: r()(P.nM, {
                [P.EE]: d,
                [P.Y9]: a,
                [P.kS]: o,
                [P.YI]: l,
                [P.vs]: c
            }),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: P.nx,
                children: t
            }), (0, i.jsx)("td", {
                className: r()(P.Hn, {
                    [P.SD]: d
                }),
                children: n
            }), (0, i.jsx)("td", {
                className: r()(P.Hn, {
                    [P.Y9]: a,
                    [P.kS]: o,
                    [P.SD]: d
                }),
                children: s
            })]
        })
    },
    H = e => {
        let t, {
                className: n,
                hideCTAs: l = !1,
                headingOverride: v,
                hidePill: D = !1,
                selectedPlanColumnClassName: L,
                selectedPlanTier: M = y.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: G
            } = (0, m.Ay)(_.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            H = (0, a.bG)([x.A], () => x.A.hasFetchedSubscriptions()),
            F = (0, A.Y)(y.T7),
            Y = (0, u.Ay)(),
            z = (0, o.qB)(Y),
            X = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
            W = null != X && X.isPremiumWithPremiumGroup(),
            K = (0, p.YE)(X, y.PremiumTypes.TIER_2),
            Z = (0, S.V)(),
            q = Z?.subscription_trial?.sku_id,
            J = (0, E.Us)(),
            Q = (0, C.O)(),
            $ = null != Q && (0, I.U9)(Q, y.pe.TIER_2),
            ee = (0, I.N1)(y.gD.PREMIUM_MONTH_TIER_2),
            et = `${ee}/${(0,p.FJ)(y.WT.MONTH)}`,
            en = (0, p.JM)(y.gD.PREMIUM_MONTH_TIER_0),
            ei = (0, p.JM)(y.gD.PREMIUM_MONTH_TIER_2),
            es = (0, g.A)(),
            el = (0, O.R)(en, ei, $, et, es.fractionalState),
            er = (0, T.cg)();
        if (!H || !F) return null;
        let ea = {
            label: (0, i.jsx)(c.Heading, {
                className: P.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: R.intl.string(R.t.ED4UVD)
            }),
            column1: (0, i.jsx)(V, {
                premiumType: y.PremiumTypes.TIER_0,
                isPremiumGroup: W
            }),
            column2: (0, i.jsx)(V, {
                premiumType: y.PremiumTypes.TIER_2,
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
                children: [q === y.pe.TIER_2 || er ? (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: y.pe.TIER_0,
                    showIcon: !1,
                    look: d.pR.OUTLINED,
                    color: z ? d.XD.BRAND : d.XD.WHITE
                }) : (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: y.pe.TIER_0,
                    showIcon: !1
                }), J === y.PremiumTypes.TIER_2 || null != q ? null : (0, i.jsx)(N.A, {
                    className: P.x6,
                    subscriptionTier: y.pe.TIER_0
                })]
            }),
            column2: (0, i.jsxs)(i.Fragment, {
                children: [q === y.pe.TIER_0 ? (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: y.pe.TIER_2,
                    showIcon: !1,
                    look: d.pR.OUTLINED,
                    color: z ? d.XD.BRAND : d.XD.WHITE
                }) : (0, i.jsx)(b.A, {
                    className: P.x6,
                    subscriptionTier: y.pe.TIER_2,
                    showIcon: !1,
                    hasActivePromotion: er
                }), J === y.PremiumTypes.TIER_0 || null != q ? null : (0, i.jsx)(N.A, {
                    className: P.x6,
                    subscriptionTier: y.pe.TIER_2
                })]
            }),
            withBottomBorder: !1,
            withBottomBorderRadius: !0,
            buttonsRow: null == q
        }), t = D ? null : null != q || null != J ? (0, i.jsx)(j.ir, {
            text: null != q ? R.intl.string(R.t.IBYG5U) : R.intl.string(R.t.ce1v3V),
            className: P.ls,
            colorOptions: q === y.pe.TIER_0 ? z ? j.at.PREMIUM_TIER_0_GRADIENT_FILL : j.at.PREMIUM_TIER_0_WHITE_FILL : z ? K ? j.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL : j.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL : j.at.PREMIUM_TIER_2_WHITE_FILL
        }) : er ? (0, i.jsx)(U, {}) : (0, i.jsx)(k, {});
        let eo = q === y.pe.TIER_0 || J === y.PremiumTypes.TIER_0 || M === y.PremiumTypes.TIER_0;
        return (0, i.jsx)(m.f5, {
            value: G,
            children: (0, i.jsxs)("div", {
                className: r()(P.zr, n),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [(0, i.jsx)(c.Heading, {
                    className: r()(P.Qw, P.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: v ?? R.intl.string(R.t.FIbMh9)
                }), W && (0, i.jsx)(f.A, {
                    premiumGroupRole: X.premiumGroupRole,
                    className: P.vg
                }), (0, i.jsxs)("div", {
                    className: P.wY,
                    children: [(0, i.jsx)("div", {
                        className: r()(L, {
                            [P.A9]: eo,
                            [P.ce]: !eo && !W
                        }),
                        children: !eo && t
                    }), (0, i.jsxs)("table", {
                        className: P.tp,
                        children: [(0, i.jsx)("thead", {
                            children: (0, i.jsx)(w, {
                                ...ea
                            })
                        }), (0, i.jsx)("tbody", {
                            children: el.map((e, t) => (0, s.createElement)(B, {
                                ...e,
                                key: t
                            }))
                        })]
                    })]
                })]
            })
        })
    }