/** chunk id: 553081 params = (module,exports,require) **/
n.d(t, {
    A: () => k
}), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(873263),
    o = n(311907),
    d = n(230109),
    c = n(397927),
    u = n(73153),
    m = n(793574),
    _ = n(688810),
    g = n(726649),
    x = n(611924),
    A = n(961250),
    h = n(320118),
    p = n(622543),
    f = n(576622),
    T = n(166403),
    S = n(954571),
    E = n(131168),
    b = n(482589),
    C = n(511484),
    v = n(568031),
    N = n(518491),
    I = n(965591),
    j = n(495022),
    y = n(382694),
    O = n(235365),
    R = n(994763),
    L = n(788868),
    P = n(652215),
    D = n(985018),
    G = n(520089),
    M = n(288894);
let k = e => {
    let {
        userId: t
    } = e, n = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, A.Ay)()];
            null != t && e.push((0, f.A)(t)), await Promise.all(e)
        })
    }, [t]), s.useEffect(() => {
        K(!0)
    }, []), (0, b.j)(), (0, x.P)(g.b);
    let l = s.useRef(null),
        k = s.useRef(null),
        U = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        {
            isReady: w,
            programReward: V,
            isEligible: B
        } = (0, h.F)({
            location: "PremiumSubscriberHome"
        }),
        {
            scrollTargetId: F,
            glowingPerkId: H,
            scrollBlock: z,
            scrollInline: Y
        } = s.useMemo(() => {
            let e = new URLSearchParams(n.search),
                t = e.get("perk"),
                i = e.get("section");
            return null != t ? {
                scrollTargetId: t,
                glowingPerkId: t,
                scrollBlock: "center",
                scrollInline: "center"
            } : null != i ? {
                scrollTargetId: i,
                scrollBlock: "start"
            } : {}
        }, [n.search]);
    (0, R.z)(F ?? "", null != F, z, Y);
    let [X, K] = s.useState(!1), W = (0, E.p)(), Z = s.useRef(null), [q, Q] = s.useState(!1), J = null != W && null != U && U.status === P.Dmq.CANCELED, $ = (0, C.iU)(L.gD.PREMIUM_MONTH_TIER_2, W, U), ee = !q && J, {
        analyticsLocations: et
    } = (0, _.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [en, ei] = s.useState(!1);
    return null != (0, o.bG)([p.A], () => null != t ? p.A.getUserProfile(t) : null) && (w || null != V) ? (0, i.jsxs)(c.GtU, {
        className: G.xW,
        ref: l,
        children: [(0, i.jsx)(c.hLv, {
            color: "nitro-pink",
            className: a()(G.kL, G.Gd),
            offsetBottom: .8,
            children: (0, i.jsxs)(_.f5, {
                value: et,
                children: [(0, i.jsx)(d.L, {
                    innerRef: Z,
                    onChange: e => Q(e),
                    threshold: .1,
                    active: !0,
                    children: (0, i.jsx)(N.A, {
                        buttonVisibilityRef: Z,
                        className: G.v1,
                        enablePremiumBrandRefresh: !0,
                        userDiscountOffer: W,
                        discountedPrice: $
                    })
                }), (0, i.jsx)(y.A, {
                    glowingPerkId: H
                }), null != V && B && (0, i.jsx)(O.A, {
                    location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
                }), (0, i.jsx)(j.A, {
                    glowingPerkId: H
                }), (0, i.jsx)(v.A, {
                    className: G.Zy,
                    location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                    analyticsLocation: {
                        page: P.liQ.NITRO_HOME,
                        section: P.JJy.GIFT_BANNER
                    }
                }), (0, i.jsx)("div", {
                    className: G.hz
                }), (0, i.jsx)(d.L, {
                    innerRef: k,
                    onChange: e => {
                        e && !en && (S.default.track(P.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            location_stack: et
                        }), ei(!0))
                    },
                    children: (0, i.jsx)("div", {
                        ref: k,
                        className: G._Z
                    })
                }), (0, i.jsx)("img", {
                    src: M,
                    className: G.Kw,
                    width: 112,
                    height: 85,
                    alt: D.intl.string(D.t.X4IxWL)
                })]
            })
        }), J && null != $ && (0, i.jsx)(I.A, {
            isVisible: ee && X,
            premiumSubscription: U,
            churnDiscountOffer: W,
            discountedPrice: $
        })]
    }) : (0, i.jsx)("div", {
        className: a()(G.kL, G.Lq),
        children: (0, i.jsx)(c.y$y, {})
    })
}