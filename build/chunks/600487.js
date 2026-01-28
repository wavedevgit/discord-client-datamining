/** Chunk was on 5606 **/
/** chunk id: 600487, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(397927),
    p = n(736653),
    _ = n(775602),
    m = n(793574),
    g = n(688810),
    f = n(726649),
    b = n(611924),
    h = n(166403),
    A = n(816733),
    E = n(954571),
    x = n(927578),
    O = n(40185),
    C = n(804412),
    y = n(170887),
    j = n(422936),
    T = n(234419),
    v = n(130946),
    S = n(407775),
    I = n(501007),
    N = n(26010),
    P = n(54009),
    R = n(252711),
    D = n(584767),
    w = n(191430),
    L = n(475805),
    M = n(564230),
    G = n(974005),
    U = n(305714),
    k = n(658137),
    H = n(57978),
    B = n(694195),
    V = n(716442),
    F = n(927258),
    Y = n(788868),
    W = n(652215),
    K = n(818348),
    z = n(549447),
    Z = n(66283),
    q = n(122402);
let X = () => {
    let e = (0, a.zy)();
    (0, b.P)(f.b);
    let t = i.useRef(null),
        n = i.useRef(null),
        l = i.useRef(null),
        X = i.useRef(null),
        J = i.useRef(null),
        Q = i.useRef(null),
        $ = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        ee = (0, p.Ay)(),
        et = (0, d.Mw)(ee),
        [en, er] = i.useState(!1),
        [ei, el] = i.useState(!1),
        [es, ea] = i.useState(!1),
        [eo, ec] = i.useState(!1),
        [ed, eu] = i.useState(!1),
        ep = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        e_ = null != ep ? (0, x.EL)(ep) : null,
        em = null != e_ ? x.Ay.getSkuIdForPlan(e_.planId) : null,
        eg = null !== em && em !== Y.pe.TIER_2 ? Y.pe.TIER_2 : null,
        ef = (0, O.cg)(),
        eb = null != ef && ef,
        {
            analyticsLocations: eh
        } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        eA = (0, y.A)({
            location: "PremiumMarketing"
        }),
        eE = !en && !es && (eA || !ei);
    i.useEffect(() => {
        eu(!0)
    }, []), i.useEffect(() => {
        if (!ed || "orbs" !== new URLSearchParams(e.search).get("section")) return;
        let t = requestAnimationFrame(() => {
            let e = document.getElementById(H.NI.ORB_REWARDS);
            null != e && e.scrollIntoView({
                behavior: $ ? "auto" : "smooth",
                block: "start"
            })
        });
        return () => cancelAnimationFrame(t)
    }, [e.search, ed, $]);
    let ex = [V.k.HOME, V.k.WHATS_NEW, V.k.BEST_OF_NITRO, V.k.PLANS, V.k.COMPARE],
        {
            navBarSections: eO,
            activeSectionId: eC
        } = (0, B.o)(ex),
        {
            home: ey,
            whatsNew: ej,
            bestOfNitro: eT,
            plans: ev,
            compare: eS
        } = eO,
        eI = eA ? z : Z,
        {
            variant: eN
        } = (0, C.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
        eP = (0, T.V)(),
        eR = (0, j.O)(),
        eD = A.A.getAlmostExpiringTrialOffers([Y.pe.TIER_2]).length > 0 && null != eP && null != eP.expires_at && eP.trial_id !== Y.Dw,
        ew = A.A.getAlmostExpiringDiscountOffers([Y.pe.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
        eL = eD ? eP.expires_at : ew ? eR.expires_at : null,
        eM = eN === C.CJ.HERO_COUNTDOWN && (eD || ew) && null != eL,
        eG = (0, r.jsxs)("div", {
            className: s()(eI.container, eI.responsiveContainer, {
                [eI.containerBackground]: eA || et,
                [z.fadeInFromTop]: !$ && eA
            }),
            "data-cy": "tier-0-marketing-page",
            children: [eA && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(P.A, {
                    className: s()(z.topOfPageGradient, {
                        [z.topOfPageGradientWithCountdown]: eM
                    })
                }), (0, r.jsx)(F.A, {
                    navBarSections: eO,
                    activeSectionId: eC
                })]
            }), !eA && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: Z.heroHeaderSideGradient
                }), (0, r.jsx)("img", {
                    src: q,
                    className: Z.heroHeaderBackgroundStars,
                    alt: ""
                })]
            }), (0, r.jsxs)("div", {
                className: eI.sectionsContainer,
                children: [(0, r.jsx)("div", {
                    className: eI.heroHeadingContainer,
                    ref: ey.ref,
                    children: (0, r.jsx)(c.L, {
                        innerRef: X,
                        onChange: e => er(e),
                        threshold: 0,
                        active: !0,
                        children: eA ? (0, r.jsx)(L.A, {
                            ref: X,
                            subscriptionTier: eg,
                            isEligibleForBogoPromotion: ef,
                            offerExpiresAt: eM ? eL : null
                        }) : (0, r.jsx)(k.A, {
                            ref: X,
                            subscriptionTier: eg,
                            isDarkMode: et,
                            isEligibleForBogoPromotion: ef,
                            videoRef: n
                        })
                    })
                }), ef && (0, r.jsx)("div", {
                    className: eI.promoBannerContainer,
                    children: (0, r.jsx)(v.A, {
                        variant: v.c.APPLICATION_NITRO_HOME
                    })
                }), (0, r.jsx)("div", {
                    className: eI.whatsNewSectionContainer,
                    ref: ej.ref,
                    children: (0, r.jsx)(N.Ct, {
                        shouldLoadVideo: ed,
                        isReducedMotion: $,
                        enablePremiumBrandRefreshDesign: eA
                    })
                }), (0, r.jsx)("div", {
                    className: eI.bestOfNitroSectionContainer,
                    ref: eT.ref,
                    children: (0, r.jsx)(N.oO, {
                        shouldLoadVideo: ed,
                        isReducedMotion: $,
                        enablePremiumBrandRefreshDesign: eA
                    })
                }), (0, r.jsx)("div", {
                    className: eI.premiumTierCardsContainer,
                    ref: ev.ref,
                    children: (0, r.jsx)(c.L, {
                        innerRef: l,
                        onChange: e => ea(e),
                        threshold: .1,
                        active: !0,
                        children: eA ? (0, r.jsx)(S.hy, {
                            innerRef: l
                        }) : (0, r.jsx)(I.jP, {
                            innerRef: l,
                            hasActiveTier2PremiumPromotion: eb
                        })
                    })
                }), (0, r.jsx)("div", {
                    className: eI.planComparisonTableContainer,
                    ref: eS.ref,
                    children: eA ? (0, r.jsx)(G.A, {}) : (0, r.jsx)(D.A, {})
                })]
            }), !eA && (0, r.jsx)(R.A, {
                isVisible: eE && ed,
                subscriptionTier: eg,
                isApplicationHome: !0,
                isEligibleForBogoPromotion: ef
            }), (0, r.jsx)(c.L, {
                innerRef: J,
                onChange: e => {
                    e && !eo && (E.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: eh
                    }), ec(!0))
                },
                children: (0, r.jsx)("div", {
                    ref: J,
                    className: eI.bottomOfPageVisibilitySensor
                })
            }), (0, r.jsx)(c.L, {
                innerRef: Q,
                onChange: e => {
                    el(e)
                },
                children: eA ? (0, r.jsx)(w.A, {
                    ref: Q
                }) : (0, r.jsx)(U.A, {
                    ref: Q,
                    isFooterVisible: ei,
                    isDarkMode: et,
                    isReducedMotion: $,
                    subscriptionTier: eg
                })
            }), eA && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(M.A, {
                    isVisible: eE && ed,
                    subscriptionTier: eg,
                    isEligibleForBogoPromotion: ef
                }), (0, r.jsx)(P.A, {
                    className: z.bottomOfPageGradient
                })]
            })]
        });
    return (0, r.jsx)(u.NPJ, {
        theme: eA ? K.NJ.DARKER : ee,
        children: e => (0, r.jsx)(u.GtU, {
            className: s()(eI.scroller, e),
            ref: t,
            children: eG
        })
    })
}