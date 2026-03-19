/** chunk id: 834384 params = (module,exports,require) **/
r.d(t, {
    A: () => U
});
var n = r(627968);
r(64700);
var l = r(417597),
    i = r(397927),
    a = r(793574),
    s = r(688810),
    u = r(44120),
    o = r(465794),
    c = r(106799),
    d = r(652165),
    h = r(287809),
    m = r(927578),
    f = r(979286),
    x = r(4227),
    A = r(298072),
    p = r(993408),
    v = r(450481),
    g = r(740076),
    C = r(466459),
    b = r(623373),
    I = r(561769),
    k = r(766172),
    E = r(525723),
    y = r(57020),
    j = r(61750),
    R = r(758836),
    _ = r(788868),
    T = r(985018),
    L = r(63444);
let O = e => {
        let {
            product: t,
            cardRef: r,
            isPremiumUser: l,
            analyticsLocations: a,
            selectedVariantIndex: s,
            hasDiscountOffer: o,
            discountOfferAmount: c,
            text: d
        } = e, h = (0, p.R8)(t, l, !1), m = o ? T.intl.formatToPlainString(T.t["5U5RB5"], {
            discountOfferAmount: c
        }) : T.intl.formatToPlainString(T.t["cNSL/j"], {
            price: h
        });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), (0, u.A)({
                    skuId: (0, k.Y)({
                        product: t,
                        selectedVariantIndex: s
                    }),
                    returnRef: r,
                    analyticsLocations: a
                })
            },
            text: d ?? m,
            fullWidth: !0
        })
    },
    N = e => {
        let {
            isClaimPremiumProductDisabled: t,
            text: r
        } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: e => e.stopPropagation(),
            textOptions: {
                textOverride: r ?? T.intl.string(T.t.sEAnVH)
            },
            subscriptionTier: _.pe.TIER_2,
            showGradient: !0
        })
    },
    P = e => {
        let {
            handlePreviewButtonClick: t,
            text: r
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), t(e)
            },
            text: r ?? T.intl.string(T.t.FdGl5A),
            fullWidth: !0
        })
    },
    V = e => {
        let {
            handleUseNow: t,
            isApplying: r,
            text: l
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), t()
            },
            loading: r,
            text: l ?? T.intl.string(T.t.MAS7uK),
            fullWidth: !0
        })
    },
    S = e => {
        let {
            skuId: t,
            onClick: r,
            text: l
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), r(t)
            },
            text: l ?? T.intl.string(T.t.FdGl5A),
            fullWidth: !0
        })
    },
    w = e => {
        let {
            product: t,
            isClaimPremiumProductDisabled: r,
            isClaiming: l,
            analyticsLocations: a,
            text: s,
            onClickAnalytics: u
        } = e, o = async () => {
            u?.("claim premium product button"), await (0, f.iJ)(t.skuId), (0, j.A)({
                product: t,
                analyticsLocations: a,
                purchaseType: R.gs.PREMIUM_PURCHASE
            })
        };
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), o()
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: T.intl.string(T.t["TYw+9s"]),
            loadingFinishedLabel: T.intl.string(T.t.Pg1UP5),
            text: s ?? T.intl.string(T.t.zp6caO),
            fullWidth: !0
        })
    },
    M = e => {
        let {
            product: t,
            checkoutEligiblePrices: r,
            analyticsLocations: l,
            selectedVariantIndex: a,
            text: s,
            onClickAnalytics: u
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            text: s ?? T.intl.format(T.t.lOtBOI, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(c.A, {
                    className: L.f
                })
            }),
            onClick: e => {
                e.stopPropagation(), u?.("claim with orbs button"), (0, d.B4)({
                    skuId: (0, k.Y)({
                        product: t,
                        selectedVariantIndex: a
                    }),
                    onCheckoutSuccess: e => {
                        let {
                            entitlements: r
                        } = e;
                        (0, f.gB)(), (0, j.A)({
                            product: t,
                            analyticsLocations: l,
                            itemConsumed: r[0]?.consumed,
                            purchaseType: R.gs.ORB
                        })
                    },
                    analyticsLocations: l
                })
            },
            "aria-label": T.intl.formatToPlainString(T.t.yi41qQ, {
                orbPrice: r[0].amount
            }),
            fullWidth: !0
        })
    },
    B = e => {
        let {
            handlePreviewButtonClick: t,
            text: r
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), t(e)
            },
            text: r ?? T.intl.string(T.t.GpnHfH),
            fullWidth: !0
        })
    },
    D = e => {
        let {
            product: t,
            cardRef: r,
            selectedVariantIndex: i,
            onClick: u,
            text: o,
            prioritizedCurrency: c,
            onClickAnalytics: d
        } = e, f = (0, l.bG)([h.default], () => h.default.getCurrentUser()), A = m.Ay.canUseCollectibles(f), {
            isPurchased: b,
            isPartiallyOwnedBundle: k
        } = (0, C.h)(t), j = (0, p.G0)(t), R = (0, p.tt)(t), {
            isDisabled: _
        } = (0, g.I)(t.skuId), T = (0, p.Zu)({
            product: t,
            isPartiallyOwnedBundle: k,
            isPurchased: b
        }), L = (0, E.V_)(t), D = null != L, {
            shouldCheckoutWithOrbs: U,
            hasSufficientOrbs: H,
            checkoutEligiblePrices: W
        } = (0, y.F)({
            product: t,
            isPremiumUser: A,
            prioritizedCurrency: c,
            hasDiscountOffer: D
        }), {
            analyticsLocations: G
        } = (0, s.Ay)(a.A.COLLECTIBLES_SHOP_CARD), F = (0, I.ql)(t, a.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [z, Y] = (0, l.yK)([x.A], () => [x.A.isClaiming === t.skuId, null != x.A.isClaiming && x.A.isClaiming !== t.skuId]), {
            handleUseNow: K,
            isApplying: Q
        } = (0, v.p)({
            product: t
        });
        if (null != u) return (0, n.jsx)(S, {
            onClick: u,
            skuId: t.skuId,
            text: o
        });
        if (j && !A && !R) return (0, n.jsx)(N, {
            isClaimPremiumProductDisabled: Y,
            text: o
        });
        if (!T || _) return (0, n.jsx)(P, {
            handlePreviewButtonClick: F,
            text: o
        });
        if (b) return (0, n.jsx)(V, {
            handleUseNow: K,
            isApplying: Q,
            text: o
        });
        if (j) return (0, n.jsx)(w, {
            product: t,
            isClaimPremiumProductDisabled: Y,
            isClaiming: z,
            analyticsLocations: G,
            text: o,
            onClickAnalytics: d
        });
        if (U && H) return (0, n.jsx)(M, {
            product: t,
            checkoutEligiblePrices: W,
            analyticsLocations: G,
            selectedVariantIndex: i,
            text: o,
            onClickAnalytics: d
        });
        if (U && !H)
            if (W.length > 1) return (0, n.jsx)(B, {
                handlePreviewButtonClick: F,
                text: o
            });
            else return (0, n.jsx)(P, {
                handlePreviewButtonClick: F,
                text: o
            });
        return (0, n.jsx)(O, {
            product: t,
            cardRef: r,
            isPremiumUser: A,
            analyticsLocations: G,
            selectedVariantIndex: i,
            hasDiscountOffer: D,
            discountOfferAmount: L,
            text: o
        })
    },
    U = e => {
        let {
            skuId: t,
            cardRef: r,
            onClick: l,
            text: i,
            prioritizedCurrency: a,
            onClickAnalytics: s
        } = e, u = (0, I.Vm)(t), o = (0, A.Q)(u);
        if (null == u) return null;
        let c = (0, b.rb)(u, o);
        return (0, n.jsx)(D, {
            product: c,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: i,
            prioritizedCurrency: a,
            onClickAnalytics: s
        })
    }