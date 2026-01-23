/** Chunk was on web.js **/
/** chunk id: 600487, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => q
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(582754),
    u = n(397927),
    d = n(736653),
    f = n(775602),
    p = n(793574),
    _ = n(688810),
    h = n(726649),
    m = n(611924),
    g = n(166403),
    E = n(816733),
    y = n(954571),
    b = n(927578),
    O = n(40185),
    v = n(804412),
    A = n(170887),
    I = n(422936),
    S = n(234419),
    T = n(130946),
    C = n(407775),
    N = n(501007),
    w = n(26010),
    R = n(54009),
    P = n(252711),
    D = n(584767),
    x = n(191430),
    L = n(475805),
    j = n(564230),
    M = n(974005),
    k = n(305714),
    U = n(658137),
    G = n(694195),
    V = n(716442),
    F = n(704877),
    B = n(788868),
    H = n(652215),
    Y = n(818348),
    W = n(549447),
    K = n(66283),
    z = n(122402);
let q = () => {
    (0, m.P)(h.b);
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(null),
        a = i.useRef(null),
        q = i.useRef(null),
        Z = i.useRef(null),
        X = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        Q = (0, d.Ay)(),
        J = (0, c.Mw)(Q),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [ea, es] = i.useState(!1),
        [eo, el] = i.useState(!1),
        ec = (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        eu = null != ec ? (0, b.EL)(ec) : null,
        ed = null != eu ? b.Ay.getSkuIdForPlan(eu.planId) : null,
        ef = null !== ed && ed !== B.pe.TIER_2 ? B.pe.TIER_2 : null,
        ep = (0, O.cg)(),
        e_ = null != ep && ep,
        {
            analyticsLocations: eh
        } = (0, _.Ay)(p.A.PREMIUM_MARKETING),
        em = (0, A.A)({
            location: "PremiumMarketing"
        }),
        eg = !$ && !er && (em || !et);
    i.useEffect(() => {
        el(!0)
    }, []);
    let eE = [V.k.HOME, V.k.WHATS_NEW, V.k.BEST_OF_NITRO, V.k.PLANS, V.k.COMPARE],
        {
            navBarSections: ey,
            activeSectionId: eb
        } = (0, G.o)(eE),
        {
            home: eO,
            whatsNew: ev,
            bestOfNitro: eA,
            plans: eI,
            compare: eS
        } = ey,
        eT = em ? W : K,
        {
            variant: eC
        } = (0, v.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
        eN = (0, S.V)(),
        ew = (0, I.O)(),
        eR = E.A.getAlmostExpiringTrialOffers([B.pe.TIER_2]).length > 0 && null != eN && null != eN.expires_at && eN.trial_id !== B.Dw,
        eP = E.A.getAlmostExpiringDiscountOffers([B.pe.TIER_2]).length > 0 && null != ew && null != ew.expires_at,
        eD = eR ? eN.expires_at : eP ? ew.expires_at : null,
        ex = eC === v.CJ.HERO_COUNTDOWN && (eR || eP) && null != eD,
        eL = (0, r.jsxs)("div", {
            className: s()(eT.container, eT.responsiveContainer, {
                [eT.containerBackground]: em || J,
                [W.fadeInFromTop]: !X && em
            }),
            "data-cy": "tier-0-marketing-page",
            children: [em && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(R.A, {
                    className: s()(W.topOfPageGradient, {
                        [W.topOfPageGradientWithCountdown]: ex
                    })
                }), (0, r.jsx)(F.A, {
                    navBarSections: ey,
                    activeSectionId: eb
                })]
            }), !em && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: K.heroHeaderSideGradient
                }), (0, r.jsx)("img", {
                    src: z,
                    className: K.heroHeaderBackgroundStars,
                    alt: ""
                })]
            }), (0, r.jsxs)("div", {
                className: eT.sectionsContainer,
                children: [(0, r.jsx)("div", {
                    className: eT.heroHeadingContainer,
                    ref: eO.ref,
                    children: (0, r.jsx)(l.L, {
                        innerRef: a,
                        onChange: e => ee(e),
                        threshold: 0,
                        active: !0,
                        children: em ? (0, r.jsx)(L.A, {
                            ref: a,
                            subscriptionTier: ef,
                            isEligibleForBogoPromotion: ep,
                            offerExpiresAt: ex ? eD : null
                        }) : (0, r.jsx)(U.A, {
                            ref: a,
                            subscriptionTier: ef,
                            isDarkMode: J,
                            isEligibleForBogoPromotion: ep,
                            videoRef: t
                        })
                    })
                }), ep && (0, r.jsx)("div", {
                    className: eT.promoBannerContainer,
                    children: (0, r.jsx)(T.A, {
                        variant: T.c.APPLICATION_NITRO_HOME
                    })
                }), (0, r.jsx)("div", {
                    className: eT.whatsNewSectionContainer,
                    ref: ev.ref,
                    children: (0, r.jsx)(w.Ct, {
                        shouldLoadVideo: eo,
                        isReducedMotion: X,
                        enablePremiumBrandRefreshDesign: em
                    })
                }), (0, r.jsx)("div", {
                    className: eT.bestOfNitroSectionContainer,
                    ref: eA.ref,
                    children: (0, r.jsx)(w.oO, {
                        shouldLoadVideo: eo,
                        isReducedMotion: X,
                        enablePremiumBrandRefreshDesign: em
                    })
                }), (0, r.jsx)("div", {
                    className: eT.premiumTierCardsContainer,
                    ref: eI.ref,
                    children: (0, r.jsx)(l.L, {
                        innerRef: n,
                        onChange: e => ei(e),
                        threshold: .1,
                        active: !0,
                        children: em ? (0, r.jsx)(C.hy, {
                            innerRef: n
                        }) : (0, r.jsx)(N.jP, {
                            innerRef: n,
                            hasActiveTier2PremiumPromotion: e_
                        })
                    })
                }), (0, r.jsx)("div", {
                    className: eT.planComparisonTableContainer,
                    ref: eS.ref,
                    children: em ? (0, r.jsx)(M.A, {}) : (0, r.jsx)(D.A, {})
                })]
            }), !em && (0, r.jsx)(P.A, {
                isVisible: eg && eo,
                subscriptionTier: ef,
                isApplicationHome: !0,
                isEligibleForBogoPromotion: ep
            }), (0, r.jsx)(l.L, {
                innerRef: q,
                onChange: e => {
                    e && !ea && (y.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: eh
                    }), es(!0))
                },
                children: (0, r.jsx)("div", {
                    ref: q,
                    className: eT.bottomOfPageVisibilitySensor
                })
            }), (0, r.jsx)(l.L, {
                innerRef: Z,
                onChange: e => {
                    en(e)
                },
                children: em ? (0, r.jsx)(x.A, {
                    ref: Z
                }) : (0, r.jsx)(k.A, {
                    ref: Z,
                    isFooterVisible: et,
                    isDarkMode: J,
                    isReducedMotion: X,
                    subscriptionTier: ef
                })
            }), em && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(j.A, {
                    isVisible: eg && eo,
                    subscriptionTier: ef,
                    isEligibleForBogoPromotion: ep
                }), (0, r.jsx)(R.A, {
                    className: W.bottomOfPageGradient
                })]
            })]
        });
    return (0, r.jsx)(u.NPJ, {
        theme: em ? Y.NJ.DARKER : Q,
        children: t => (0, r.jsx)(u.GtU, {
            className: s()(eT.scroller, t),
            ref: e,
            children: eL
        })
    })
}