/** Chunk was on 28979 **/
/** chunk id: 459301, original params: t,e,i (module,exports,require) **/
i.d(e, {
    m: () => Y
});
var n = i(627968),
    l = i(64700),
    s = i(517846),
    r = i(158954),
    u = i(192308),
    a = i(732955),
    o = i(462887),
    T = i(890138),
    A = i(736653),
    d = i(793574),
    S = i(688810),
    E = i(857586),
    _ = i(757036),
    g = i(602450),
    c = i(144605),
    I = i(927766),
    O = i(557571),
    N = i(18640),
    C = i(236698),
    L = i(976860),
    b = i(392943),
    R = i(954571),
    D = i(840065),
    p = i(715999),
    P = i(934370),
    m = i(450987),
    v = i(623375),
    G = i(652215),
    y = i(788868),
    V = i(985018),
    f = i(895431),
    h = i(458017),
    M = i(120499),
    X = i(684399),
    U = i(446115);
let Y = () => {
        let t = (0, o.q)((0, A.Ay)()),
            {
                analyticsLocations: e
            } = (0, S.Ay)(d.A.CF_WARP_SETTINGS);
        return (0, l.useEffect)(() => {
            R.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
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
                            children: [(0, n.jsx)(b.A, {
                                color: t ? "black" : "white"
                            }), (0, n.jsx)("div", {
                                className: h.zN
                            }), (0, n.jsx)("img", {
                                src: t ? X : M,
                                alt: "Cloudflare",
                                width: 103,
                                height: 15
                            })]
                        }), (0, n.jsx)(c.q, {})]
                    })
                }), (0, n.jsxs)("div", {
                    className: h.hQ,
                    children: [(0, n.jsx)("img", {
                        src: U,
                        width: "100",
                        alt: "Private browsing perk logo"
                    }), (0, n.jsxs)("div", {
                        className: h.Qs,
                        children: [(0, n.jsx)(P.F, {}), (0, n.jsx)(p.q, {})]
                    }), (0, n.jsx)("div", {
                        className: h.yP
                    }), (0, n.jsx)("div", {
                        className: h.OQ,
                        children: (0, n.jsx)(k, {})
                    })]
                })]
            }), (0, n.jsx)(v.u, {})]
        })
    },
    k = () => {
        let {
            installationStatus: t,
            isWeb: e,
            setInstallationStatus: i
        } = (0, O.lV)(), o = (0, _.L)(), A = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => () => {
                A.current || C.Ay.fireSurveyAction(o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
            }, [A, o]), e) return (0, n.jsx)(I.X, {
            onClick: () => {
                A.current = !0
            }
        });
        if (!o) return (0, n.jsxs)("div", {
            className: h._u,
            children: [(0, n.jsx)(E.A, {
                buttonTextOverride: V.intl.string(V.t["8x0jKT"]),
                subscriptionTier: y.pe.TIER_2,
                fullWidth: !0,
                size: "sm",
                premiumModalAnalyticsLocation: {
                    page: d.A.CF_WARP_SETTINGS
                },
                onClick: () => {
                    A.current = !0
                }
            }), (0, n.jsx)(a.$nd, {
                variant: "secondary",
                text: V.intl.string(V.t.ZnqyZ2),
                size: "sm",
                onClick: () => {
                    (0, u.closeModal)(D.USER_SETTINGS_MODAL_KEY), (0, L.pX)(G.BVt.APPLICATION_STORE), A.current = !0
                }
            })]
        });
        switch (t) {
            case g.Lk.ERROR:
            case g.Lk.NOT_INSTALLED:
                return (0, n.jsx)(m.y, {
                    onClick: () => A.current = !0
                });
            case g.Lk.INSTALLED:
                return (0, n.jsx)(N.X, {});
            case g.Lk.ZERO_TRUST:
                break;
            case g.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, T.u)(G.HAw.NITRO_WARP_CTA_CLICKED, {
                            is_enable_warp: !0
                        }), i(g.Lk.READY_FOR_LICENSE), A.current = !0
                    },
                    text: V.intl.string(f.default.J09UWz)
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