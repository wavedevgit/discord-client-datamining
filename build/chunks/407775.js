/** chunk id: 407775 params = (module,exports,require) **/
r.d(t, {
    AP: () => w,
    KV: () => H,
    Rf: () => F,
    hy: () => B,
    r6: () => K
});
var n, i = r(627968);
r(64700);
var a = r(503698),
    s = r.n(a),
    l = r(534514),
    o = r(311907),
    c = r(732955),
    d = r(582754),
    u = r(397927),
    m = r(736653),
    T = r(775602),
    g = r(793574),
    x = r(688810),
    p = r(287809),
    I = r(166403),
    _ = r(526292),
    f = r(932003),
    A = r(422936),
    h = r(234419),
    N = r(612669),
    E = r(783420),
    R = r(204413),
    j = r(511484),
    v = r(356309),
    P = r(257284),
    S = r(795269),
    b = r(501007),
    y = r(90526),
    M = r(788868),
    U = r(519412),
    L = r(985018),
    C = r(855135),
    G = r(232266),
    O = r(243002),
    D = r(241988);

function w(e) {
    let {
        ctaButton: t,
        showYearlyPrice: r,
        className: n,
        isGift: a = !1,
        priceOptions: c,
        isApplicationHome: T = !1,
        useShortTitle: g = !1
    } = e, x = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()), _ = (0, o.bG)([p.default], () => p.default.getCurrentUser()), f = (0, h.V)(), A = f?.subscription_trial?.sku_id, N = x?.hasActiveTrial ? _?.premiumType : null, E = (0, S.Lj)(N, A), R = null != E, j = (0, d.qB)((0, m.Ay)()), P = g ? L.intl.string(L.t.tUbSDK) : L.intl.string(L.t["t9uG/o"]), U = (0, i.jsxs)(i.Fragment, {
        children: [R && (0, i.jsx)(v.D, {
            text: E,
            className: C.pill
        }), (0, i.jsx)(l.D, {
            variant: "display-md",
            color: j ? "text-strong" : "always-white",
            className: C.cardTitle,
            children: P
        }), (0, i.jsx)(y.A, {
            isGift: a,
            premiumTier: M.PremiumTypes.TIER_0,
            offerType: M.Vk.PREMIUM_TRIAL,
            offerTierMatchesCard: A === M.pe.TIER_0,
            showYearlyPrice: r,
            priceOptions: c,
            enablePremiumBrandRefresh: !0,
            headingVariant: "text-md/medium",
            headingColor: "text-strong",
            headerClassName: C.priceHeader
        }), (0, i.jsx)("hr", {
            className: C.divider
        }), (0, i.jsx)(b.nH, {
            enablePremiumBrandRefresh: !0,
            isApplicationHome: T
        }), t]
    });
    return (0, i.jsx)(u.hLv, {
        color: "nitro-green",
        className: s()(C.card, C.tier0, n, {
            [C.pillMargin]: !T && R
        }),
        children: U
    })
}
var F = ((n = {}).IN_CARD = "inCard", n.OUTER_CORNER = "outerCorner", n.INSIDE_CORNER = "insideCorner", n.GIFT_SELECTION_MODAL = "giftSelectionModal", n);

function H(e) {
    let {
        ctaButton: t,
        showYearlyPrice: r,
        featureSet: n = b.Nz.DEFAULT,
        className: a,
        isGift: c = !1,
        isModal: T = !1,
        priceOptions: g,
        showPromotionalGiftBanner: x = !1,
        wumpusPosition: N = "inCard",
        isApplicationHome: E = !1,
        showWumpus: R = !0,
        showPill: P = !0
    } = e, U = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()), w = (0, o.bG)([p.default], () => p.default.getCurrentUser()), F = (0, h.V)(), H = F?.subscription_trial?.sku_id, K = U?.hasActiveTrial ? w?.premiumType : null, k = (0, A.O)(), V = (0, _.k5)(), B = null != H || null != K ? M.Vk.PREMIUM_TRIAL : null != k || V ? M.Vk.PREMIUM_DISCOUNT : null, W = (0, d.qB)((0, m.Ay)()), J = (0, S.rm)(V, K, k, F, H);
    return (0, i.jsxs)(u.hLv, {
        color: "nitro-pink",
        className: s()(C.card, a, {
            [C.withGiftBanner]: x
        }),
        children: [R && (0, i.jsx)(() => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("img", {
                src: O,
                alt: "",
                className: s()(C.bigCloud, C[N])
            }), (0, i.jsx)("img", {
                src: G,
                alt: "",
                className: s()(C.smallCloud, C[N])
            }), (0, i.jsx)("img", {
                src: D,
                alt: "",
                className: s()(C.wumpus, C[N])
            })]
        }), {}), P && (0, i.jsx)(v.D, {
            text: J ?? L.intl.string(L.t["6bEcYr"]),
            className: C.pill
        }), (0, i.jsx)(l.D, {
            variant: "display-md",
            color: W ? "text-strong" : "always-white",
            className: C.cardTitle,
            children: L.intl.string(L.t.lG6a5x)
        }), (0, i.jsx)(y.A, {
            isGift: c,
            premiumTier: M.PremiumTypes.TIER_2,
            offerType: B,
            offerTierMatchesCard: H === M.pe.TIER_2 || (0, j.U9)(k, M.pe.TIER_2),
            showYearlyPrice: r,
            priceOptions: g,
            enablePremiumBrandRefresh: !0,
            headingVariant: "text-md/medium",
            headingColor: "text-strong",
            headerClassName: C.priceHeader
        }), (0, i.jsx)("hr", {
            className: C.divider
        }), (0, i.jsx)(b.ZP, {
            featureSet: n,
            isModal: T,
            isGift: c,
            enablePremiumBrandRefresh: !0,
            isApplicationHome: E,
            firstFeatureItemClassName: "inCard" === N || "giftSelectionModal" === N ? C.firstFeatureItemContainer : void 0
        }), t, x && (0, i.jsx)(f.b, {})]
    })
}

function K(e) {
    let {
        className: t,
        ctaButton: r,
        isApplicationHome: n,
        priceOptions: a
    } = e, o = (0, d.qB)((0, m.Ay)());
    return (0, i.jsxs)("div", {
        className: s()(C.card, C.borderGradient, t),
        children: [(0, i.jsxs)("div", {
            className: C.cardHeader,
            children: [(0, i.jsx)(l.D, {
                variant: "display-md",
                color: o ? "text-strong" : "always-white",
                className: C.cardTitle,
                children: L.intl.string(U.default.eSKiXk)
            }), (0, i.jsx)(v.D, {
                text: L.intl.string(L.t.oW0eUd),
                className: C.betaPill
            })]
        }), (0, i.jsx)(P.A, {
            priceOptions: a
        }), (0, i.jsx)(l.D, {
            variant: "heading-md/semibold",
            color: "text-muted",
            children: L.intl.string(U.default["R+dzZw"])
        }), (0, i.jsx)("hr", {
            className: C.divider
        }), (0, i.jsx)(b.Lg, {
            isApplicationHome: n
        }), r]
    })
}
let k = e => {
        let {
            subscriptionTier: t,
            isReducedMotion: r,
            tierCardProps: n,
            className: a,
            narrowLayout: l
        } = e, o = t === M.pe.TIER_2, {
            subscribeButtonProps: d,
            subscriptionTier: m
        } = (0, R.$)({
            subscriptionTier: t,
            variantOverride: o ? "expressive" : "secondary"
        }), {
            disabled: T
        } = d, g = (0, i.jsx)("div", {
            className: C.CTAButton,
            children: (0, i.jsx)(c.$nd, {
                size: "md",
                fullWidth: !0,
                ...d,
                disabled: T
            })
        }), x = (0, i.jsx)("div", {
            className: s()({
                [C.premiumCardHover]: !r
            }),
            children: (0, i.jsx)(o ? H : w, {
                className: s()(C.applicationHomeCard, {
                    [C.narrow]: l
                }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...n
            })
        });
        return (0, i.jsx)("div", {
            className: a,
            children: T ? x : (0, i.jsx)(E.A, {
                subscriptionTier: m,
                children: e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, i.jsx)(u.DUT, {
                        onClick: t,
                        style: {
                            cursor: "pointer"
                        },
                        children: x
                    })
                }
            })
        })
    },
    V = e => {
        let {
            isReducedMotion: t,
            className: r
        } = e, n = (0, i.jsx)("div", {
            className: C.CTAButton,
            children: (0, i.jsx)(c.$nd, {
                size: "md",
                fullWidth: !0,
                icon: u.tvc,
                text: L.intl.string(L.t["2pG5Ga"]),
                variant: "secondary"
            })
        }), a = (0, i.jsx)("div", {
            className: s()({
                [C.premiumCardHover]: !t
            }),
            children: (0, i.jsx)(K, {
                className: s()(C.applicationHomeCard, C.narrow),
                ctaButton: n,
                isApplicationHome: !0
            })
        });
        return (0, i.jsx)(E.A, {
            subscriptionTier: M.pe.TIER_2,
            initialPlanId: M.gD.PREMIUM_GROUP_MONTH,
            children: e => {
                let {
                    onClick: t
                } = e;
                return (0, i.jsx)("div", {
                    className: r,
                    children: (0, i.jsx)(u.DUT, {
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

function B(e) {
    let {
        innerRef: t,
        className: r
    } = e, {
        analyticsLocations: n
    } = (0, x.Ay)(g.A.PREMIUM_MARKETING_TIER_CARD), a = (0, b.pw)(t), c = (0, o.bG)([T.A], () => T.A.useReducedMotion), d = (0, N.PA)();
    return (0, i.jsx)(x.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: s()(C.premiumCardsContainer, r),
            children: [(0, i.jsx)(l.D, {
                variant: "display-md",
                color: "text-strong",
                className: C.premiumCardsHeader,
                children: L.intl.string(L.t.vLz3Zs)
            }), (0, i.jsxs)("div", {
                ref: a,
                className: C.premiumCards,
                children: [(0, i.jsx)(k, {
                    subscriptionTier: M.pe.TIER_0,
                    isReducedMotion: c,
                    className: C.tier0CardOrder,
                    narrowLayout: d
                }), (0, i.jsx)(k, {
                    subscriptionTier: M.pe.TIER_2,
                    isReducedMotion: c,
                    className: C.tier2CardOrder,
                    tierCardProps: {
                        wumpusPosition: d ? "insideCorner" : "outerCorner",
                        showPill: !d
                    },
                    narrowLayout: d
                }), d && (0, i.jsx)(V, {
                    isReducedMotion: c,
                    className: C.premiumGroupCardOrder
                })]
            })]
        })
    })
}