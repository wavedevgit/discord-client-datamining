/** chunk id: 421116 params = (module,exports,require) **/
n.d(t, {
    A: () => w
}), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(397927),
    u = n(775602),
    m = n(793574),
    _ = n(688810),
    g = n(726649),
    A = n(611924),
    x = n(649032),
    p = n(26508),
    h = n(166403),
    T = n(954571),
    E = n(927578),
    f = n(40185),
    S = n(994763),
    C = n(130946),
    b = n(407775),
    N = n(817267),
    I = n(736455),
    v = n(509388),
    j = n(400292),
    y = n(536195),
    O = n(577174),
    R = n(127493),
    L = n(23003),
    P = n(16019),
    D = n(768229),
    M = n(788868),
    G = n(652215),
    k = n(818348),
    U = n(511030);
let w = () => {
    let e = (0, r.zy)();
    (0, A.P)(g.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        l = s.useRef(null),
        w = s.useRef(null),
        V = s.useRef(null),
        B = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [H, F] = s.useState(!1),
        [Y, z] = s.useState(!1),
        [X, W] = s.useState(!1),
        [K, Z] = s.useState(!1),
        q = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        J = null != q ? (0, E.EL)(q) : null,
        Q = null != J ? E.Ay.getSkuIdForPlan(J.planId) : null,
        $ = null !== Q && Q !== M.pe.TIER_2 ? M.pe.TIER_2 : null,
        ee = (0, f.cg)(),
        {
            analyticsLocations: et
        } = (0, _.Ay)(m.A.PREMIUM_MARKETING);
    s.useEffect(() => {
        Z(!0)
    }, []);
    let en = (0, p.DK)(x.W.NITRO, "PremiumMarketingHome"),
        ei = s.useMemo(() => !!en && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, en]);
    (0, S.z)(L.NI.ORB_REWARDS, ei);
    let es = [I.k.HOME, I.k.WHATS_NEW, I.k.BEST_OF_NITRO, I.k.PLANS, I.k.COMPARE],
        {
            navBarSections: el,
            activeSectionId: ea
        } = (0, D.o)(es),
        {
            home: er,
            whatsNew: eo,
            bestOfNitro: ed,
            plans: ec,
            compare: eu
        } = el,
        em = (0, i.jsxs)("div", {
            className: a()(U.kL, U.Gd, U.iI, {
                [U.Hq]: !B
            }),
            "data-cy": "tier-0-marketing-page",
            children: [(0, i.jsx)(N.A, {
                className: U.yH
            }), (0, i.jsx)(O.A, {
                navBarSections: el,
                activeSectionId: ea
            }), (0, i.jsxs)("div", {
                className: U.Qr,
                children: [(0, i.jsx)("div", {
                    className: U.qY,
                    ref: er.ref,
                    children: (0, i.jsx)(d.L, {
                        innerRef: l,
                        onChange: e => F(e),
                        threshold: 0,
                        active: !0,
                        children: (0, i.jsx)(P.A, {
                            ref: l,
                            subscriptionTier: $,
                            isEligibleForBogoPromotion: ee
                        })
                    })
                }), ee && (0, i.jsx)("div", {
                    className: U.Hz,
                    children: (0, i.jsx)(C.A, {
                        variant: C.c.APPLICATION_NITRO_HOME
                    })
                }), (0, i.jsx)("div", {
                    className: U.So,
                    ref: eo.ref,
                    children: (0, i.jsx)(R.Ct, {
                        shouldLoadVideo: K,
                        isReducedMotion: B
                    })
                }), (0, i.jsx)("div", {
                    className: U.KQ,
                    ref: ed.ref,
                    children: (0, i.jsx)(R.oO, {
                        shouldLoadVideo: K,
                        isReducedMotion: B
                    })
                }), (0, i.jsx)("div", {
                    className: U.s5,
                    ref: ec.ref,
                    children: (0, i.jsx)(d.L, {
                        innerRef: n,
                        onChange: e => z(e),
                        threshold: .1,
                        active: !0,
                        children: (0, i.jsx)(b.hy, {
                            innerRef: n
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: U.aC,
                    ref: eu.ref,
                    children: (0, i.jsx)(y.A, {})
                })]
            }), (0, i.jsx)(d.L, {
                innerRef: w,
                onChange: e => {
                    e && !X && (T.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: et
                    }), W(!0))
                },
                children: (0, i.jsx)("div", {
                    ref: w,
                    className: U._Z
                })
            }), (0, i.jsx)(v.A, {
                ref: V
            }), (0, i.jsx)(j.A, {
                isVisible: !H && !Y && K,
                subscriptionTier: $,
                isEligibleForBogoPromotion: ee
            }), (0, i.jsx)(N.A, {
                className: U.MF
            })]
        });
    return (0, i.jsx)(c.NPJ, {
        theme: k.NJ.DARKER,
        children: e => (0, i.jsx)(c.GtU, {
            className: a()(U.XG, e),
            ref: t,
            children: em
        })
    })
}