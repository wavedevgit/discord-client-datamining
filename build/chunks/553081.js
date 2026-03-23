/** chunk id: 553081 params = (module,exports,require) **/
n.d(t, {
    A: () => H
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
    A = n(611924),
    x = n(961250),
    p = n(320118),
    h = n(622543),
    T = n(576622),
    E = n(166403),
    f = n(954571),
    S = n(131168),
    C = n(482589),
    b = n(511484),
    N = n(322631),
    I = n(570627),
    v = n(568031),
    j = n(518491),
    y = n(965591),
    O = n(495022),
    R = n(157839),
    L = n(382694),
    P = n(60508),
    D = n(821158),
    M = n(235365),
    G = n(994763),
    k = n(788868),
    U = n(652215),
    w = n(985018),
    V = n(520089),
    B = n(288894);
let H = e => {
    let {
        userId: t
    } = e, n = I.m.useConfig({
        location: "PremiumSubscriberHome"
    }).enabled, l = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, x.Ay)()];
            null != t && e.push((0, T.A)(t)), await Promise.all(e)
        })
    }, [t]), s.useEffect(() => {
        $(!0)
    }, []), (0, C.j)(), (0, A.P)(g.b);
    let H = s.useRef(null),
        F = s.useRef(null),
        Y = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        {
            isReady: z,
            programReward: X,
            isEligible: W
        } = (0, p.F)({
            location: "PremiumSubscriberHome"
        }),
        {
            scrollTargetId: K,
            glowingPerkId: Z,
            scrollBlock: q,
            scrollInline: J
        } = s.useMemo(() => {
            let e = new URLSearchParams(l.search),
                t = e.get("perk"),
                n = e.get("section");
            return null != t ? {
                scrollTargetId: t,
                glowingPerkId: t,
                scrollBlock: "center",
                scrollInline: "center"
            } : null != n ? {
                scrollTargetId: n,
                scrollBlock: "start"
            } : {}
        }, [l.search]);
    (0, G.z)(K ?? "", null != K, q, J);
    let [Q, $] = s.useState(!1), ee = (0, S.p)(), et = s.useRef(null), [en, ei] = s.useState(!1), [es, el] = s.useState(!1), ea = null != ee && null != Y && Y.status === U.Dmq.CANCELED, er = (0, b.iU)(k.gD.PREMIUM_MONTH_TIER_2, ee, Y), eo = !es && ea, {
        analyticsLocations: ed
    } = (0, _.Ay)(m.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [ec, eu] = s.useState(!1);
    return null != (0, o.bG)([h.A], () => null != t ? h.A.getUserProfile(t) : null) && (z || null != X) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.GtU, {
            className: a()(V.xW, {
                [V.J4]: n
            }),
            ref: H,
            children: [(0, i.jsx)(c.hLv, {
                color: "nitro-pink",
                className: a()(V.kL, V.Gd),
                offsetBottom: .8 * !!n,
                children: (0, i.jsxs)(_.f5, {
                    value: ed,
                    children: [(0, i.jsx)(d.L, {
                        innerRef: et,
                        onChange: e => el(e),
                        threshold: .1,
                        active: !0,
                        children: (0, i.jsx)(j.A, {
                            buttonVisibilityRef: et,
                            className: V.v1,
                            enablePremiumBrandRefresh: !0,
                            userDiscountOffer: ee,
                            discountedPrice: er
                        })
                    }), n && (0, i.jsx)(L.A, {
                        glowingPerkId: Z
                    }), !n && (0, i.jsx)(R.A, {
                        variant: N.cJ.WHATS_NEW,
                        className: V.Iw,
                        noBackground: !0,
                        leftAlignHeaders: !0
                    }), null != X && W && (0, i.jsx)(M.A, {
                        location: m.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
                    }), n && (0, i.jsx)(O.A, {
                        glowingPerkId: Z
                    }), !n && (0, i.jsx)(R.A, {
                        className: V.xU,
                        variant: N.cJ.PERKS_DISCOVERABILITY,
                        noBackground: !0,
                        leftAlignHeaders: !0,
                        showAllPerksButton: (0, i.jsx)(D.A, {
                            setIsAllPerksVisible: ei,
                            previousComponent: N.A2.HOME
                        })
                    }), (0, i.jsx)(v.A, {
                        className: V.Zy,
                        location: m.A.PREMIUM_MARKETING_GIFT_SECTION,
                        analyticsLocation: {
                            page: U.liQ.NITRO_HOME,
                            section: U.JJy.GIFT_BANNER
                        }
                    }), (0, i.jsx)("div", {
                        className: V.hz
                    }), (0, i.jsx)(d.L, {
                        innerRef: F,
                        onChange: e => {
                            e && !ec && (f.default.track(U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: ed
                            }), eu(!0))
                        },
                        children: (0, i.jsx)("div", {
                            ref: F,
                            className: V._Z
                        })
                    }), (0, i.jsx)("img", {
                        src: B,
                        className: V.Kw,
                        width: 112,
                        height: 85,
                        alt: w.intl.string(w.t.X4IxWL)
                    })]
                })
            }), ea && null != er && (0, i.jsx)(y.A, {
                isVisible: eo && Q,
                premiumSubscription: Y,
                churnDiscountOffer: ee,
                discountedPrice: er
            })]
        }), !n && (0, i.jsx)(P.A, {
            isAllPerksVisible: en,
            setIsAllPerksVisible: ei,
            previousComponent: N.A2.HOME,
            enablePremiumBrandRefresh: !0
        })]
    }) : (0, i.jsx)("div", {
        className: a()(V.kL, V.Lq),
        children: (0, i.jsx)(c.y$y, {})
    })
}