/** chunk id: 183802 params = (module,exports,require) **/
n.d(e, {
    A: () => tt,
    s: () => $
});
var r, s = n(627968),
    i = n(64700),
    a = n(310784),
    l = n.n(a),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(158954),
    _ = n(311907),
    g = n(230109),
    T = n(990078),
    m = n(397927),
    f = n(442433),
    E = n(775602),
    R = n(793574),
    I = n(688810),
    H = n(713517),
    S = n(427209),
    C = n(544028),
    O = n(253932),
    N = n(67480),
    M = n(954571),
    h = n(871123),
    L = n(733391),
    x = n(439303),
    p = n(832163),
    b = n(35826),
    D = n(207654),
    v = n(310962),
    k = n(44724),
    B = n(345938),
    y = n(533406),
    j = n(971146),
    U = n(665711),
    G = n(366523),
    w = n(300182),
    F = n(620999),
    P = n(743693),
    Y = n(696028),
    V = n(914887),
    W = n(995393),
    K = n(652215),
    q = n(985018),
    z = n(105791);
let X = [
        [0, 50],
        [0, 50],
        [0, 40]
    ],
    Q = l()("#000000").darken(1.5).alpha(.9).hex(),
    J = l()("#000000").alpha(0).hex();
var $ = ((r = {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r[r.EMBEDDED = 2] = "EMBEDDED", r);

function Z(t) {
    let {
        guildId: e,
        sku: n,
        isCardHovered: r,
        trackCardClick: a,
        variant: l,
        analyticsLocations: u,
        analyticsContext: o
    } = t, d = i.useCallback(t => {
        t.stopPropagation(), null != n && null != e && (a(W.bB.FORWARD_BUTTON), (0, B.d)({
            sku: n,
            guildId: e,
            analyticsContext: o,
            analyticsLocations: u,
            source: "social-layer-storefront-embed"
        }))
    }, [n, e, a, o, u]), _ = i.useCallback(() => {
        a(W.bB.WISHLIST_BUTTON)
    }, [a]), g = i.useMemo(() => c()(z.o, {
        [z.H5]: r
    }), [r]);
    return (0, s.jsxs)("div", {
        className: z.zu,
        children: [2 === l && (0, s.jsx)(A.DUT, {
            className: c()(g, z.gy),
            onClick: d,
            children: (0, s.jsx)(S.A, {
                size: "refresh_sm",
                color: "currentColor"
            })
        }), (0, s.jsx)(P._, {
            sku: n,
            isCardHovered: r,
            trackButtonClick: _,
            className: c()(g, z.ij),
            location: "social_layer_storefront_card"
        })]
    })
}

function tt(t) {
    let {
        positionInSection: e,
        skuId: r,
        variant: a = 0,
        onClick: l,
        className: u,
        analyticsLocations: o
    } = t, S = i.useRef(null), B = i.useRef(null), P = (0, _.bG)([N.A], () => N.A.get(r)), {
        guildId: $,
        application: tt
    } = (0, h.nG)(P?.applicationId), te = (0, D.b)({
        location: "storefront_card"
    }), tn = (0, _.bG)([C.A], () => (0, A.Mwr)(C.A.theme)), tr = (0, _.bG)([E.A], () => E.A.useReducedMotion), ts = O.Q_.useSetting(), {
        isHoveringOrFocusing: ti
    } = (0, H.A)(S), ta = (0, x.jM)(), {
        analyticsLocations: tl
    } = (0, I.Ay)(o ?? []), tu = i.useRef({
        positionInSection: e,
        analyticsLocations: tl
    }), [tc, to] = i.useState(!1), td = (0, _.bG)([p.A], () => null != r ? p.A.getNormalizedSKUEligibility(r) : void 0, [r]), tA = (0, v.A)(r, tc), t_ = i.useCallback(t => {
        to(t)
    }, []), tg = i.useMemo(() => c()(z.Nr, {
        [z.ax]: 0 === a,
        [z.GW]: 1 === a,
        [z.jz]: 2 === a
    }), [a]), {
        handleCardHover: tT,
        handleCardUnhover: tm
    } = (0, Y.Z)(r, ta, e, tl), {
        handleCardVisibilityChange: tf
    } = (0, V.a)(r, ta, e, tl);
    i.useEffect(() => {
        tf(tc)
    }, [tc]);
    let tE = i.useCallback(t => {
            let {
                analyticsLocations: e,
                positionInSection: n
            } = tu.current, {
                sessionId: s,
                guildId: i,
                pageIndex: a,
                pageTitle: l,
                pageSection: u,
                pageSectionTitle: c,
                isUserGuildMember: o,
                pageHasLeaderboard: d
            } = ta;
            M.default.track(K.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                slayer_storefront_session_id: s,
                sku_id: r,
                guild_id: i,
                page_index: a,
                page_title: l,
                page_section: u,
                page_section_title: c,
                position_in_section: n,
                is_user_guild_member: o,
                page_has_leaderboard: d,
                cta_type: t,
                location_stack: e
            })
        }, [r, ta]),
        {
            primaryIconAsset: tR,
            primaryIconLabel: tI
        } = i.useMemo(() => (0, h.Cv)(P, P?.applicationId), [P]),
        tH = (0, _.bG)([p.A], () => null != $ ? p.A.getStorefrontState($)?.activePage ?? 0 : 0),
        tS = i.useMemo(() => {
            let t = P?.tenantMetadata?.socialLayer?.expiresAt;
            if (null == t) return null;
            let e = d()(),
                n = Math.max(d()(t).diff(e, "days"), 1);
            return n <= 3 ? q.intl.format(q.t.PWw4Vp, {
                days: n
            }) : null
        }, [P?.tenantMetadata?.socialLayer?.expiresAt]),
        tC = (0, h.xf)(P),
        tO = i.useMemo(() => {
            if (!tA) return "none";
            let [t, e] = X[a];
            return `linear-gradient(to top, ${Q} ${30+t}%, ${J} ${30+e}%)`
        }, [a, tA]),
        tN = i.useCallback(() => {
            (0, k.X)({
                guildId: $
            })
        }, [$]),
        tM = i.useCallback(() => {
            null != $ && (0, L.iR)($, r, "SocialLayerStorefrontCard")
        }, [$, r]),
        th = i.useCallback(() => {
            tT(), null != $ && (B.current = setTimeout(() => {
                (0, L.iR)($, r, "SocialLayerStorefrontCard")
            }, 1e3))
        }, [$, r, tT]),
        tL = i.useCallback(() => {
            tm(), null != B.current && (clearTimeout(B.current), B.current = null)
        }, [tm]);
    i.useEffect(() => () => {
        null != B.current && clearTimeout(B.current)
    }, []);
    let tx = i.useCallback(() => {
            null != $ && (0, b.A)({
                guildId: $,
                pageIndex: tH,
                skuId: r,
                slug: P?.slug
            })
        }, [$, r, tH, P?.slug]),
        tp = i.useCallback(t => {
            (tE(W.bB.CARD), null != l && P?.applicationId != null) ? l(t, {
                skuId: r,
                applicationId: P.applicationId
            }): tx()
        }, [tE, l, tx, r, P?.applicationId]),
        tb = i.useCallback(t => {
            ts && (0, f.L3)(t, async () => {
                let {
                    default: t
                } = await n.e("97249").then(n.bind(n, 10680));
                return e => (0, s.jsx)(t, {
                    ...e,
                    skuId: r
                })
            })
        }, [ts, r]);
    if (null == P) return null;
    let tD = (0, h.fq)(P),
        tv = te && tA && null != tt;
    return (0, s.jsx)(g.L, {
        innerRef: S,
        onChange: t_,
        threshold: 0,
        children: (0, s.jsx)(A.vN3, {
            children: (0, s.jsxs)(m.sqX, {
                onClick: tp,
                onContextMenu: tb,
                onMouseDown: tN,
                onMouseEnter: th,
                onMouseLeave: tL,
                className: c()(tg, {
                    [z.Zl]: !tr && 2 !== a,
                    [z.BN]: tn,
                    [tn ? z.Mn : z.YF]: ti,
                    [z.Rc]: !tA
                }, u),
                ref: S,
                "aria-label": P.name,
                children: [tv && 2 !== a && (0, s.jsx)("div", {
                    className: z.Zv,
                    children: (0, s.jsx)(U.W, {
                        application: tt,
                        iconSize: 16
                    })
                }), null != tS && (0, s.jsx)(m.LpS, {
                    text: tS,
                    disableColor: !0,
                    className: z.qS
                }), (0, s.jsx)(Z, {
                    guildId: $,
                    sku: P,
                    isCardHovered: ti,
                    variant: a,
                    trackCardClick: tE,
                    analyticsLocations: tl,
                    analyticsContext: ta
                }), null != tD ? tA ? (0, s.jsx)(G.A, {
                    containerClassName: z.Vl,
                    foregroundImageClassName: z.wP,
                    cardImage: tD,
                    altText: P.name,
                    shape: "custom",
                    backgroundImageClassName: z.GC,
                    cardBackgroundImage: tC
                }) : (0, s.jsx)(F.t, {}) : (0, s.jsx)("div", {
                    className: z.t7,
                    children: (0, s.jsx)(A.qyI, {
                        color: "white",
                        size: "custom",
                        height: 80,
                        width: 80,
                        className: z.Cw
                    })
                }), 2 !== a ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: z.iZ,
                        style: {
                            background: tO
                        }
                    }), (0, s.jsxs)("div", {
                        className: z.zH,
                        children: [(0, s.jsxs)("div", {
                            className: c()(z.gn, {
                                [z.ov]: !(0, h.mC)(P)
                            }),
                            children: [tv && (0, s.jsx)("div", {
                                className: z.S1,
                                children: (0, s.jsx)(j.V, {
                                    application: tt,
                                    textColor: "always-white"
                                })
                            }), tA ? (0, s.jsxs)(s.Fragment, {
                                children: [null != tR && (0, s.jsx)("img", {
                                    src: tR.toString(),
                                    alt: tI,
                                    className: z.ye
                                }), (0, s.jsx)(m.Text, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: P.name
                                })]
                            }) : (0, s.jsx)(F.r, {})]
                        }), (0, s.jsx)("div", {
                            className: z.iQ,
                            children: tA ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, h.mC)(P) && (0, s.jsx)(m.Text, {
                                    variant: "text-md/bold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, h.p3)(P, K.lid.DEFAULT)
                                }), null != P.orbsReward && P.orbsReward > 0 && (0, s.jsx)("div", {
                                    className: z.pt,
                                    children: (0, s.jsx)(m.Text, {
                                        variant: "text-sm/semibold",
                                        color: "currentColor",
                                        children: q.intl.format(q.t.GiVd2Q, {
                                            orbCount: P.orbsReward,
                                            orbIconHook: () => (0, s.jsx)(A.Cp8, {
                                                size: "xs",
                                                color: "currentColor"
                                            }, "orbs-icon")
                                        })
                                    })
                                })]
                            }) : (0, s.jsx)(F.r, {})
                        })]
                    }), (0, s.jsx)("div", {
                        className: z.li,
                        children: (0, s.jsxs)(A.e2v, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [td ? (0, s.jsx)(A.$nd, {
                                variant: "primary",
                                onMouseDown: tM,
                                onClick: t => {
                                    t.stopPropagation(), tE(W.bB.BUY_BUTTON), (0, y.a)(P, {
                                        isGift: !1
                                    }, {
                                        analyticsLocations: [...tl, R.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON],
                                        guildId: $
                                    })
                                },
                                text: (0, h.mC)(P) ? q.intl.format(q.t.Xp5WTn, {
                                    price: (0, h.p3)(P, K.lid.DEFAULT)
                                }) : q.intl.string(q.t.boqtTA),
                                fullWidth: !0
                            }) : (0, s.jsx)(T.m, {
                                text: q.intl.string(q.t.IqlPbQ),
                                children: (0, s.jsx)(A.$nd, {
                                    variant: "primary",
                                    onClick: t => {
                                        t.stopPropagation(), tE(W.bB.VIEW_DETAILS_BUTTON), tx()
                                    },
                                    text: q.intl.string(q.t.KLBTgF),
                                    fullWidth: !0
                                })
                            }), (0, s.jsx)(w.A, {
                                onGift: t => {
                                    t.stopPropagation(), tE(W.bB.GIFT_BUTTON), (0, y.a)(P, {
                                        isGift: !0
                                    }, {
                                        analyticsLocations: [...tl, R.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
                                    })
                                }
                            })]
                        })
                    })]
                }) : null]
            })
        })
    })
}