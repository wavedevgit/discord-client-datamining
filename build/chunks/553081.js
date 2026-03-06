/** chunk id: 553081 params = (module,exports,require) **/
n.d(t, {
    A: () => F
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
    g = n(688810),
    m = n(726649),
    A = n(611924),
    h = n(961250),
    p = n(320118),
    x = n(622543),
    E = n(576622),
    T = n(166403),
    S = n(954571),
    C = n(170887),
    f = n(131168),
    I = n(482589),
    b = n(511484),
    N = n(322631),
    v = n(570627),
    j = n(568031),
    O = n(518491),
    R = n(965591),
    y = n(495022),
    P = n(157839),
    D = n(382694),
    L = n(60508),
    G = n(821158),
    M = n(235365),
    U = n(994763),
    k = n(788868),
    V = n(652215),
    w = n(985018),
    H = n(865047),
    B = n(288894);
let F = e => {
    let {
        userId: t
    } = e, n = v.m.useConfig({
        location: "PremiumSubscriberHome"
    }).enabled, l = (0, r.zy)();
    s.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, h.Ay)()];
            null != t && e.push((0, E.A)(t)), await Promise.all(e)
        })
    }, [t]), s.useEffect(() => {
        ee(!0)
    }, []), (0, I.j)(), (0, A.P)(m.b);
    let F = s.useRef(null),
        Y = s.useRef(null),
        z = (0, o.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        {
            isReady: X,
            programReward: W,
            isEligible: K
        } = (0, p.F)({
            location: "PremiumSubscriberHome"
        }),
        {
            scrollTargetId: Z,
            glowingPerkId: q,
            scrollBlock: J,
            scrollInline: Q
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
    (0, U.z)(Z ?? "", null != Z, J, Q);
    let [$, ee] = s.useState(!1), et = (0, f.p)(), en = s.useRef(null), [ei, es] = s.useState(!1), [el, ea] = s.useState(!1), er = null != et && null != z && z.status === V.Dmq.CANCELED, eo = (0, b.iU)(k.gD.PREMIUM_MONTH_TIER_2, et, z), ed = !el && er, {
        analyticsLocations: ec
    } = (0, g.Ay)(_.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [eu, e_] = s.useState(!1), eg = (0, o.bG)([x.A], () => null != t ? x.A.getUserProfile(t) : null), em = (0, C.A)({
        location: "PremiumSubscriberHome"
    });
    return null != eg && (X || null != W) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(c.GtU, {
            className: a()(H.xW, {
                [H.J4]: n
            }),
            ref: F,
            children: [(0, i.jsx)(c.hLv, {
                color: "nitro-pink",
                className: a()(H.kL, H.Gd, {
                    [H.fv]: !em
                }),
                offsetBottom: .8 * !!n,
                children: (0, i.jsxs)(g.f5, {
                    value: ec,
                    children: [(0, i.jsx)(d.L, {
                        innerRef: en,
                        onChange: e => ea(e),
                        threshold: .1,
                        active: !0,
                        children: (0, i.jsx)(O.A, {
                            buttonVisibilityRef: en,
                            className: H.v1,
                            enablePremiumBrandRefresh: em,
                            userDiscountOffer: et,
                            discountedPrice: eo
                        })
                    }), n && (0, i.jsx)(D.A, {
                        glowingPerkId: q
                    }), !n && (0, i.jsx)(P.A, {
                        variant: N.cJ.WHATS_NEW,
                        className: H.Iw,
                        noBackground: !0,
                        leftAlignHeaders: !0
                    }), null != W && K && (0, i.jsx)(M.A, {
                        location: _.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
                    }), n && (0, i.jsx)(y.A, {
                        glowingPerkId: q
                    }), !n && (0, i.jsx)(P.A, {
                        className: H.xU,
                        variant: N.cJ.PERKS_DISCOVERABILITY,
                        noBackground: !0,
                        leftAlignHeaders: !0,
                        showAllPerksButton: (0, i.jsx)(G.A, {
                            setIsAllPerksVisible: es,
                            previousComponent: N.A2.HOME
                        })
                    }), (0, i.jsx)(j.A, {
                        className: H.Zy,
                        location: _.A.PREMIUM_MARKETING_GIFT_SECTION,
                        analyticsLocation: {
                            page: V.liQ.NITRO_HOME,
                            section: V.JJy.GIFT_BANNER
                        }
                    }), (0, i.jsx)("div", {
                        className: H.hz
                    }), (0, i.jsx)(d.L, {
                        innerRef: Y,
                        onChange: e => {
                            e && !eu && (S.default.track(V.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: ec
                            }), e_(!0))
                        },
                        children: (0, i.jsx)("div", {
                            ref: Y,
                            className: H._Z
                        })
                    }), (0, i.jsx)("img", {
                        src: B,
                        className: H.Kw,
                        width: 112,
                        height: 85,
                        alt: w.intl.string(w.t.X4IxWL)
                    })]
                })
            }), er && null != eo && (0, i.jsx)(R.A, {
                isVisible: ed && $,
                premiumSubscription: z,
                churnDiscountOffer: et,
                discountedPrice: eo
            })]
        }), !n && (0, i.jsx)(L.A, {
            isAllPerksVisible: ei,
            setIsAllPerksVisible: es,
            previousComponent: N.A2.HOME,
            enablePremiumBrandRefresh: em
        })]
    }) : (0, i.jsx)("div", {
        className: a()(H.kL, H.Lq),
        children: (0, i.jsx)(c.y$y, {})
    })
}