/** chunk id: 834384 params = (module,exports,require) **/
r.d(t, {
    A: () => D
});
var n = r(627968);
r(64700);
var l = r(417597),
    i = r(397927),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    o = r(725807),
    d = r(106799),
    c = r(652165),
    p = r(287809),
    m = r(927578),
    x = r(979286),
    g = r(4227),
    h = r(298072),
    C = r(993408),
    A = r(640634),
    k = r(450481),
    I = r(740076),
    v = r(466459),
    f = r(623373),
    _ = r(561769),
    y = r(766172),
    j = r(525723),
    E = r(57020),
    b = r(61750),
    R = r(758836),
    T = r(788868),
    P = r(985018),
    S = r(270001);
let V = e => {
        let {
            product: t,
            cardRef: r,
            isPremiumUser: l,
            analyticsLocations: s,
            selectedVariantIndex: a,
            hasDiscountOffer: o,
            discountOfferAmount: d,
            text: c
        } = e, p = (0, C.R8)(t, l, !1), m = o ? P.intl.formatToPlainString(P.t["5U5RB5"], {
            discountOfferAmount: d
        }) : P.intl.formatToPlainString(P.t["cNSL/j"], {
            price: p
        });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), (0, u.A)({
                    skuId: (0, y.Y)({
                        product: t,
                        selectedVariantIndex: a
                    }),
                    returnRef: r,
                    analyticsLocations: s
                })
            },
            text: c ?? m,
            fullWidth: !0
        })
    },
    L = e => {
        let {
            isClaimPremiumProductDisabled: t,
            text: r
        } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: e => e.stopPropagation(),
            textOptions: {
                textOverride: r ?? P.intl.string(P.t.sEAnVH)
            },
            subscriptionTier: T.pe.TIER_2,
            showGradient: !0
        })
    },
    N = e => {
        let {
            handlePreviewButtonClick: t,
            text: r
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), t(e)
            },
            text: r ?? P.intl.string(P.t.FdGl5A),
            fullWidth: !0
        })
    },
    O = e => {
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
            text: l ?? P.intl.string(P.t.MAS7uK),
            fullWidth: !0
        })
    },
    B = e => {
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
            text: l ?? P.intl.string(P.t.FdGl5A),
            fullWidth: !0
        })
    },
    w = e => {
        let {
            product: t,
            isClaimPremiumProductDisabled: r,
            isClaiming: l,
            analyticsLocations: s,
            text: a,
            onClickAnalytics: u
        } = e, o = async () => {
            u?.("claim premium product button"), await (0, x.iJ)(t.skuId), (0, b.A)({
                product: t,
                analyticsLocations: s,
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
            loadingStartedLabel: P.intl.string(P.t["TYw+9s"]),
            loadingFinishedLabel: P.intl.string(P.t.Pg1UP5),
            text: a ?? P.intl.string(P.t.zp6caO),
            fullWidth: !0
        })
    },
    H = e => {
        let {
            product: t,
            checkoutEligiblePrices: r,
            analyticsLocations: l,
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: u
        } = e, o = (0, A.l)("collectibles_shop_product_card");
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            text: a ?? P.intl.format(o ? P.t.JC15qj : P.t.lOtBOI, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(d.A, {
                    className: S.f
                })
            }),
            onClick: e => {
                e.stopPropagation(), u?.("claim with orbs button"), (0, c.B4)({
                    skuId: (0, y.Y)({
                        product: t,
                        selectedVariantIndex: s
                    }),
                    onCheckoutSuccess: e => {
                        let {
                            entitlements: r
                        } = e;
                        (0, x.gB)(), (0, b.A)({
                            product: t,
                            analyticsLocations: l,
                            itemConsumed: r[0]?.consumed,
                            purchaseType: R.gs.ORB
                        })
                    },
                    analyticsLocations: l
                })
            },
            "aria-label": P.intl.formatToPlainString(P.t.yi41qQ, {
                orbPrice: r[0].amount
            }),
            fullWidth: !0
        })
    },
    U = e => {
        let {
            handlePreviewButtonClick: t,
            text: r
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: e => {
                e.stopPropagation(), t(e)
            },
            text: r ?? P.intl.string(P.t.GpnHfH),
            fullWidth: !0
        })
    },
    M = e => {
        let {
            product: t,
            cardRef: r,
            selectedVariantIndex: i,
            onClick: u,
            text: o,
            prioritizedCurrency: d,
            onClickAnalytics: c
        } = e, x = (0, l.bG)([p.default], () => p.default.getCurrentUser()), h = m.Ay.canUseCollectibles(x), {
            isPurchased: A,
            isPartiallyOwnedBundle: f
        } = (0, v.h)(t), y = (0, C.G0)(t), b = (0, C.tt)(t), {
            isDisabled: R
        } = (0, I.I)(t.skuId), T = (0, C.Zu)({
            product: t,
            isPartiallyOwnedBundle: f,
            isPurchased: A
        }), P = (0, j.V_)(t), S = null != P, {
            shouldCheckoutWithOrbs: M,
            hasSufficientOrbs: D,
            checkoutEligiblePrices: G
        } = (0, E.F)({
            product: t,
            isPremiumUser: h,
            prioritizedCurrency: d,
            hasDiscountOffer: S
        }), {
            analyticsLocations: W
        } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD), F = (0, _.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c), [z, Q] = (0, l.yK)([g.A], () => [g.A.isClaiming === t.skuId, null != g.A.isClaiming && g.A.isClaiming !== t.skuId]), {
            handleUseNow: q,
            isApplying: X
        } = (0, k.p)({
            product: t
        });
        if (null != u) return (0, n.jsx)(B, {
            onClick: u,
            skuId: t.skuId,
            text: o
        });
        if (y && !h && !b) return (0, n.jsx)(L, {
            isClaimPremiumProductDisabled: Q,
            text: o
        });
        if (!T || R) return (0, n.jsx)(N, {
            handlePreviewButtonClick: F,
            text: o
        });
        if (A) return (0, n.jsx)(O, {
            handleUseNow: q,
            isApplying: X,
            text: o
        });
        if (y) return (0, n.jsx)(w, {
            product: t,
            isClaimPremiumProductDisabled: Q,
            isClaiming: z,
            analyticsLocations: W,
            text: o,
            onClickAnalytics: c
        });
        if (M && D) return (0, n.jsx)(H, {
            product: t,
            checkoutEligiblePrices: G,
            analyticsLocations: W,
            selectedVariantIndex: i,
            text: o,
            onClickAnalytics: c
        });
        if (M && !D)
            if (G.length > 1) return (0, n.jsx)(U, {
                handlePreviewButtonClick: F,
                text: o
            });
            else return (0, n.jsx)(N, {
                handlePreviewButtonClick: F,
                text: o
            });
        return (0, n.jsx)(V, {
            product: t,
            cardRef: r,
            isPremiumUser: h,
            analyticsLocations: W,
            selectedVariantIndex: i,
            hasDiscountOffer: S,
            discountOfferAmount: P,
            text: o
        })
    },
    D = e => {
        let {
            skuId: t,
            cardRef: r,
            onClick: l,
            text: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        } = e, u = (0, _.Vm)(t), o = (0, h.Q)(u);
        if (null == u) return null;
        let d = (0, f.rb)(u, o);
        return (0, n.jsx)(M, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: i,
            prioritizedCurrency: s,
            onClickAnalytics: a
        })
    }