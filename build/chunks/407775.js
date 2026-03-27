/** chunk id: 407775 params = (module,exports,require) **/
r.d(t, {
    AP: () => D,
    KV: () => k,
    Rf: () => H,
    hy: () => J,
    r6: () => B
});
var i, n = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(534514),
    o = r(311907),
    c = r(732955),
    d = r(582754),
    u = r(397927),
    m = r(736653),
    x = r(775602),
    g = r(793574),
    T = r(688810),
    p = r(287809),
    I = r(166403),
    h = r(526292),
    f = r(932003),
    A = r(422936),
    j = r(234419),
    v = r(612669),
    _ = r(783420),
    R = r(204413),
    P = r(511484),
    N = r(356309),
    E = r(257284),
    y = r(795269),
    M = r(501007),
    b = r(90526),
    C = r(788868),
    S = r(519412),
    U = r(985018),
    w = r(441088),
    O = r(232266),
    L = r(243002),
    G = r(241988);

function D(e) {
    let {
        ctaButton: t,
        showYearlyPrice: r,
        className: i,
        isGift: a = !1,
        priceOptions: c,
        isApplicationHome: x = !1,
        useShortTitle: g = !1
    } = e, T = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()), h = (0, o.bG)([p.default], () => p.default.getCurrentUser()), f = (0, j.V)(), A = f?.subscription_trial?.sku_id, v = T?.hasActiveTrial ? h?.premiumType : null, _ = (0, y.Lj)(v, A), R = null != _, P = (0, d.qB)((0, m.Ay)()), E = g ? U.intl.string(U.t.tUbSDK) : U.intl.string(U.t["t9uG/o"]), S = (0, n.jsxs)(n.Fragment, {
        children: [R && (0, n.jsx)(N.D, {
            text: _,
            className: w.pill
        }), (0, n.jsx)(l.D, {
            variant: "display-md",
            color: P ? "text-strong" : "always-white",
            className: w.cardTitle,
            children: E
        }), (0, n.jsx)(b.A, {
            isGift: a,
            premiumTier: C.PremiumTypes.TIER_0,
            offerType: C.Vk.PREMIUM_TRIAL,
            offerTierMatchesCard: A === C.pe.TIER_0,
            showYearlyPrice: r,
            priceOptions: c,
            enablePremiumBrandRefresh: !0,
            headingVariant: "text-md/medium",
            headingColor: "text-strong",
            headerClassName: w.priceHeader
        }), (0, n.jsx)("hr", {
            className: w.divider
        }), (0, n.jsx)(M.nH, {
            enablePremiumBrandRefresh: !0,
            isApplicationHome: x
        }), t]
    });
    return (0, n.jsx)(u.hLv, {
        color: "nitro-green",
        className: s()(w.card, w.tier0, i, {
            [w.pillMargin]: !x && R
        }),
        children: S
    })
}
var H = ((i = {}).IN_CARD = "inCard", i.OUTER_CORNER = "outerCorner", i.INSIDE_CORNER = "insideCorner", i.GIFT_SELECTION_MODAL = "giftSelectionModal", i);

function k(e) {
    let {
        ctaButton: t,
        showYearlyPrice: r,
        featureSet: i = M.Nz.DEFAULT,
        className: a,
        isGift: c = !1,
        isModal: x = !1,
        priceOptions: g,
        showPromotionalGiftBanner: T = !1,
        wumpusPosition: v = "inCard",
        isApplicationHome: _ = !1,
        showWumpus: R = !0,
        showPill: E = !0
    } = e, S = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()), D = (0, o.bG)([p.default], () => p.default.getCurrentUser()), H = (0, j.V)(), k = H?.subscription_trial?.sku_id, B = S?.hasActiveTrial ? D?.premiumType : null, F = (0, A.O)(), V = (0, h.k5)(), J = null != k || null != B ? C.Vk.PREMIUM_TRIAL : null != F || V ? C.Vk.PREMIUM_DISCOUNT : null, Z = (0, d.qB)((0, m.Ay)()), W = (0, y.rm)(V, B, F, H, k);
    return (0, n.jsxs)(u.hLv, {
        color: "nitro-pink",
        className: s()(w.card, a, {
            [w.withGiftBanner]: T
        }),
        children: [R && (0, n.jsx)(() => (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
                src: L,
                alt: "",
                className: s()(w.bigCloud, w[v])
            }), (0, n.jsx)("img", {
                src: O,
                alt: "",
                className: s()(w.smallCloud, w[v])
            }), (0, n.jsx)("img", {
                src: G,
                alt: "",
                className: s()(w.wumpus, w[v])
            })]
        }), {}), E && (0, n.jsx)(N.D, {
            text: W ?? U.intl.string(U.t["6bEcYr"]),
            className: w.pill
        }), (0, n.jsx)(l.D, {
            variant: "display-md",
            color: Z ? "text-strong" : "always-white",
            className: w.cardTitle,
            children: U.intl.string(U.t.lG6a5x)
        }), (0, n.jsx)(b.A, {
            isGift: c,
            premiumTier: C.PremiumTypes.TIER_2,
            offerType: J,
            offerTierMatchesCard: k === C.pe.TIER_2 || (0, P.U9)(F, C.pe.TIER_2),
            showYearlyPrice: r,
            priceOptions: g,
            enablePremiumBrandRefresh: !0,
            headingVariant: "text-md/medium",
            headingColor: "text-strong",
            headerClassName: w.priceHeader
        }), (0, n.jsx)("hr", {
            className: w.divider
        }), (0, n.jsx)(M.ZP, {
            featureSet: i,
            isModal: x,
            isGift: c,
            enablePremiumBrandRefresh: !0,
            isApplicationHome: _,
            firstFeatureItemClassName: "inCard" === v || "giftSelectionModal" === v ? w.firstFeatureItemContainer : void 0
        }), t, T && (0, n.jsx)(f.b, {})]
    })
}

function B(e) {
    let {
        className: t,
        ctaButton: r,
        isApplicationHome: i,
        priceOptions: a
    } = e, o = (0, d.qB)((0, m.Ay)());
    return (0, n.jsxs)("div", {
        className: s()(w.card, w.borderGradient, t),
        children: [(0, n.jsxs)("div", {
            className: w.cardHeader,
            children: [(0, n.jsx)(l.D, {
                variant: "display-md",
                color: o ? "text-strong" : "always-white",
                className: w.cardTitle,
                children: U.intl.string(S.default.eSKiXk)
            }), (0, n.jsx)(N.D, {
                text: U.intl.string(U.t.oW0eUd),
                className: w.betaPill
            })]
        }), (0, n.jsx)(E.A, {
            priceOptions: a
        }), (0, n.jsx)(l.D, {
            variant: "heading-md/semibold",
            color: "text-muted",
            children: U.intl.string(S.default["R+dzZw"])
        }), (0, n.jsx)("hr", {
            className: w.divider
        }), (0, n.jsx)(M.Lg, {
            isApplicationHome: i
        }), r]
    })
}
let F = e => {
        let {
            subscriptionTier: t,
            isReducedMotion: r,
            tierCardProps: i,
            className: a,
            narrowLayout: l
        } = e, o = t === C.pe.TIER_2, {
            subscribeButtonProps: d,
            subscriptionTier: m
        } = (0, R.$)({
            subscriptionTier: t,
            variantOverride: o ? "expressive" : "secondary"
        }), {
            disabled: x
        } = d, g = (0, n.jsx)("div", {
            className: w.CTAButton,
            children: (0, n.jsx)(c.$nd, {
                size: "md",
                fullWidth: !0,
                ...d,
                disabled: x
            })
        }), T = (0, n.jsx)("div", {
            className: s()({
                [w.premiumCardHover]: !r
            }),
            children: (0, n.jsx)(o ? k : D, {
                className: s()(w.applicationHomeCard, {
                    [w.narrow]: l
                }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i
            })
        });
        return (0, n.jsx)("div", {
            className: a,
            children: x ? T : (0, n.jsx)(_.A, {
                subscriptionTier: m,
                children: e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, n.jsx)(u.DUT, {
                        onClick: t,
                        style: {
                            cursor: "pointer"
                        },
                        children: T
                    })
                }
            })
        })
    },
    V = e => {
        let {
            isReducedMotion: t,
            className: r
        } = e, i = (0, n.jsx)("div", {
            className: w.CTAButton,
            children: (0, n.jsx)(c.$nd, {
                size: "md",
                fullWidth: !0,
                icon: u.tvc,
                text: U.intl.string(U.t["2pG5Ga"]),
                variant: "secondary"
            })
        }), a = (0, n.jsx)("div", {
            className: s()({
                [w.premiumCardHover]: !t
            }),
            children: (0, n.jsx)(B, {
                className: s()(w.applicationHomeCard, w.narrow),
                ctaButton: i,
                isApplicationHome: !0
            })
        });
        return (0, n.jsx)(_.A, {
            subscriptionTier: C.pe.TIER_2,
            initialPlanId: C.gD.PREMIUM_GROUP_MONTH,
            children: e => {
                let {
                    onClick: t
                } = e;
                return (0, n.jsx)("div", {
                    className: r,
                    children: (0, n.jsx)(u.DUT, {
                        onClick: t,
                        style: {
                            cursor: "pointer"
                        },
                        children: a
                    })
                })
            }
        })
    };

function J(e) {
    let {
        innerRef: t,
        className: r
    } = e, {
        analyticsLocations: i
    } = (0, T.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD), a = (0, M.pw)(t), c = (0, o.bG)([x.A], () => x.A.useReducedMotion), d = (0, v.PA)();
    return (0, n.jsx)(T.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(w.premiumCardsContainer, r),
            children: [(0, n.jsx)(l.D, {
                variant: "display-md",
                color: "text-strong",
                className: w.premiumCardsHeader,
                children: U.intl.string(U.t.vLz3Zs)
            }), (0, n.jsxs)("div", {
                ref: a,
                className: w.premiumCards,
                children: [(0, n.jsx)(F, {
                    subscriptionTier: C.pe.TIER_0,
                    isReducedMotion: c,
                    className: w.tier0CardOrder,
                    narrowLayout: d
                }), (0, n.jsx)(F, {
                    subscriptionTier: C.pe.TIER_2,
                    isReducedMotion: c,
                    className: w.tier2CardOrder,
                    tierCardProps: {
                        wumpusPosition: d ? "insideCorner" : "outerCorner",
                        showPill: !d
                    },
                    narrowLayout: d
                }), d && (0, n.jsx)(V, {
                    isReducedMotion: c,
                    className: w.premiumGroupCardOrder
                })]
            })]
        })
    })
}