/** chunk id: 244778 params = (module,exports,require) **/
n.d(t, {
    A: () => H
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
    m = n(793574),
    _ = n(688810),
    g = n(531260),
    A = n(160946),
    x = n(287809),
    p = n(166403),
    h = n(927578),
    T = n(40185),
    E = n(89366),
    f = n(422936),
    S = n(234419),
    C = n(863156),
    b = n(194509),
    N = n(396375),
    I = n(511484),
    v = n(231265),
    j = n(795269),
    y = n(38720),
    O = n(788868),
    R = n(985018),
    L = n(562628),
    P = n(196093),
    D = n(979653),
    M = n(255631),
    G = n(193023);
let k = () => {
        let e = (0, v._)();
        return (0, i.jsx)(j.ir, {
            text: e,
            className: L.QR,
            colorOptions: j.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
        })
    },
    U = () => (0, i.jsx)("div", {
        className: L.Wm,
        children: (0, i.jsx)(c.Heading, {
            className: L.uC,
            variant: "heading-deprecated-12/extrabold",
            children: R.intl.string(R.t["o/oRJB"])
        })
    }),
    w = e => {
        let t, {
                premiumType: n,
                isPremiumGroup: s
            } = e,
            l = (0, u.Ay)();
        if (s)
            if (n === O.PremiumTypes.TIER_0) return (0, i.jsx)(c.Heading, {
                variant: "display-md",
                className: L.dW,
                children: R.intl.string(R.t.tUbSDK)
            });
            else return (0, i.jsx)(c.Heading, {
                variant: "display-md",
                className: L.dW,
                children: R.intl.string(R.t.Ipxkog)
            });
        t = n === O.PremiumTypes.TIER_0 ? (0, o.Mw)(l) ? P : D : (0, o.Mw)(l) ? M : G;
        let a = (0, h.Dd)(n);
        return (0, i.jsx)("img", {
            src: t,
            className: L.wm,
            alt: a
        })
    },
    V = e => {
        let {
            label: t,
            column1: n,
            column2: s
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(L.U1, L.YI, L.Y9),
            children: [(0, i.jsx)("th", {
                scope: "col",
                className: L.Cr,
                children: t
            }), (0, i.jsx)("th", {
                scope: "col",
                className: L.e4,
                children: n
            }), (0, i.jsx)("th", {
                scope: "col",
                className: a()(L.e4, L.Y9),
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
            withTopBorderRadius: r = !1,
            withBottomBorderRadius: o = !1,
            buttonsRow: d = !1,
            shortRow: c = !1
        } = e;
        return (0, i.jsxs)("tr", {
            className: a()(L.nM, {
                [L.EE]: d,
                [L.Y9]: r,
                [L.kS]: o,
                [L.YI]: l,
                [L.vs]: c
            }),
            children: [(0, i.jsx)("th", {
                scope: "row",
                className: L.nx,
                children: t
            }), (0, i.jsx)("td", {
                className: a()(L.Hn, {
                    [L.SD]: d
                }),
                children: n
            }), (0, i.jsx)("td", {
                className: a()(L.Hn, {
                    [L.Y9]: r,
                    [L.kS]: o,
                    [L.SD]: d
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
                hidePill: P = !1,
                selectedPlanColumnClassName: D,
                selectedPlanTier: M = O.PremiumTypes.TIER_2
            } = e,
            {
                analyticsLocations: G
            } = (0, _.Ay)(m.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            H = (0, r.bG)([p.A], () => p.A.hasFetchedSubscriptions()),
            F = (0, A.Y)(O.T7),
            Y = (0, u.Ay)(),
            z = (0, o.qB)(Y),
            X = (0, r.bG)([x.default], () => x.default.getCurrentUser()),
            W = null != X && X.isPremiumWithPremiumGroup(),
            K = (0, h.YE)(X, O.PremiumTypes.TIER_2),
            Z = (0, S.V)(),
            q = Z?.subscription_trial?.sku_id,
            J = (0, E.Us)(),
            Q = (0, f.O)(),
            $ = null != Q && (0, I.U9)(Q, O.pe.TIER_2),
            ee = (0, I.N1)(O.gD.PREMIUM_MONTH_TIER_2),
            et = `${ee}/${(0,h.FJ)(O.WT.MONTH)}`,
            en = (0, h.JM)(O.gD.PREMIUM_MONTH_TIER_0),
            ei = (0, h.JM)(O.gD.PREMIUM_MONTH_TIER_2),
            es = (0, g.A)(),
            el = (0, y.R)(en, ei, $, et, es.fractionalState),
            ea = (0, T.cg)();
        if (!H || !F) return null;
        let er = {
            label: (0, i.jsx)(c.Heading, {
                className: L.__invalid_textColor,
                variant: "heading-lg/extrabold",
                children: R.intl.string(R.t.ED4UVD)
            }),
            column1: (0, i.jsx)(w, {
                premiumType: O.PremiumTypes.TIER_0,
                isPremiumGroup: W
            }),
            column2: (0, i.jsx)(w, {
                premiumType: O.PremiumTypes.TIER_2,
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
                children: [q === O.pe.TIER_2 || ea ? (0, i.jsx)(N.A, {
                    className: L.x6,
                    subscriptionTier: O.pe.TIER_0,
                    showIcon: !1,
                    look: d.pR.OUTLINED,
                    color: z ? d.XD.BRAND : d.XD.WHITE
                }) : (0, i.jsx)(N.A, {
                    className: L.x6,
                    subscriptionTier: O.pe.TIER_0,
                    showIcon: !1
                }), J === O.PremiumTypes.TIER_2 || null != q ? null : (0, i.jsx)(b.A, {
                    className: L.x6,
                    subscriptionTier: O.pe.TIER_0
                })]
            }),
            column2: (0, i.jsxs)(i.Fragment, {
                children: [q === O.pe.TIER_0 ? (0, i.jsx)(N.A, {
                    className: L.x6,
                    subscriptionTier: O.pe.TIER_2,
                    showIcon: !1,
                    look: d.pR.OUTLINED,
                    color: z ? d.XD.BRAND : d.XD.WHITE
                }) : (0, i.jsx)(N.A, {
                    className: L.x6,
                    subscriptionTier: O.pe.TIER_2,
                    showIcon: !1,
                    hasActivePromotion: ea
                }), J === O.PremiumTypes.TIER_0 || null != q ? null : (0, i.jsx)(b.A, {
                    className: L.x6,
                    subscriptionTier: O.pe.TIER_2
                })]
            }),
            withBottomBorder: !1,
            withBottomBorderRadius: !0,
            buttonsRow: null == q
        }), t = P ? null : null != q || null != J ? (0, i.jsx)(j.ir, {
            text: null != q ? R.intl.string(R.t.IBYG5U) : R.intl.string(R.t.ce1v3V),
            className: L.ls,
            colorOptions: q === O.pe.TIER_0 ? z ? j.at.PREMIUM_TIER_0_GRADIENT_FILL : j.at.PREMIUM_TIER_0_WHITE_FILL : z ? K ? j.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL : j.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL : j.at.PREMIUM_TIER_2_WHITE_FILL
        }) : ea ? (0, i.jsx)(k, {}) : (0, i.jsx)(U, {});
        let eo = q === O.pe.TIER_0 || J === O.PremiumTypes.TIER_0 || M === O.PremiumTypes.TIER_0;
        return (0, i.jsx)(_.f5, {
            value: G,
            children: (0, i.jsxs)("div", {
                className: a()(L.zr, n),
                "data-testid": "v2-marketing-page-comparison-table",
                children: [(0, i.jsx)(c.Heading, {
                    className: a()(L.Qw, L.__invalid_textColor),
                    variant: "heading-xxl/extrabold",
                    children: v ?? R.intl.string(R.t.FIbMh9)
                }), W && (0, i.jsx)(C.A, {
                    premiumGroupRole: X.premiumGroupRole,
                    className: L.vg
                }), (0, i.jsxs)("div", {
                    className: L.wY,
                    children: [(0, i.jsx)("div", {
                        className: a()(D, {
                            [L.A9]: eo,
                            [L.ce]: !eo && !W
                        }),
                        children: !eo && t
                    }), (0, i.jsxs)("table", {
                        className: L.tp,
                        children: [(0, i.jsx)("thead", {
                            children: (0, i.jsx)(V, {
                                ...er
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