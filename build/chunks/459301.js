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
    d = i(736653),
    A = i(793574),
    S = i(688810),
    E = i(857586),
    g = i(757036),
    _ = i(602450),
    c = i(144605),
    I = i(927766),
    O = i(557571),
    N = i(18640),
    C = i(236698),
    b = i(976860),
    L = i(392943),
    D = i(954571),
    p = i(840065),
    R = i(715999),
    P = i(934370),
    v = i(450987),
    m = i(623375),
    f = i(652215),
    G = i(788868),
    y = i(985018),
    V = i(895431),
    h = i(458017),
    U = i(120499),
    M = i(684399),
    X = i(446115);
let Y = () => {
        let t = (0, o.q)((0, d.Ay)()),
            {
                analyticsLocations: e
            } = (0, S.Ay)(A.A.CF_WARP_SETTINGS);
        return (0, l.useEffect)(() => {
            D.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
                type: G.e.PRIVACY_PERK_SETTINGS,
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
                            children: [(0, n.jsx)(L.A, {
                                color: t ? "black" : "white"
                            }), (0, n.jsx)("div", {
                                className: h.zN
                            }), (0, n.jsx)("img", {
                                src: t ? M : U,
                                alt: "Cloudflare",
                                width: 103,
                                height: 15
                            })]
                        }), (0, n.jsx)(c.q, {})]
                    })
                }), (0, n.jsxs)("div", {
                    className: h.hQ,
                    children: [(0, n.jsx)("img", {
                        src: X,
                        width: "100",
                        alt: "Private browsing perk logo"
                    }), (0, n.jsxs)("div", {
                        className: h.Qs,
                        children: [(0, n.jsx)(P.F, {}), (0, n.jsx)(R.q, {})]
                    }), (0, n.jsx)("div", {
                        className: h.yP
                    }), (0, n.jsx)("div", {
                        className: h.OQ,
                        children: (0, n.jsx)(k, {})
                    })]
                })]
            }), (0, n.jsx)(m.u, {})]
        })
    },
    k = () => {
        let {
            installationStatus: t,
            isWeb: e,
            setInstallationStatus: i
        } = (0, O.lV)(), o = (0, g.L)(), d = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => () => {
                d.current || C.Ay.fireSurveyAction(o ? s.w.WARP_VPN_SETTINGS_BOUNCE_NITRO : s.w.WARP_VPN_SETTINGS_BOUNCE_NON_NITRO)
            }, [d, o]), e) return (0, n.jsx)(I.X, {
            onClick: () => {
                d.current = !0
            }
        });
        if (!o) return (0, n.jsxs)("div", {
            className: h._u,
            children: [(0, n.jsx)(E.A, {
                buttonTextOverride: y.intl.string(y.t["8x0jKT"]),
                subscriptionTier: G.pe.TIER_2,
                fullWidth: !0,
                size: "sm",
                premiumModalAnalyticsLocation: {
                    page: A.A.CF_WARP_SETTINGS
                },
                onClick: () => {
                    d.current = !0
                }
            }), (0, n.jsx)(a.$nd, {
                variant: "secondary",
                text: y.intl.string(y.t.ZnqyZ2),
                size: "sm",
                onClick: () => {
                    (0, u.closeModal)(p.USER_SETTINGS_MODAL_KEY), (0, b.pX)(f.BVt.APPLICATION_STORE), d.current = !0
                }
            })]
        });
        switch (t) {
            case _.Lk.ERROR:
            case _.Lk.NOT_INSTALLED:
                return (0, n.jsx)(v.y, {
                    onClick: () => d.current = !0
                });
            case _.Lk.INSTALLED:
                return (0, n.jsx)(N.X, {});
            case _.Lk.ZERO_TRUST:
                break;
            case _.Lk.EXISTING_INSTALLATION:
                return (0, n.jsx)(a.$nd, {
                    variant: "primary",
                    onClick: () => {
                        (0, T.u)(f.HAw.NITRO_WARP_CTA_CLICKED, {
                            is_enable_warp: !0
                        }), i(_.Lk.READY_FOR_LICENSE), d.current = !0
                    },
                    text: y.intl.string(V.default.J09UWz)
                });
            case _.Lk.INSTALLING:
            case _.Lk.READY_FOR_LICENSE:
            case _.Lk.WAITING_FOR_TERMS:
            case _.Lk.INSTALLING_TIMEOUT:
                return (0, n.jsx)("div", {
                    className: h.u1,
                    children: (0, n.jsx)(r.y$y, {
                        type: r.tVU.SPINNING_CIRCLE
                    })
                })
        }
        return null
    }