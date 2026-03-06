/** chunk id: 183802 params = (module,exports,require) **/
n.d(e, {
    A: () => $,
    s: () => J
});
var r, a = n(627968),
    s = n(64700),
    i = n(310784),
    l = n.n(i),
    u = n(503698),
    c = n.n(u),
    o = n(989349),
    d = n.n(o),
    A = n(158954),
    _ = n(311907),
    g = n(230109),
    T = n(990078),
    m = n(397927),
    R = n(775602),
    E = n(793574),
    f = n(688810),
    S = n(139146),
    O = n(713517),
    I = n(427209),
    C = n(544028),
    N = n(67480),
    H = n(954571),
    h = n(580630),
    M = n(871123),
    L = n(733391),
    p = n(439303),
    x = n(832163),
    b = n(35826),
    D = n(310962),
    y = n(44724),
    k = n(486318),
    v = n(345938),
    U = n(533406),
    j = n(366523),
    B = n(300182),
    G = n(620999),
    w = n(696028),
    F = n(914887),
    P = n(995393),
    Y = n(652215),
    W = n(818348),
    V = n(985018),
    K = n(120690);
let z = [
        [0, 50],
        [0, 50],
        [0, 40]
    ],
    q = l()("#000000").darken(1.5).alpha(.9).hex(),
    X = l()("#000000").alpha(0).hex();
var J = ((r = {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r[r.EMBEDDED = 2] = "EMBEDDED", r);

function Q(t) {
    let {
        guildId: e,
        sku: n,
        isCardHovered: r,
        trackCardClick: i,
        variant: l,
        analyticsLocations: u,
        analyticsContext: o
    } = t, d = s.useCallback(t => {
        t.stopPropagation(), null != n && null != e && (i(P.bB.FORWARD_BUTTON), (0, v.d)({
            sku: n,
            guildId: e,
            analyticsContext: o,
            analyticsLocations: u,
            source: "social-layer-storefront-embed"
        }))
    }, [n, e, i, o, u]), _ = s.useCallback(() => {
        i(P.bB.WISHLIST_BUTTON)
    }, [i]), g = s.useMemo(() => c()(K.o, {
        [K.H5]: r
    }), [r]);
    return (0, a.jsxs)("div", {
        className: K.zu,
        children: [2 === l && (0, a.jsx)(A.DUT, {
            className: c()(g, K.gy),
            onClick: d,
            children: (0, a.jsx)(I.A, {
                size: "refresh_sm",
                color: "currentColor"
            })
        }), (0, a.jsx)(S._, {
            skuId: n.id,
            productName: n.name,
            isCardHovered: r,
            nuxGraphic: (0, k.N)(n),
            onClick: _,
            className: c()(g, K.ij)
        })]
    })
}

function $(t) {
    let {
        positionInSection: e,
        applicationId: n,
        skuId: r,
        variant: i = 0,
        guildId: l,
        onClick: u,
        className: o,
        analyticsLocations: S
    } = t, I = s.useRef(null), k = s.useRef(null), v = (0, _.bG)([N.A], () => N.A.get(r)), J = (0, _.bG)([C.A], () => (0, A.Mwr)(C.A.theme)), $ = (0, _.bG)([R.A], () => R.A.useReducedMotion), {
        isHoveringOrFocusing: Z
    } = (0, O.A)(I), tt = (0, p.jM)(), {
        analyticsLocations: te
    } = (0, f.Ay)(S ?? []), tn = s.useRef({
        positionInSection: e,
        analyticsLocations: te
    }), [tr, ta] = s.useState(!1), ts = (0, _.bG)([x.A], () => null != r ? x.A.getNormalizedSKUEligibility(r) : void 0, [r]), ti = (0, D.A)(r, tr), tl = s.useCallback(t => {
        ta(t)
    }, []), tu = s.useMemo(() => c()(K.Nr, {
        [K.ax]: 0 === i,
        [K.GW]: 1 === i,
        [K.jz]: 2 === i
    }), [i]), {
        handleCardHover: tc,
        handleCardUnhover: to
    } = (0, w.Z)(r, tt, e, te), {
        handleCardVisibilityChange: td
    } = (0, F.a)(r, tt, e, te);
    s.useEffect(() => {
        td(tr)
    }, [tr]);
    let tA = s.useCallback(t => {
            let {
                analyticsLocations: e,
                positionInSection: n
            } = tn.current, {
                sessionId: a,
                guildId: s,
                pageIndex: i,
                pageTitle: l,
                pageSection: u,
                pageSectionTitle: c,
                isUserGuildMember: o,
                pageHasLeaderboard: d
            } = tt;
            H.default.track(Y.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
                slayer_storefront_session_id: a,
                sku_id: r,
                guild_id: s,
                page_index: i,
                page_title: l,
                page_section: u,
                page_section_title: c,
                position_in_section: n,
                is_user_guild_member: o,
                page_has_leaderboard: d,
                cta_type: t,
                location_stack: e
            })
        }, [r, tt]),
        {
            primaryIconAsset: t_,
            primaryIconLabel: tg
        } = s.useMemo(() => (0, M.Cv)(v, n), [v, n]),
        tT = (0, _.bG)([x.A], () => null != l ? x.A.getStorefrontState(l)?.activePage ?? 0 : 0),
        tm = s.useMemo(() => {
            if (v?.tenantMetadata?.socialLayer?.expiresAt == null) return null;
            let t = d()(),
                e = Math.max(d()(v.tenantMetadata.socialLayer.expiresAt).diff(t, "days"), 1);
            return e <= 3 ? V.intl.format(V.t.PWw4Vp, {
                days: e
            }) : null
        }, [v?.tenantMetadata?.socialLayer?.expiresAt]),
        tR = (0, M.xf)(v),
        tE = s.useMemo(() => {
            if (!ti) return "none";
            let [t, e] = z[i];
            return `linear-gradient(to top, ${q} ${30+t}%, ${X} ${30+e}%)`
        }, [i, ti]),
        tf = s.useCallback(() => {
            (0, y.X)({
                guildId: l
            })
        }, [l]),
        tS = s.useCallback(() => {
            null != l && (0, L.iR)(l, r, "SocialLayerStorefrontCard")
        }, [l, r]),
        tO = s.useCallback(() => {
            tc(), null != l && (k.current = setTimeout(() => {
                (0, L.iR)(l, r, "SocialLayerStorefrontCard")
            }, 1e3))
        }, [l, r, tc]),
        tI = s.useCallback(() => {
            to(), null != k.current && (clearTimeout(k.current), k.current = null)
        }, [to]);
    s.useEffect(() => () => {
        null != k.current && clearTimeout(k.current)
    }, []);
    let tC = s.useCallback(() => {
            null != l && (0, b.A)({
                guildId: l,
                pageIndex: tT,
                skuId: r,
                slug: v?.slug
            })
        }, [l, r, tT, v?.slug]),
        tN = s.useCallback(t => {
            (tA(P.bB.CARD), null != u) ? u(t): tC()
        }, [tA, u, tC]);
    if (null == v) return null;
    let tH = (0, M.fq)(v);
    return (0, a.jsx)(g.L, {
        innerRef: I,
        onChange: tl,
        threshold: 0,
        children: (0, a.jsx)(A.vN3, {
            children: (0, a.jsxs)(m.sqX, {
                onClick: tN,
                onMouseDown: tf,
                onMouseEnter: tO,
                onMouseLeave: tI,
                className: c()(tu, {
                    [K.Zl]: !$ && 2 !== i,
                    [K.BN]: J,
                    [J ? K.Mn : K.YF]: Z,
                    [K.Rc]: !ti
                }, o),
                ref: I,
                "aria-label": v.name,
                children: [null != tm && (0, a.jsx)(m.LpS, {
                    text: tm,
                    disableColor: !0,
                    className: K.qS
                }), (0, a.jsx)(Q, {
                    guildId: l,
                    sku: v,
                    isCardHovered: Z,
                    variant: i,
                    trackCardClick: tA,
                    analyticsLocations: te,
                    analyticsContext: tt
                }), null != tH ? ti ? (0, a.jsx)(j.A, {
                    containerClassName: K.Vl,
                    foregroundImageClassName: K.wP,
                    cardImage: tH,
                    altText: v.name,
                    shape: "custom",
                    backgroundImageClassName: K.GC,
                    cardBackgroundImage: tR
                }) : (0, a.jsx)(G.t, {}) : (0, a.jsx)("div", {
                    className: K.t7,
                    children: (0, a.jsx)(A.qyI, {
                        color: "white",
                        size: "custom",
                        height: 80,
                        width: 80,
                        className: K.Cw
                    })
                }), 2 !== i ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: K.iZ,
                        style: {
                            background: tE
                        }
                    }), (0, a.jsxs)("div", {
                        className: K.zH,
                        children: [(0, a.jsx)("div", {
                            className: K.gn,
                            children: ti ? (0, a.jsxs)(a.Fragment, {
                                children: [null != t_ && (0, a.jsx)("img", {
                                    src: t_.toString(),
                                    alt: tg,
                                    className: K.ye
                                }), (0, a.jsx)(m.Text, {
                                    color: "always-white",
                                    variant: "text-md/medium",
                                    lineClamp: 1,
                                    children: v.name
                                })]
                            }) : (0, a.jsx)(G.r, {})
                        }), (0, a.jsx)("div", {
                            className: K.iQ,
                            children: ti ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(m.Text, {
                                    variant: "text-md/bold",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: (0, h.$g)(v.price?.amount ?? 0, v.price?.currency ?? W.Yr.USD)
                                }), null != v.orbsReward && v.orbsReward > 0 && (0, a.jsx)("div", {
                                    className: K.pt,
                                    children: (0, a.jsx)(m.Text, {
                                        variant: "text-sm/semibold",
                                        color: "currentColor",
                                        children: V.intl.format(V.t.GiVd2Q, {
                                            orbCount: v.orbsReward,
                                            orbIconHook: () => (0, a.jsx)(A.Cp8, {
                                                size: "xs",
                                                color: "currentColor"
                                            }, "orbs-icon")
                                        })
                                    })
                                })]
                            }) : (0, a.jsx)(G.r, {})
                        })]
                    }), (0, a.jsx)("div", {
                        className: K.li,
                        children: (0, a.jsxs)(A.e2v, {
                            wrap: !1,
                            fullWidth: !0,
                            children: [ts ? (0, a.jsx)(A.$nd, {
                                variant: "primary",
                                onMouseDown: tS,
                                onClick: t => {
                                    t.stopPropagation(), tA(P.bB.BUY_BUTTON), (0, U.a)(v, {
                                        isGift: !1
                                    }, {
                                        analyticsLocations: [...te, E.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON],
                                        guildId: l
                                    })
                                },
                                text: V.intl.format(V.t.Xp5WTn, {
                                    price: (0, h.$g)(v.price?.amount ?? 0, v.price?.currency ?? W.Yr.USD)
                                }),
                                fullWidth: !0
                            }) : (0, a.jsx)(T.m, {
                                text: V.intl.string(V.t.IqlPbQ),
                                children: (0, a.jsx)(A.$nd, {
                                    variant: "primary",
                                    onClick: t => {
                                        t.stopPropagation(), tA(P.bB.VIEW_DETAILS_BUTTON), tC()
                                    },
                                    text: V.intl.string(V.t.KLBTgF),
                                    fullWidth: !0
                                })
                            }), (0, a.jsx)(B.A, {
                                onGift: t => {
                                    t.stopPropagation(), tA(P.bB.GIFT_BUTTON), (0, U.a)(v, {
                                        isGift: !0
                                    }, {
                                        analyticsLocations: [...te, E.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
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