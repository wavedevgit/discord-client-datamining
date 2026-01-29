/** Chunk was on 4670 **/
/** chunk id: 459301, original params: e,t,i (module,exports,require) **/
i.d(t, {
    m: () => x
});
var n = i(627968),
    l = i(64700),
    s = i(517846),
    r = i(158954),
    a = i(192308),
    u = i(732955),
    o = i(462887),
    d = i(890138),
    T = i(736653),
    c = i(793574),
    A = i(688810),
    S = i(857586),
    _ = i(757036),
    E = i(602450),
    g = i(144605),
    I = i(927766),
    O = i(557571),
    C = i(18640),
    N = i(236698),
    b = i(976860),
    p = i(392943),
    m = i(954571),
    f = i(840065),
    L = i(715999),
    D = i(934370),
    R = i(450987),
    v = i(623375),
    P = i(652215),
    y = i(788868),
    G = i(985018),
    h = i(895431),
    V = i(458017),
    U = i(120499),
    M = i(684399),
    X = i(446115);
let x = () => {
        let e = (0, o.q)((0, T.Ay)()),
            {
                analyticsLocations: t
            } = (0, A.Ay)(c.A.CF_WARP_SETTINGS);
        return (0, l.useEffect)(() => {
            m.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                type: y.e.PRIVACY_PERK_SETTINGS,
                location_stack: t
            })
        }, [t]), (0, n.jsxs)("div", {
            className: V.V1,
            children: [(0, n.jsxs)(r.hLv, {
                color: "pink",
                children: [(0, n.jsx)("div", {
                    className: V.N1,
                    children: (0, n.jsxs)("div", {
                        className: V.wx,
                        children: [(0, n.jsxs)("div", {
                            className: V.QF,
                            children: [(0, n.jsx)(p.A, {
                                color: e ? "black" : "white"
                            }), (0, n.jsx)("div", {
                                className: V.zN
                            }), (0, n.jsx)("img", {
                                src: e ? M : U,
                                alt: "Cloudflare",
                                width: 103,
                                height: 15
                            })]
                        }), (0, n.jsx)(g.q, {})]
                    })
                }), (0, n.jsxs)("div", {
                    className: V.hQ,
                    children: [(0, n.jsx)("img", {
                        src: X,
                        width: "100",
                        alt: "Private browsing perk logo"
                    }), (0, n.jsxs)("div", {
                        className: V.Qs,
                        children: [(0, n.jsx)(D.F, {}), (0, n.jsx)(L.q, {})]
                    }), (0, n.jsx)("div", {
                        className: V.yP
                    }), (0, n.jsx)("div", {
                        className: V.OQ,
                        children: (0, n.jsx)(k, {})
                    })]
                })]
            }), (0, n.jsx)(v.u, {})]
        })
    },
    k = () => {
        let {
            installationStatus: e,
            isWeb: t,
            setInstallationStatus: i
        } = (0, O.lV)(), o = (0, _.L)(), T = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => () => {
                T.current || N.Ay.fireSurveyAction(o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
            }, [T, o]), t) return (0, n.jsx)(I.X, {
            onClick: () => {
                T.current = !0
            }
        });
        if (!o) return (0, n.jsxs)("div", {
            className: V._u,
            children: [(0, n.jsx)(S.A, {
                buttonTextOverride: G.intl.string(G.t["8x0jKT"]),
                subscriptionTier: y.pe.TIER_2,
                fullWidth: !0,
                size: "sm",
                premiumModalAnalyticsLocation: {
                    page: c.A.CF_WARP_SETTINGS
                },
                onClick: () => {
                    T.current = !0
                }
            }), (0, n.jsx)(u.$nd, {
                variant: "secondary",
                text: G.intl.string(G.t.ZnqyZ2),
                size: "sm",
                onClick: () => {
                    (0, a.closeModal)(f.USER_SETTINGS_MODAL_KEY), (0, b.pX)(P.BVt.APPLICATION_STORE), T.current = !0
                }
            })]
        });
        switch (e) {
            case E.Lk.ERROR:
            case E.Lk.NOT_INSTALLED:
                return (0, n.jsx)(R.y, {
                    onClick: () => T.current = !0
                });
            case E.Lk.INSTALLED:
                return (0, n.jsx)(C.X, {});
            case E.Lk.ZERO_TRUST:
                break;
            case E.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(u.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, d.u)(P.HAw.NITRO_WARP_CTA_CLICKED, {
                            is_enable_warp: !0
                        }), i(E.Lk.READY_FOR_LICENSE), T.current = !0
                    },
                    text: G.intl.string(h.default.J09UWz)
                });
            case E.Lk.INSTALLING:
            case E.Lk.READY_FOR_LICENSE:
            case E.Lk.WAITING_FOR_TERMS:
            case E.Lk.INSTALLING_TIMEOUT:
                return (0, n.jsx)("div", {
                    className: V.u1,
                    children: (0, n.jsx)(r.y$y, {
                        type: r.tVU.SPINNING_CIRCLE
                    })
                })
        }
        return null
    }