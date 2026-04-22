/** chunk id: 834384 params = (module,exports,require) **/
r.d(e, {
    A: () => w
});
var n = r(627968);
r(64700);
var i = r(417597),
    l = r(397927),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    o = r(725807),
    c = r(106799),
    d = r(652165),
    k = r(287809),
    p = r(927578),
    C = r(979286),
    m = r(4227),
    x = r(298072),
    I = r(993408),
    A = r(640634),
    g = r(450481),
    h = r(740076),
    _ = r(466459),
    f = r(623373),
    T = r(561769),
    v = r(766172),
    E = r(525723),
    j = r(57020),
    y = r(61750),
    P = r(758836),
    b = r(788868),
    R = r(985018),
    N = r(40577);
let O = t => {
        let {
            product: e,
            cardRef: r,
            isPremiumUser: i,
            analyticsLocations: s,
            selectedVariantIndex: a,
            hasDiscountOffer: o,
            discountOfferAmount: c,
            text: d,
            onTrackClick: k
        } = t, p = (0, I.R8)(e, i, !1), C = o ? R.intl.formatToPlainString(R.t["5U5RB5"], {
            discountOfferAmount: c
        }) : R.intl.formatToPlainString(R.t["cNSL/j"], {
            price: p
        });
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            onClick: t => {
                t.stopPropagation(), k?.(P.sH.BUY_WITH_FIAT), (0, u.A)({
                    skuId: (0, v.Y)({
                        product: e,
                        selectedVariantIndex: a
                    }),
                    returnRef: r,
                    analyticsLocations: s
                })
            },
            text: d ?? C,
            fullWidth: !0
        })
    },
    L = t => {
        let {
            isClaimPremiumProductDisabled: e,
            text: r,
            onTrackClick: i
        } = t;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: e,
            onClick: t => {
                t.stopPropagation(), i?.(P.sH.UNLOCK_WITH_NITRO)
            },
            textOptions: {
                textOverride: r ?? R.intl.string(R.t.sEAnVH)
            },
            subscriptionTier: b.pe.TIER_2,
            showGradient: !0
        })
    },
    S = t => {
        let {
            handlePreviewButtonClick: e,
            text: r,
            onTrackClick: i
        } = t;
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            onClick: t => {
                t.stopPropagation(), i?.(P.sH.VIEW_DETAILS), e(t)
            },
            text: r ?? R.intl.string(R.t.FdGl5A),
            fullWidth: !0
        })
    },
    B = t => {
        let {
            handleUseNow: e,
            isApplying: r,
            text: i,
            onTrackClick: s
        } = t;
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            onClick: t => {
                t.stopPropagation(), s?.(P.sH.USE_NOW), e()
            },
            loading: r,
            text: i ?? R.intl.string(R.t.MAS7uK),
            fullWidth: !0
        })
    },
    H = t => {
        let {
            skuId: e,
            onClick: r,
            text: i
        } = t;
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            onClick: t => {
                t.stopPropagation(), r(e)
            },
            text: i ?? R.intl.string(R.t.FdGl5A),
            fullWidth: !0
        })
    },
    V = t => {
        let {
            product: e,
            isClaimPremiumProductDisabled: r,
            isClaiming: i,
            analyticsLocations: s,
            text: a,
            onClickAnalytics: u,
            onTrackClick: o
        } = t, c = async () => {
            u?.("claim premium product button"), o?.(P.sH.ADD_TO_COLLECTION), await (0, C.iJ)(e.skuId), (0, y.A)({
                product: e,
                analyticsLocations: s,
                purchaseType: P.gs.PREMIUM_PURCHASE
            })
        };
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            onClick: t => {
                t.stopPropagation(), c()
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: R.intl.string(R.t["TYw+9s"]),
            loadingFinishedLabel: R.intl.string(R.t.Pg1UP5),
            text: a ?? R.intl.string(R.t.zp6caO),
            fullWidth: !0
        })
    },
    U = t => {
        let {
            product: e,
            checkoutEligiblePrices: r,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: u,
            onTrackClick: o
        } = t, k = (0, A.l)("collectibles_shop_product_card");
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            text: a ?? R.intl.format(k ? R.t.JC15qj : R.t.lOtBOI, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(c.A, {
                    className: N.f
                })
            }),
            onClick: t => {
                t.stopPropagation(), u?.("claim with orbs button"), o?.(P.sH.BUY_WITH_ORBS), (0, d.B4)({
                    skuId: (0, v.Y)({
                        product: e,
                        selectedVariantIndex: s
                    }),
                    onCheckoutSuccess: t => {
                        let {
                            entitlements: r
                        } = t;
                        (0, C.gB)(), (0, y.A)({
                            product: e,
                            analyticsLocations: i,
                            itemConsumed: r[0]?.consumed,
                            purchaseType: P.gs.ORB
                        })
                    },
                    analyticsLocations: i
                })
            },
            "aria-label": R.intl.formatToPlainString(R.t.yi41qQ, {
                orbPrice: r[0].amount
            }),
            fullWidth: !0
        })
    },
    D = t => {
        let {
            handlePreviewButtonClick: e,
            text: r,
            onTrackClick: i
        } = t;
        return (0, n.jsx)(l.Button, {
            variant: "primary",
            onClick: t => {
                t.stopPropagation(), i?.(P.sH.PAYMENT_OPTIONS), e(t)
            },
            text: r ?? R.intl.string(R.t.GpnHfH),
            fullWidth: !0
        })
    },
    W = t => {
        let {
            product: e,
            cardRef: r,
            selectedVariantIndex: l,
            onClick: u,
            text: o,
            prioritizedCurrency: c,
            onClickAnalytics: d,
            onTrackClick: C
        } = t, x = (0, i.bG)([k.default], () => k.default.getCurrentUser()), A = p.Ay.canUseCollectibles(x), {
            isPurchased: f,
            isPartiallyOwnedBundle: v
        } = (0, _.h)(e), y = (0, I.G0)(e), P = (0, I.tt)(e), {
            isDisabled: b
        } = (0, h.I)(e.skuId), R = (0, I.Zu)({
            product: e,
            isPartiallyOwnedBundle: v,
            isPurchased: f
        }), N = (0, E.V_)(e), W = null != N, {
            shouldCheckoutWithOrbs: w,
            hasSufficientOrbs: M,
            checkoutEligiblePrices: G,
            isOrbExclusive: F
        } = (0, j.F)({
            product: e,
            isPremiumUser: A,
            prioritizedCurrency: c,
            hasDiscountOffer: W
        }), {
            analyticsLocations: z
        } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD), Q = (0, T.ql)(e, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [Y, q] = (0, i.yK)([m.A], () => [m.A.isClaiming === e.skuId, null != m.A.isClaiming && m.A.isClaiming !== e.skuId]), {
            handleUseNow: X,
            isApplying: K
        } = (0, g.p)({
            product: e
        });
        if (null != u) return (0, n.jsx)(H, {
            onClick: u,
            skuId: e.skuId,
            text: o
        });
        if (y && !A && !P) return (0, n.jsx)(L, {
            isClaimPremiumProductDisabled: q,
            text: o,
            onTrackClick: C
        });
        if (!R || b) return (0, n.jsx)(S, {
            handlePreviewButtonClick: Q,
            text: o,
            onTrackClick: C
        });
        if (f) return (0, n.jsx)(B, {
            handleUseNow: X,
            isApplying: K,
            text: o,
            onTrackClick: C
        });
        if (y) return (0, n.jsx)(V, {
            product: e,
            isClaimPremiumProductDisabled: q,
            isClaiming: Y,
            analyticsLocations: z,
            text: o,
            onClickAnalytics: d,
            onTrackClick: C
        });
        if (w && M) return (0, n.jsx)(U, {
            product: e,
            checkoutEligiblePrices: G,
            analyticsLocations: z,
            selectedVariantIndex: l,
            text: o,
            onClickAnalytics: d,
            onTrackClick: C
        });
        if (w && !M)
            if (G.length > 1) return (0, n.jsx)(D, {
                handlePreviewButtonClick: Q,
                text: o,
                onTrackClick: C
            });
            else return (0, n.jsx)(S, {
                handlePreviewButtonClick: Q,
                text: o,
                onTrackClick: C
            });
        return F ? (0, n.jsx)(S, {
            handlePreviewButtonClick: Q,
            text: o,
            onTrackClick: C
        }) : (0, n.jsx)(O, {
            product: e,
            cardRef: r,
            isPremiumUser: A,
            analyticsLocations: z,
            selectedVariantIndex: l,
            hasDiscountOffer: W,
            discountOfferAmount: N,
            text: o,
            onTrackClick: C
        })
    },
    w = t => {
        let {
            skuId: e,
            cardRef: r,
            onClick: i,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u
        } = t, o = (0, T.Vm)(e), c = (0, x.Q)(o);
        if (null == o) return null;
        let d = (0, f.rb)(o, c);
        return (0, n.jsx)(W, {
            product: d,
            cardRef: r,
            selectedVariantIndex: c,
            onClick: i,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u
        })
    }