/** chunk id: 407775, original params: e,t,i (module,exports,require) **/
i.d(t, {
    AP: () => D,
    KV: () => F,
    Rf: () => w,
    hy: () => B,
    r6: () => V
});
var r, n = i(627968);
i(64700);
var a = i(503698),
    s = i.n(a),
    l = i(534514),
    o = i(311907),
    c = i(732955),
    d = i(582754),
    m = i(397927),
    u = i(736653),
    C = i(775602),
    x = i(793574),
    T = i(688810),
    p = i(287809),
    g = i(166403),
    I = i(526292),
    _ = i(932003),
    h = i(422936),
    f = i(234419),
    A = i(612669),
    N = i(783420),
    j = i(204413),
    E = i(511484),
    R = i(356309),
    v = i(257284),
    P = i(795269),
    L = i(501007),
    M = i(90526),
    S = i(788868),
    b = i(518582),
    y = i(985018),
    U = i(235889),
    G = i(232266),
    H = i(243002),
    O = i(241988);

function D(e) {
    let {
        ctaButton: t,
        showYearlyPrice: i,
        className: r,
        isGift: a = !1,
        priceOptions: c,
        isApplicationHome: C = !1,
        useShortTitle: x = !1
    } = e, T = (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()), I = (0, o.bG)([p.default], () => p.default.getCurrentUser()), _ = (0, f.V)(), h = _?.subscription_trial?.sku_id, A = T?.hasActiveTrial ? I?.premiumType : null, N = (0, P.Lj)(A, h), j = null != N, E = (0, d.qB)((0, u.Ay)()), v = x ? y.intl.string(y.t.tUbSDK) : y.intl.string(y.t["t9uG/o"]), b = (0, n.jsxs)(n.Fragment, {
        children: [j && (0, n.jsx)(R.D, {
            text: N,
            className: U.pill
        }), (0, n.jsx)(l.D, {
            variant: "display-md",
            color: E ? "text-strong" : "always-white",
            className: U.cardTitle,
            children: v
        }), (0, n.jsx)(M.A, {
            isGift: a,
            premiumTier: S.PremiumTypes.TIER_0,
            offerType: S.Vk.PREMIUM_TRIAL,
            offerTierMatchesCard: h === S.pe.TIER_0,
            showYearlyPrice: i,
            priceOptions: c,
            enablePremiumBrandRefresh: !0,
            headingVariant: "text-md/medium",
            headingColor: "text-strong",
            headerClassName: U.priceHeader
        }), (0, n.jsx)("hr", {
            className: U.divider
        }), (0, n.jsx)(L.nH, {
            enablePremiumBrandRefresh: !0,
            isApplicationHome: C
        }), t]
    });
    return (0, n.jsx)(m.hLv, {
        color: "nitro-green",
        className: s()(U.card, U.tier0, r, {
            [U.pillMargin]: !C && j
        }),
        children: b
    })
}
var w = ((r = {}).IN_CARD = "inCard", r.OUTER_CORNER = "outerCorner", r.INSIDE_CORNER = "insideCorner", r.GIFT_SELECTION_MODAL = "giftSelectionModal", r);

function F(e) {
    let {
        ctaButton: t,
        showYearlyPrice: i,
        featureSet: r = L.Nz.DEFAULT,
        className: a,
        isGift: c = !1,
        isModal: C = !1,
        priceOptions: x,
        showPromotionalGiftBanner: T = !1,
        wumpusPosition: A = "inCard",
        isApplicationHome: N = !1,
        showWumpus: j = !0,
        showPill: v = !0
    } = e, b = (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()), D = (0, o.bG)([p.default], () => p.default.getCurrentUser()), w = (0, f.V)(), F = w?.subscription_trial?.sku_id, V = b?.hasActiveTrial ? D?.premiumType : null, k = (0, h.O)(), K = (0, I.k5)(), B = null != F || null != V ? S.Vk.PREMIUM_TRIAL : null != k || K ? S.Vk.PREMIUM_DISCOUNT : null, Z = (0, d.qB)((0, u.Ay)()), W = (0, P.rm)(K, V, k, w, F);
    return (0, n.jsxs)(m.hLv, {
        color: "nitro-pink",
        className: s()(U.card, a, {
            [U.withGiftBanner]: T
        }),
        children: [j && (0, n.jsx)(() => (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
                src: H,
                alt: "",
                className: s()(U.bigCloud, U[A])
            }), (0, n.jsx)("img", {
                src: G,
                alt: "",
                className: s()(U.smallCloud, U[A])
            }), (0, n.jsx)("img", {
                src: O,
                alt: "",
                className: s()(U.wumpus, U[A])
            })]
        }), {}), v && (0, n.jsx)(R.D, {
            text: W ?? y.intl.string(y.t["6bEcYr"]),
            className: U.pill
        }), (0, n.jsx)(l.D, {
            variant: "display-md",
            color: Z ? "text-strong" : "always-white",
            className: U.cardTitle,
            children: y.intl.string(y.t.lG6a5x)
        }), (0, n.jsx)(M.A, {
            isGift: c,
            premiumTier: S.PremiumTypes.TIER_2,
            offerType: B,
            offerTierMatchesCard: F === S.pe.TIER_2 || (0, E.U9)(k, S.pe.TIER_2),
            showYearlyPrice: i,
            priceOptions: x,
            enablePremiumBrandRefresh: !0,
            headingVariant: "text-md/medium",
            headingColor: "text-strong",
            headerClassName: U.priceHeader
        }), (0, n.jsx)("hr", {
            className: U.divider
        }), (0, n.jsx)(L.ZP, {
            featureSet: r,
            isModal: C,
            isGift: c,
            enablePremiumBrandRefresh: !0,
            isApplicationHome: N,
            firstFeatureItemClassName: "inCard" === A || "giftSelectionModal" === A ? U.firstFeatureItemContainer : void 0
        }), t, T && (0, n.jsx)(_.b, {})]
    })
}

function V(e) {
    let {
        className: t,
        ctaButton: i,
        isApplicationHome: r,
        priceOptions: a
    } = e, o = (0, d.qB)((0, u.Ay)());
    return (0, n.jsxs)("div", {
        className: s()(U.card, U.borderGradient, t),
        children: [(0, n.jsxs)("div", {
            className: U.cardHeader,
            children: [(0, n.jsx)(l.D, {
                variant: "display-md",
                color: o ? "text-strong" : "always-white",
                className: U.cardTitle,
                children: y.intl.string(b.default.eSKiXk)
            }), (0, n.jsx)(R.D, {
                text: y.intl.string(y.t.oW0eUd),
                className: U.betaPill
            })]
        }), (0, n.jsx)(v.A, {
            priceOptions: a
        }), (0, n.jsx)(l.D, {
            variant: "heading-md/semibold",
            color: "text-muted",
            children: y.intl.string(b.default["R+dzZw"])
        }), (0, n.jsx)("hr", {
            className: U.divider
        }), (0, n.jsx)(L.Lg, {
            isApplicationHome: r
        }), i]
    })
}
let k = e => {
        let {
            subscriptionTier: t,
            isReducedMotion: i,
            tierCardProps: r,
            className: a,
            narrowLayout: l
        } = e, o = t === S.pe.TIER_2, {
            subscribeButtonProps: d,
            subscriptionTier: u
        } = (0, j.$)({
            subscriptionTier: t,
            variantOverride: o ? "expressive" : "secondary"
        }), {
            disabled: C
        } = d, x = (0, n.jsx)("div", {
            className: U.CTAButton,
            children: (0, n.jsx)(c.$nd, {
                size: "md",
                fullWidth: !0,
                ...d,
                disabled: C
            })
        }), T = (0, n.jsx)("div", {
            className: s()({
                [U.premiumCardHover]: !i
            }),
            children: (0, n.jsx)(o ? F : D, {
                className: s()(U.applicationHomeCard, {
                    [U.narrow]: l
                }),
                ctaButton: x,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...r
            })
        });
        return (0, n.jsx)("div", {
            className: a,
            children: C ? T : (0, n.jsx)(N.A, {
                subscriptionTier: u,
                children: e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, n.jsx)(m.DUT, {
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
    K = e => {
        let {
            isReducedMotion: t,
            className: i
        } = e, r = (0, n.jsx)("div", {
            className: U.CTAButton,
            children: (0, n.jsx)(c.$nd, {
                size: "md",
                fullWidth: !0,
                icon: m.tvc,
                text: y.intl.string(y.t["2pG5Ga"]),
                variant: "secondary"
            })
        }), a = (0, n.jsx)("div", {
            className: s()({
                [U.premiumCardHover]: !t
            }),
            children: (0, n.jsx)(V, {
                className: s()(U.applicationHomeCard, U.narrow),
                ctaButton: r,
                isApplicationHome: !0
            })
        });
        return (0, n.jsx)(N.A, {
            subscriptionTier: S.pe.TIER_2,
            initialPlanId: S.gD.PREMIUM_GROUP_MONTH,
            children: e => {
                let {
                    onClick: t
                } = e;
                return (0, n.jsx)("div", {
                    className: i,
                    children: (0, n.jsx)(m.DUT, {
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
        className: i
    } = e, {
        analyticsLocations: r
    } = (0, T.Ay)(x.A.PREMIUM_MARKETING_TIER_CARD), a = (0, L.pw)(t), c = (0, o.bG)([C.A], () => C.A.useReducedMotion), d = (0, A.PA)();
    return (0, n.jsx)(T.f5, {
        value: r,
        children: (0, n.jsxs)("div", {
            className: s()(U.premiumCardsContainer, i),
            children: [(0, n.jsx)(l.D, {
                variant: "display-md",
                color: "text-strong",
                className: U.premiumCardsHeader,
                children: y.intl.string(y.t.vLz3Zs)
            }), (0, n.jsxs)("div", {
                ref: a,
                className: U.premiumCards,
                children: [(0, n.jsx)(k, {
                    subscriptionTier: S.pe.TIER_0,
                    isReducedMotion: c,
                    className: U.tier0CardOrder,
                    narrowLayout: d
                }), (0, n.jsx)(k, {
                    subscriptionTier: S.pe.TIER_2,
                    isReducedMotion: c,
                    className: U.tier2CardOrder,
                    tierCardProps: {
                        wumpusPosition: d ? "insideCorner" : "outerCorner",
                        showPill: !d
                    },
                    narrowLayout: d
                }), d && (0, n.jsx)(K, {
                    isReducedMotion: c,
                    className: U.premiumGroupCardOrder
                })]
            })]
        })
    })
}