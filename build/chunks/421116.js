/** chunk id: 421116 params = (module,exports,require) **/
n.d(t, {
    A: () => Z
}), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(582754),
    u = n(397927),
    _ = n(736653),
    g = n(775602),
    m = n(793574),
    A = n(688810),
    h = n(726649),
    p = n(611924),
    x = n(649032),
    E = n(26508),
    T = n(166403),
    S = n(954571),
    C = n(927578),
    f = n(40185),
    I = n(170887),
    b = n(994763),
    N = n(130946),
    v = n(407775),
    j = n(501007),
    O = n(817267),
    R = n(736455),
    y = n(690737),
    P = n(843685),
    L = n(509388),
    D = n(400292),
    G = n(536195),
    M = n(388116),
    U = n(577174),
    k = n(127493),
    V = n(23003),
    w = n(16019),
    H = n(825075),
    B = n(768229),
    F = n(788868),
    Y = n(652215),
    z = n(818348),
    X = n(511030),
    W = n(157650),
    K = n(122402);
let Z = () => {
    let e = (0, r.zy)();
    (0, p.P)(h.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        l = s.useRef(null),
        Z = s.useRef(null),
        q = s.useRef(null),
        J = s.useRef(null),
        Q = (0, o.bG)([g.A], () => g.A.useReducedMotion),
        $ = (0, _.Ay)(),
        ee = (0, c.Mw)($),
        [et, en] = s.useState(!1),
        [ei, es] = s.useState(!1),
        [el, ea] = s.useState(!1),
        [er, eo] = s.useState(!1),
        [ed, ec] = s.useState(!1),
        eu = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        e_ = null != eu ? (0, C.EL)(eu) : null,
        eg = null != e_ ? C.Ay.getSkuIdForPlan(e_.planId) : null,
        em = null !== eg && eg !== F.pe.TIER_2 ? F.pe.TIER_2 : null,
        eA = (0, f.cg)(),
        eh = eA ?? !1,
        {
            analyticsLocations: ep
        } = (0, A.Ay)(m.A.PREMIUM_MARKETING),
        ex = (0, I.A)({
            location: "PremiumMarketing"
        }),
        eE = !et && !el && (ex || !ei);
    s.useEffect(() => {
        ec(!0)
    }, []);
    let eT = (0, E.DK)(x.W.NITRO, "PremiumMarketingHome"),
        eS = s.useMemo(() => !!eT && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, eT]);
    (0, b.z)(V.NI.ORB_REWARDS, eS);
    let eC = [R.k.HOME, R.k.WHATS_NEW, R.k.BEST_OF_NITRO, R.k.PLANS, R.k.COMPARE],
        {
            navBarSections: ef,
            activeSectionId: eI
        } = (0, B.o)(eC),
        {
            home: eb,
            whatsNew: eN,
            bestOfNitro: ev,
            plans: ej,
            compare: eO
        } = ef,
        eR = ex ? X : W,
        ey = (0, i.jsxs)("div", {
            className: a()(eR.container, eR.responsiveContainer, {
                [eR.containerBackground]: ex || ee,
                [X.fadeInFromTop]: !Q && ex
            }),
            "data-cy": "tier-0-marketing-page",
            children: [ex && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(O.A, {
                    className: X.topOfPageGradient
                }), (0, i.jsx)(U.A, {
                    navBarSections: ef,
                    activeSectionId: eI
                })]
            }), !ex && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: W.heroHeaderSideGradient
                }), (0, i.jsx)("img", {
                    src: K,
                    className: W.heroHeaderBackgroundStars,
                    alt: ""
                })]
            }), (0, i.jsxs)("div", {
                className: eR.sectionsContainer,
                children: [(0, i.jsx)("div", {
                    className: eR.heroHeadingContainer,
                    ref: eb.ref,
                    children: (0, i.jsx)(d.L, {
                        innerRef: Z,
                        onChange: e => en(e),
                        threshold: 0,
                        active: !0,
                        children: ex ? (0, i.jsx)(w.A, {
                            ref: Z,
                            subscriptionTier: em,
                            isEligibleForBogoPromotion: eA
                        }) : (0, i.jsx)(H.A, {
                            ref: Z,
                            subscriptionTier: em,
                            isDarkMode: ee,
                            isEligibleForBogoPromotion: eA,
                            videoRef: n
                        })
                    })
                }), eA && (0, i.jsx)("div", {
                    className: eR.promoBannerContainer,
                    children: (0, i.jsx)(N.A, {
                        variant: N.c.APPLICATION_NITRO_HOME
                    })
                }), (0, i.jsx)("div", {
                    className: eR.whatsNewSectionContainer,
                    ref: eN.ref,
                    children: (0, i.jsx)(k.Ct, {
                        shouldLoadVideo: ed,
                        isReducedMotion: Q,
                        enablePremiumBrandRefreshDesign: ex
                    })
                }), (0, i.jsx)("div", {
                    className: eR.bestOfNitroSectionContainer,
                    ref: ev.ref,
                    children: (0, i.jsx)(k.oO, {
                        shouldLoadVideo: ed,
                        isReducedMotion: Q,
                        enablePremiumBrandRefreshDesign: ex
                    })
                }), (0, i.jsx)("div", {
                    className: eR.premiumTierCardsContainer,
                    ref: ej.ref,
                    children: (0, i.jsx)(d.L, {
                        innerRef: l,
                        onChange: e => ea(e),
                        threshold: .1,
                        active: !0,
                        children: ex ? (0, i.jsx)(v.hy, {
                            innerRef: l
                        }) : (0, i.jsx)(j.jP, {
                            innerRef: l,
                            hasActiveTier2PremiumPromotion: eh
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: eR.planComparisonTableContainer,
                    ref: eO.ref,
                    children: ex ? (0, i.jsx)(G.A, {}) : (0, i.jsx)(P.A, {})
                })]
            }), !ex && (0, i.jsx)(y.A, {
                isVisible: eE && ed,
                subscriptionTier: em,
                isApplicationHome: !0,
                isEligibleForBogoPromotion: eA
            }), (0, i.jsx)(d.L, {
                innerRef: q,
                onChange: e => {
                    e && !er && (S.default.track(Y.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: ep
                    }), eo(!0))
                },
                children: (0, i.jsx)("div", {
                    ref: q,
                    className: eR.bottomOfPageVisibilitySensor
                })
            }), (0, i.jsx)(d.L, {
                innerRef: J,
                onChange: e => {
                    es(e)
                },
                children: ex ? (0, i.jsx)(L.A, {
                    ref: J
                }) : (0, i.jsx)(M.A, {
                    ref: J,
                    isFooterVisible: ei,
                    isDarkMode: ee,
                    isReducedMotion: Q,
                    subscriptionTier: em
                })
            }), ex && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(D.A, {
                    isVisible: eE && ed,
                    subscriptionTier: em,
                    isEligibleForBogoPromotion: eA
                }), (0, i.jsx)(O.A, {
                    className: X.bottomOfPageGradient
                })]
            })]
        });
    return (0, i.jsx)(u.NPJ, {
        theme: ex ? z.NJ.DARKER : $,
        children: e => (0, i.jsx)(u.GtU, {
            className: a()(eR.scroller, e),
            ref: t,
            children: ey
        })
    })
}