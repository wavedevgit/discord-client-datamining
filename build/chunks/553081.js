/** chunk id: 553081 params = (module,exports,require) **/
n.d(t, {
    A: () => V,
    W: () => w
}), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(873263),
    c = n(311907),
    o = n(230109),
    d = n(397927),
    u = n(73153),
    _ = n(793574),
    m = n(688810),
    p = n(726649),
    A = n(611924),
    g = n(961250),
    x = n(320118),
    h = n(622543),
    f = n(576622),
    b = n(166403),
    N = n(954571),
    R = n(881489),
    C = n(131168),
    v = n(482589),
    I = n(511484),
    E = n(935956),
    j = n(568031),
    T = n(518491),
    y = n(965591),
    O = n(495022),
    P = n(382694),
    S = n(235365),
    M = n(994763),
    D = n(788868),
    L = n(652215),
    U = n(985018),
    k = n(904286),
    B = n(288894);
let w = "perk",
    V = e => {
        let {
            userId: t
        } = e, n = (0, R.ds)(), a = (0, l.zy)();
        r.useEffect(() => {
            u.h.wait(async () => {
                let e = [(0, g.Ay)()];
                null != t && e.push((0, f.A)(t)), await Promise.all(e)
            })
        }, [t]), r.useEffect(() => {
            Z(!0)
        }, []), (0, v.j)(), (0, A.P)(p.b);
        let V = r.useRef(null),
            G = r.useRef(null),
            H = (0, c.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
            {
                isReady: F,
                programReward: W,
                isEligible: z
            } = (0, x.F)({
                location: "PremiumSubscriberHome"
            }),
            {
                scrollTargetId: Y,
                glowingSectionId: X,
                glowingPerkId: K,
                scrollBlock: q,
                scrollInline: $
            } = r.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get(w),
                    n = e.get("section");
                return null != t ? {
                    scrollTargetId: t,
                    glowingPerkId: t,
                    scrollBlock: "center",
                    scrollInline: "center"
                } : null != n ? {
                    scrollTargetId: n,
                    glowingSectionId: n,
                    scrollBlock: "start"
                } : {}
            }, [a.search]);
        (0, M.z)(Y ?? "", null != Y, q, $);
        let [Q, Z] = r.useState(!1), J = (0, C.p)(), ee = r.useRef(null), [et, en] = r.useState(!1), ei = null != J && null != H && H.status === L.Dmq.CANCELED, er = (0, I.iU)(D.gD.PREMIUM_MONTH_TIER_2, J, H), ea = !et && ei, {
            analyticsLocations: es
        } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [el, ec] = r.useState(!1);
        return null != (0, c.bG)([h.A], () => null != t ? h.A.getUserProfile(t) : null) && (F || null != W) ? (0, i.jsxs)(d.GtU, {
            className: k.xW,
            ref: V,
            children: [(0, i.jsx)(d.hLv, {
                color: "nitro-pink",
                className: s()(k.kL, k.Gd),
                offsetBottom: n ? .55 : .8,
                children: (0, i.jsxs)(m.f5, {
                    value: es,
                    children: [(0, i.jsx)(o.L, {
                        innerRef: ee,
                        onChange: e => en(e),
                        threshold: .1,
                        active: !0,
                        children: (0, i.jsx)(T.A, {
                            buttonVisibilityRef: ee,
                            className: k.v1,
                            enablePremiumBrandRefresh: !0,
                            userDiscountOffer: J,
                            discountedPrice: er
                        })
                    }), (0, i.jsx)(P.A, {
                        glowingPerkId: K
                    }), (0, i.jsx)(E.A, {
                        glowingSectionId: X
                    }), null != W && z && (0, i.jsx)(S.A, {
                        location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
                    }), (0, i.jsx)(O.A, {
                        glowingPerkId: K
                    }), (0, i.jsx)(j.A, {
                        className: k.Zy,
                        location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                        analyticsLocation: {
                            page: L.liQ.NITRO_HOME,
                            section: L.JJy.GIFT_BANNER
                        }
                    }), (0, i.jsx)("div", {
                        className: k.hz
                    }), (0, i.jsx)(o.L, {
                        innerRef: G,
                        onChange: e => {
                            e && !el && (N.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: es
                            }), ec(!0))
                        },
                        children: (0, i.jsx)("div", {
                            ref: G,
                            className: k._Z
                        })
                    }), (0, i.jsx)("img", {
                        src: B,
                        className: k.Kw,
                        width: 112,
                        height: 85,
                        alt: U.intl.string(U.t.X4IxWL)
                    })]
                })
            }), ei && null != er && (0, i.jsx)(y.A, {
                isVisible: ea && Q,
                premiumSubscription: H,
                churnDiscountOffer: J,
                discountedPrice: er
            })]
        }) : (0, i.jsx)("div", {
            className: s()(k.kL, k.Lq),
            children: (0, i.jsx)(d.y$y, {})
        })
    }