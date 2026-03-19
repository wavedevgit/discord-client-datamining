/** chunk id: 421116 params = (module,exports,require) **/
n.d(t, {
    A: () => V
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
    _ = n(793574),
    m = n(688810),
    g = n(726649),
    A = n(611924),
    x = n(649032),
    h = n(26508),
    p = n(166403),
    T = n(954571),
    E = n(927578),
    S = n(40185),
    C = n(994763),
    f = n(130946),
    N = n(407775),
    I = n(817267),
    b = n(736455),
    v = n(509388),
    j = n(400292),
    y = n(536195),
    O = n(577174),
    R = n(127493),
    L = n(23003),
    D = n(16019),
    P = n(768229),
    G = n(788868),
    M = n(652215),
    U = n(818348),
    k = n(511030);
let V = () => {
    let e = (0, r.zy)();
    (0, A.P)(g.b);
    let t = s.useRef(null),
        n = s.useRef(null),
        l = s.useRef(null),
        V = s.useRef(null),
        w = s.useRef(null),
        B = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        [H, F] = s.useState(!1),
        [Y, z] = s.useState(!1),
        [X, W] = s.useState(!1),
        [K, Z] = s.useState(!1),
        q = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        J = null != q ? (0, E.EL)(q) : null,
        Q = null != J ? E.Ay.getSkuIdForPlan(J.planId) : null,
        $ = null !== Q && Q !== G.pe.TIER_2 ? G.pe.TIER_2 : null,
        ee = (0, S.cg)(),
        {
            analyticsLocations: et
        } = (0, m.Ay)(_.A.PREMIUM_MARKETING);
    s.useEffect(() => {
        Z(!0)
    }, []);
    let en = (0, h.DK)(x.W.NITRO, "PremiumMarketingHome"),
        ei = s.useMemo(() => !!en && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, en]);
    (0, C.z)(L.NI.ORB_REWARDS, ei);
    let es = [b.k.HOME, b.k.WHATS_NEW, b.k.BEST_OF_NITRO, b.k.PLANS, b.k.COMPARE],
        {
            navBarSections: el,
            activeSectionId: ea
        } = (0, P.o)(es),
        {
            home: er,
            whatsNew: eo,
            bestOfNitro: ed,
            plans: ec,
            compare: eu
        } = el,
        e_ = (0, i.jsxs)("div", {
            className: a()(k.kL, k.Gd, k.iI, {
                [k.Hq]: !B
            }),
            "data-cy": "tier-0-marketing-page",
            children: [(0, i.jsx)(I.A, {
                className: k.yH
            }), (0, i.jsx)(O.A, {
                navBarSections: el,
                activeSectionId: ea
            }), (0, i.jsxs)("div", {
                className: k.Qr,
                children: [(0, i.jsx)("div", {
                    className: k.qY,
                    ref: er.ref,
                    children: (0, i.jsx)(d.L, {
                        innerRef: l,
                        onChange: e => F(e),
                        threshold: 0,
                        active: !0,
                        children: (0, i.jsx)(D.A, {
                            ref: l,
                            subscriptionTier: $,
                            isEligibleForBogoPromotion: ee
                        })
                    })
                }), ee && (0, i.jsx)("div", {
                    className: k.Hz,
                    children: (0, i.jsx)(f.A, {
                        variant: f.c.APPLICATION_NITRO_HOME
                    })
                }), (0, i.jsx)("div", {
                    className: k.So,
                    ref: eo.ref,
                    children: (0, i.jsx)(R.Ct, {
                        shouldLoadVideo: K,
                        isReducedMotion: B
                    })
                }), (0, i.jsx)("div", {
                    className: k.KQ,
                    ref: ed.ref,
                    children: (0, i.jsx)(R.oO, {
                        shouldLoadVideo: K,
                        isReducedMotion: B
                    })
                }), (0, i.jsx)("div", {
                    className: k.s5,
                    ref: ec.ref,
                    children: (0, i.jsx)(d.L, {
                        innerRef: n,
                        onChange: e => z(e),
                        threshold: .1,
                        active: !0,
                        children: (0, i.jsx)(N.hy, {
                            innerRef: n
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: k.aC,
                    ref: eu.ref,
                    children: (0, i.jsx)(y.A, {})
                })]
            }), (0, i.jsx)(d.L, {
                innerRef: V,
                onChange: e => {
                    e && !X && (T.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: et
                    }), W(!0))
                },
                children: (0, i.jsx)("div", {
                    ref: V,
                    className: k._Z
                })
            }), (0, i.jsx)(v.A, {
                ref: w
            }), (0, i.jsx)(j.A, {
                isVisible: !H && !Y && K,
                subscriptionTier: $,
                isEligibleForBogoPromotion: ee
            }), (0, i.jsx)(I.A, {
                className: k.MF
            })]
        });
    return (0, i.jsx)(c.NPJ, {
        theme: U.NJ.DARKER,
        children: e => (0, i.jsx)(c.GtU, {
            className: a()(k.XG, e),
            ref: t,
            children: e_
        })
    })
}