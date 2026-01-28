/** Chunk was on 5606 **/
/** chunk id: 185180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B
}), n(321073), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(960488),
    o = n(311907),
    c = n(230109),
    d = n(397927),
    u = n(73153),
    p = n(793574),
    _ = n(688810),
    m = n(726649),
    g = n(611924),
    f = n(961250),
    b = n(895944),
    h = n(649032),
    A = n(26508),
    E = n(622543),
    x = n(94343),
    O = n(576622),
    C = n(166403),
    y = n(954571),
    j = n(170887),
    T = n(131168),
    v = n(511484),
    S = n(703982),
    I = n(326736),
    N = n(810036),
    P = n(160116),
    R = n(530060),
    D = n(322631),
    w = n(891858),
    L = n(807676),
    M = n(788868),
    G = n(652215),
    U = n(985018),
    k = n(70338),
    H = n(288894);
let B = e => {
    let {
        userId: t
    } = e, n = (0, a.zy)(), l = i.useRef(null);
    i.useEffect(() => {
        u.h.wait(async () => {
            let e = [(0, f.Ay)()];
            null != t && e.push((0, O.A)(t)), await Promise.all(e)
        })
    }, [t]), i.useEffect(() => {
        Z(!0)
    }, []), (0, g.P)(m.b);
    let B = i.useRef(null),
        V = i.useRef(null),
        F = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        {
            isReady: Y,
            programReward: W
        } = (0, o.cf)([b.A], () => ({
            isReady: b.A.isReady(),
            programReward: b.A.getRewardForProgram(h.W.NITRO)
        })),
        K = i.useMemo(() => !!Y && "orbs" === new URLSearchParams(n.search).get("section"), [n.search, Y]);
    (0, x.A)(l, K);
    let [z, Z] = i.useState(!1), q = (0, T.p)(), X = i.useRef(null), [J, Q] = i.useState(!1), [$, ee] = i.useState(!1), et = null != q && null != F && F.status === G.Dmq.CANCELED, en = (0, v.iU)(M.gD.PREMIUM_MONTH_TIER_2, q, F), er = !$ && et, {
        analyticsLocations: ei
    } = (0, _.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME), [el, es] = i.useState(!1), ea = (0, o.bG)([E.A], () => null != t ? E.A.getUserProfile(t) : null), eo = (0, j.A)({
        location: "SubscriberNitroHome"
    });
    return null != ea && (Y || null != W) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(d.GtU, {
            className: k.xW,
            ref: B,
            children: [(0, r.jsx)(d.hLv, {
                color: "nitro-pink",
                className: s()(k.kL, k.Gd, {
                    [k.fv]: !eo
                }),
                children: (0, r.jsxs)(_.f5, {
                    value: ei,
                    children: [(0, r.jsx)(c.L, {
                        innerRef: X,
                        onChange: e => ee(e),
                        threshold: .1,
                        active: !0,
                        children: (0, r.jsx)(P.A, {
                            buttonVisibilityRef: X,
                            className: k.v1,
                            enablePremiumBrandRefresh: eo,
                            userDiscountOffer: q,
                            discountedPrice: en
                        })
                    }), (0, r.jsx)(I.A, {
                        variant: D.cJ.WHATS_NEW,
                        className: k.Iw,
                        noBackground: !0,
                        leftAlignHeaders: !0
                    }), (0, r.jsx)(I.A, {
                        className: k.xU,
                        variant: D.cJ.PERKS_DISCOVERABILITY,
                        noBackground: !0,
                        leftAlignHeaders: !0,
                        showAllPerksButton: (0, r.jsx)(L.A, {
                            setIsAllPerksVisible: Q,
                            previousComponent: D.A2.HOME
                        })
                    }), null != W && (0, A.T0)("SubscriberNitroHome") && (0, r.jsx)(R.A, {
                        location: p.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION,
                        sectionRef: l
                    }), (0, r.jsx)(N.A, {
                        className: k.Zy,
                        location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                        analyticsLocation: {
                            page: G.liQ.NITRO_HOME,
                            section: G.JJy.GIFT_BANNER
                        }
                    }), (0, r.jsx)("div", {
                        className: k.hz
                    }), (0, r.jsx)(c.L, {
                        innerRef: V,
                        onChange: e => {
                            e && !el && (y.default.track(G.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: ei
                            }), es(!0))
                        },
                        children: (0, r.jsx)("div", {
                            ref: V,
                            className: k._Z
                        })
                    }), (0, r.jsx)("img", {
                        src: H,
                        className: k.Kw,
                        width: 112,
                        height: 85,
                        alt: U.intl.string(U.t.X4IxWL)
                    })]
                })
            }), et && null != en && (0, r.jsx)(S.A, {
                isVisible: er && z,
                premiumSubscription: F,
                churnDiscountOffer: q,
                discountedPrice: en
            })]
        }), (0, r.jsx)(w.A, {
            isAllPerksVisible: J,
            setIsAllPerksVisible: Q,
            previousComponent: D.A2.HOME,
            enablePremiumBrandRefresh: eo
        })]
    }) : (0, r.jsx)("div", {
        className: s()(k.kL, k.Lq),
        children: (0, r.jsx)(d.y$y, {})
    })
}