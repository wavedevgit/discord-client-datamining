/** chunk id: 183802, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Z,
    s: () => X
});
var a, r = n(627968),
    l = n(64700),
    s = n(310784),
    i = n.n(s),
    o = n(503698),
    u = n.n(o),
    c = n(989349),
    d = n.n(c),
    _ = n(158954),
    m = n(311907),
    f = n(230109),
    T = n(990078),
    A = n(397927),
    g = n(775602),
    h = n(793574),
    C = n(688810),
    p = n(139146),
    E = n(713517),
    x = n(427209),
    R = n(544028),
    S = n(67480),
    b = n(954571),
    N = n(580630),
    O = n(871123),
    y = n(733391),
    k = n(439303),
    v = n(832163),
    I = n(35826),
    M = n(310962),
    j = n(44724),
    L = n(486318),
    w = n(345938),
    D = n(533406),
    U = n(366523),
    B = n(300182),
    F = n(620999),
    H = n(696028),
    G = n(914887),
    P = n(995393),
    W = n(652215),
    Y = n(818348),
    V = n(985018),
    q = n(610084);
let z = [
        [0, 50],
        [0, 50],
        [0, 40]
    ],
    K = i()("#000000").darken(1.5).alpha(.9).hex(),
    $ = i()("#000000").alpha(0).hex();
var X = ((a = {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a[a.EMBEDDED = 2] = "EMBEDDED", a);

function J(e) {
    let {
        guildId: t,
        sku: n,
        isCardHovered: a,
        trackCardClick: s,
        variant: i,
        analyticsLocations: o,
        analyticsContext: c
    } = e, d = l.useCallback(e => {
        e.stopPropagation(), null != n && null != t && (s(P.bB.FORWARD_BUTTON), (0, w.d)({
            sku: n,
            guildId: t,
            analyticsContext: c,
            analyticsLocations: o,
            source: "social-layer-storefront-embed"
        }))
    }, [n, t, s, c, o]), m = l.useCallback(() => {
        s(P.bB.WISHLIST_BUTTON)
    }, [s]), f = l.useMemo(() => u()(q.o, {
        [q.H5]: a
    }), [a]);
    return (0, r.jsxs)("div", {
        className: q.zu,
        children: [2 === i && (0, r.jsx)(_.DUT, {
            className: u()(f, q.gy),
            onClick: d,
            children: (0, r.jsx)(x.A, {
                size: "refresh_sm",
                color: "currentColor"
            })
        }), (0, r.jsx)(p._, {
            skuId: n.id,
            productName: n.name,
            isCardHovered: a,
            nuxGraphic: (0, L.N)(n),
            onClick: m,
            className: u()(f, q.ij)
        })]
    })
}

function Z(e) {
    let {
        positionInSection: t,
        applicationId: n,
        skuId: a,
        variant: s = 0,
        guildId: i,
        onClick: o,
        className: c,
        analyticsLocations: p
    } = e, x = l.useRef(null), L = l.useRef(null), w = (0, m.bG)([S.A], () => S.A.get(a)), X = (0, m.bG)([R.A], () => (0, _.Mwr)(R.A.theme)), Z = (0, m.bG)([g.A], () => g.A.useReducedMotion), {
        isHoveringOrFocusing: Q
    } = (0, E.A)(x), ee = (0, k.jM)(), {
        analyticsLocations: et
    } = (0, C.Ay)(p ?? []), en = l.useRef({
        positionInSection: t,
        analyticsLocations: et
    }), [ea, er] = l.useState(!1), el = (0, m.bG)([v.A], () => null != a ? v.A.getNormalizedSKUEligibility(a) : void 0, [a]), es = (0, M.A)(a, ea), ei = l.useCallback(e => {
        er(e)
    }, []), eo = l.useMemo(() => u()(q.Nr, {
        [q.ax]: 0 === s,
        [q.GW]: 1 === s,
        [q.jz]: 2 === s
    }), [s]), {
        handleCardHover: eu,
        handleCardUnhover: ec
    } = (0, H.Z)(a, ee, t, et), {
        handleCardVisibilityChange: ed
    } = (0, G.a)(a, ee, t, et);
    l.useEffect(() => {
        ed(ea)
    }, [ea]);
    let e_ = l.useCallback(e => {
            let {
                analyticsLocations: t,
                positionInSection: n
            } = en.current, {
                sessionId: r,
                guildId: l,
                pageIndex: s,
                pageTitle: i,
                pageSection: o,
                pageSectionTitle: u,
                isUserGuildMember: c,
                pageHasLeaderboard: d
            } = ee;
            b.default.track(W.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                slayer_storefront_session_id: r,
                sku_id: a,
                guild_id: l,
                page_index: s,
                page_title: i,
                page_section: o,
                page_section_title: u,
                position_in_section: n,
                is_user_guild_member: c,
                page_has_leaderboard: d,
                cta_type: e,
                location_stack: t
            })
        }, [a, ee]),
        {
            primaryIconAsset: em,
            primaryIconLabel: ef
        } = l.useMemo(() => (0, O.Cv)(w, n), [w, n]),
        eT = (0, m.bG)([v.A], () => null != i ? v.A.getStorefrontState(i)?.activePage ?? 0 : 0),
        eA = l.useMemo(() => {
            if (w?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let e = d()(),
                t = Math.max(d()(w.tenantMetadata.socialLayer.expiresAt).diff(e, "days"), 1);
            return t <= 3 ? V.intl.format(V.t.PWw4Vp, {
                days: t
            }) : null
        }, [w?.tenantMetadata?.socialLayer?.expiresAt]),
        eg = (0, O.xf)(w),
        eh = l.useMemo(() => {
            if (!es) return "none";
            let [e, t] = z[s];
            return `linear-gradient(to top, ${K} ${30+e}%, ${$} ${30+t}%)`
        }, [s, es]),
        eC = l.useCallback(() => {
            (0, j.X)({
                guildId: i
            })
        }, [i]),
        ep = l.useCallback(() => {
            null != i && (0, y.iR)(i, a, "SocialLayerStorefrontCard")
        }, [i, a]),
        eE = l.useCallback(() => {
            eu(), null != i && (L.current = setTimeout(() => {
                (0, y.iR)(i, a, "SocialLayerStorefrontCard")
            }, 1e3))
        }, [i, a, eu]),
        ex = l.useCallback(() => {
            ec(), null != L.current && (clearTimeout(L.current), L.current = null)
        }, [ec]);
    l.useEffect(() => () => {
        null != L.current && clearTimeout(L.current)
    }, []);
    let eR = l.useCallback(() => {
            null != i && (0, I.A)({
                guildId: i,
                pageIndex: eT,
                skuId: a,
                slug: w?.slug
            })
        }, [i, a, eT, w?.slug]),
        eS = l.useCallback(e => {
            (e_(P.bB.CARD), null != o) ? o(e): eR()
        }, [e_, o, eR]);
    if (null == w) return null;
    let eb = (0, O.fq)(w);
    return (0, r.jsx)(f.L, {
        innerRef: x,
        onChange: ei,
        threshold: 0,
        children: (0, r.jsx)(_.vN3, {
            children: (0, r.jsxs)(A.sqX, {
                onClick: eS,
                onMouseDown: eC,
                onMouseEnter: eE,
                onMouseLeave: ex,
                className: u()(eo, {
                    [q.Zl]: !Z && 2 !== s,
                    [q.BN]: X,
                    [X ? q.Mn : q.YF]: Q,
                    [q.Rc]: !es
                }, c),
                ref: x,
                "aria-label": w.name,
                children: [null != eA && (0, r.jsx)(A.LpS, {
                    text: eA,
                    disableColor: !0,
                    className: q.qS
                }), (0, r.jsx)(J, {
                    guildId: i,
                    sku: w,
                    isCardHovered: Q,
                    variant: s,
                    trackCardClick: e_,
                    analyticsLocations: et,
                    analyticsContext: ee
                }), null != eb ? es ? (0, r.jsx)(U.A, {
                    containerClassName: q.Vl,
                    foregroundImageClassName: q.wP,
                    cardImage: eb,
                    altText: w.name,
                    shape: "custom",
                    backgroundImageClassName: q.GC,
                    cardBackgroundImage: eg
                }) : (0, r.jsx)(F.t, {}) : (0, r.jsx)("div", {
                    className: q.t7,
                    children: (0, r.jsx)(_.qyI, {
                        color: "white",
                        size: "custom",
                        height: 80,
                        width: 80,
                        className: q.Cw
                    })
                }), 2 !== s ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: q.iZ,
                        style: {
                            background: eh
                        }
                    }), (0, r.jsxs)("div", {
                        className: q.zH,
                        children: [(0, r.jsx)("div", {
                            className: q.gn,
                            children: es ? (0, r.jsxs)(r.Fragment, {
                                children: [null != em && (0, r.jsx)("img", {
                                    src: em.toString(),
                                    alt: ef,
                                    className: q.ye
                                }), (0, r.jsx)(A.Text, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: w.name
                                })]
                            }) : (0, r.jsx)(F.r, {})
                        }), (0, r.jsx)("div", {
                            className: q.iQ,
                            children: es ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(A.Text, {
                                    variant: "text-md/bold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, N.$g)(w.price?.amount ?? 0, w.price?.currency ?? Y.Yr.USD)
                                }), null != w.orbsReward && w.orbsReward > 0 && (0, r.jsx)("div", {
                                    className: q.pt,
                                    children: (0, r.jsx)(A.Text, {
                                        variant: "text-sm/semibold",
                                        color: "currentColor",
                                        children: V.intl.format(V.t.GiVd2Q, {
                                            orbCount: w.orbsReward,
                                            orbIconHook: () => (0, r.jsx)(_.Cp8, {
                                                size: "xs",
                                                color: "currentColor"
                                            }, "orbs-icon")
                                        })
                                    })
                                })]
                            }) : (0, r.jsx)(F.r, {})
                        })]
                    }), (0, r.jsx)("div", {
                        className: q.li,
                        children: (0, r.jsxs)(_.e2v, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [el ? (0, r.jsx)(_.$nd, {
                                variant: "primary",
                                onMouseDown: ep,
                                onClick: e => {
                                    e.stopPropagation(), e_(P.bB.BUY_BUTTON), (0, D.a)(w, {
                                        isGift: !1
                                    }, {
                                        analyticsLocations: [...et, h.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON],
                                        guildId: i
                                    })
                                },
                                text: V.intl.format(V.t.Xp5WTn, {
                                    price: (0, N.$g)(w.price?.amount ?? 0, w.price?.currency ?? Y.Yr.USD)
                                }),
                                fullWidth: !0
                            }) : (0, r.jsx)(T.m, {
                                text: V.intl.string(V.t.IqlPbQ),
                                children: (0, r.jsx)(_.$nd, {
                                    variant: "primary",
                                    onClick: e => {
                                        e.stopPropagation(), e_(P.bB.VIEW_DETAILS_BUTTON), eR()
                                    },
                                    text: V.intl.string(V.t.KLBTgF),
                                    fullWidth: !0
                                })
                            }), (0, r.jsx)(B.A, {
                                onGift: e => {
                                    e.stopPropagation(), e_(P.bB.GIFT_BUTTON), (0, D.a)(w, {
                                        isGift: !0
                                    }, {
                                        analyticsLocations: [...et, h.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
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