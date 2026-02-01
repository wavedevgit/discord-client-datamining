/** chunk id: 459301, original params: t,e,i (module,exports,require) **/
i.d(e, {
    m: () => x
});
var n = i(627968),
    l = i(64700),
    s = i(517846),
    r = i(158954),
    u = i(192308),
    a = i(732955),
    o = i(462887),
    d = i(890138),
    T = i(736653),
    A = i(793574),
    S = i(688810),
    c = i(857586),
    E = i(757036),
    g = i(602450),
    _ = i(144605),
    I = i(927766),
    O = i(557571),
    N = i(18640),
    C = i(236698),
    b = i(976860),
    p = i(392943),
    L = i(954571),
    D = i(840065),
    m = i(715999),
    R = i(934370),
    f = i(450987),
    P = i(623375),
    v = i(652215),
    y = i(788868),
    G = i(985018),
    V = i(895431),
    h = i(458017),
    U = i(120499),
    M = i(684399),
    X = i(446115);
let x = () => {
        let t = (0, o.q)((0, T.Ay)()),
            {
                analyticsLocations: e
            } = (0, S.Ay)(A.A.CF_WARP_SETTINGS);
        return (0, l.useEffect)(() => {
            L.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PRIVACY_PERK_SETTINGS,
                location_stack: e
            })
        }, [e]), (0, n.jsxs)("div", {
            className: h.V1,
            children: [(0, n.jsxs)(r.hLv, {
                color: "pink",
                children: [(0, n.jsx)("div", {
                    className: h.N1,
                    children: (0, n.jsxs)("div", {
                        className: h.wx,
                        children: [(0, n.jsxs)("div", {
                            className: h.QF,
                            children: [(0, n.jsx)(p.A, {
                                color: t ? "black" : "white"
                            }), (0, n.jsx)("div", {
                                className: h.zN
                            }), (0, n.jsx)("img", {
                                src: t ? M : U,
                                alt: "Cloudflare",
                                width: 103,
                                height: 15
                            })]
                        }), (0, n.jsx)(_.q, {})]
                    })
                }), (0, n.jsxs)("div", {
                    className: h.hQ,
                    children: [(0, n.jsx)("img", {
                        src: X,
                        width: "100",
                        alt: "Private browsing perk logo"
                    }), (0, n.jsxs)("div", {
                        className: h.Qs,
                        children: [(0, n.jsx)(R.F, {}), (0, n.jsx)(m.q, {})]
                    }), (0, n.jsx)("div", {
                        className: h.yP
                    }), (0, n.jsx)("div", {
                        className: h.OQ,
                        children: (0, n.jsx)(j, {})
                    })]
                })]
            }), (0, n.jsx)(P.u, {})]
        })
    },
    j = () => {
        let {
            installationStatus: t,
            isWeb: e,
            setInstallationStatus: i
        } = (0, O.lV)(), o = (0, E.L)(), T = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => () => {
                T.current || C.Ay.fireSurveyAction(o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
            }, [T, o]), e) return (0, n.jsx)(I.X, {
            onClick: () => {
                T.current = !0
            }
        });
        if (!o) return (0, n.jsxs)("div", {
            className: h._u,
            children: [(0, n.jsx)(c.A, {
                buttonTextOverride: G.intl.string(G.t["8x0jKT"]),
                subscriptionTier: y.pe.TIER_2,
                fullWidth: !0,
                size: "sm",
                premiumModalAnalyticsLocation: {
                    page: A.A.CF_WARP_SETTINGS
                },
                onClick: () => {
                    T.current = !0
                }
            }), (0, n.jsx)(a.$nd, {
                variant: "secondary",
                text: G.intl.string(G.t.ZnqyZ2),
                size: "sm",
                onClick: () => {
                    (0, u.closeModal)(D.USER_SETTINGS_MODAL_KEY), (0, b.pX)(v.BVt.APPLICATION_STORE), T.current = !0
                }
            })]
        });
        switch (t) {
            case g.Lk.ERROR:
            case g.Lk.NOT_INSTALLED:
                return (0, n.jsx)(f.y, {
                    onClick: () => T.current = !0
                });
            case g.Lk.INSTALLED:
                return (0, n.jsx)(N.X, {});
            case g.Lk.ZERO_TRUST:
                break;
            case g.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, d.u)(v.HAw.NITRO_WARP_CTA_CLICKED, {
                            is_enable_warp: !0
                        }), i(g.Lk.READY_FOR_LICENSE), T.current = !0
                    },
                    text: G.intl.string(V.default.J09UWz)
                });
            case g.Lk.INSTALLING:
            case g.Lk.READY_FOR_LICENSE:
            case g.Lk.WAITING_FOR_TERMS:
            case g.Lk.INSTALLING_TIMEOUT:
                return (0, n.jsx)("div", {
                    className: h.u1,
                    children: (0, n.jsx)(r.y$y, {
                        type: r.tVU.SPINNING_CIRCLE
                    })
                })
        }
        return null
    }