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
    _ = n(793574),
    m = n(688810),
    g = n(726649),
    A = n(611924),
    h = n(961250),
    x = n(320118),
    p = n(622543),
    T = n(576622),
    E = n(166403),
    S = n(954571),
    C = n(131168),
    f = n(482589),
    b = n(511484),
    N = n(322631),
    I = n(570627),
    v = n(568031),
    j = n(518491),
    y = n(965591),
    R = n(495022),
    O = n(157839),
    P = n(382694),
    D = n(60508),
    L = n(821158),
    G = n(235365),
    M = n(994763),
    U = n(788868),
    k = n(652215),
    V = n(985018),
    w = n(520089),
    B = n(288894);
let H = e => {
    let {
        userId: t
    } = e, n = I.m.useConfig({
        location: "PremiumSubscriberHome"
    }).enabled, l = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, h.Ay)()];
            null != t && e.push((0, T.A)(t)), await Promise.all(e)
        })
    }, [t]), s.useEffect(() => {
        $(!0)
    }, []), (0, f.j)(), (0, A.P)(g.b);
    let H = s.useRef(null),
        F = s.useRef(null),
        Y = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        {
            isReady: z,
            programReward: X,
            isEligible: W
        } = (0, x.F)({
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
    (0, M.z)(K ?? "", null != K, q, J);
    let [Q, $] = s.useState(!1), ee = (0, C.p)(), et = s.useRef(null), [en, ei] = s.useState(!1), [es, el] = s.useState(!1), ea = null != ee && null != Y && Y.status === k.Dmq.CANCELED, er = (0, b.iU)(U.gD.PREMIUM_MONTH_TIER_2, ee, Y), eo = !es && ea, {
        analyticsLocations: ed
    } = (0, m.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [ec, eu] = s.useState(!1);
    return null != (0, o.bG)([p.A], () => null != t ? p.A.getUserProfile(t) : null) && (z || null != X) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.GtU, {
            className: a()(w.xW, {
                [w.J4]: n
            }),
            ref: H,
            children: [(0, i.jsx)(c.hLv, {
                color: "nitro-pink",
                className: a()(w.kL, w.Gd),
                offsetBottom: .8 * !!n,
                children: (0, i.jsxs)(m.f5, {
                    value: ed,
                    children: [(0, i.jsx)(d.L, {
                        innerRef: et,
                        onChange: e => el(e),
                        threshold: .1,
                        active: !0,
                        children: (0, i.jsx)(j.A, {
                            buttonVisibilityRef: et,
                            className: w.v1,
                            enablePremiumBrandRefresh: !0,
                            userDiscountOffer: ee,
                            discountedPrice: er
                        })
                    }), n && (0, i.jsx)(P.A, {
                        glowingPerkId: Z
                    }), !n && (0, i.jsx)(O.A, {
                        variant: N.cJ.WHATS_NEW,
                        className: w.Iw,
                        noBackground: !0,
                        leftAlignHeaders: !0
                    }), null != X && W && (0, i.jsx)(G.A, {
                        location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
                    }), n && (0, i.jsx)(R.A, {
                        glowingPerkId: Z
                    }), !n && (0, i.jsx)(O.A, {
                        className: w.xU,
                        variant: N.cJ.PERKS_DISCOVERABILITY,
                        noBackground: !0,
                        leftAlignHeaders: !0,
                        showAllPerksButton: (0, i.jsx)(L.A, {
                            setIsAllPerksVisible: ei,
                            previousComponent: N.A2.HOME
                        })
                    }), (0, i.jsx)(v.A, {
                        className: w.Zy,
                        location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                        analyticsLocation: {
                            page: k.liQ.NITRO_HOME,
                            section: k.JJy.GIFT_BANNER
                        }
                    }), (0, i.jsx)("div", {
                        className: w.hz
                    }), (0, i.jsx)(d.L, {
                        innerRef: F,
                        onChange: e => {
                            e && !ec && (S.default.track(k.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: ed
                            }), eu(!0))
                        },
                        children: (0, i.jsx)("div", {
                            ref: F,
                            className: w._Z
                        })
                    }), (0, i.jsx)("img", {
                        src: B,
                        className: w.Kw,
                        width: 112,
                        height: 85,
                        alt: V.intl.string(V.t.X4IxWL)
                    })]
                })
            }), ea && null != er && (0, i.jsx)(y.A, {
                isVisible: eo && Q,
                premiumSubscription: Y,
                churnDiscountOffer: ee,
                discountedPrice: er
            })]
        }), !n && (0, i.jsx)(D.A, {
            isAllPerksVisible: en,
            setIsAllPerksVisible: ei,
            previousComponent: N.A2.HOME,
            enablePremiumBrandRefresh: !0
        })]
    }) : (0, i.jsx)("div", {
        className: a()(w.kL, w.Lq),
        children: (0, i.jsx)(c.y$y, {})
    })
}