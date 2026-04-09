/** chunk id: 878244 params = (module,exports,require) **/
t.d(e, {
    A: () => Y,
    O: () => P
});
var s = t(627968),
    n = t(64700),
    r = t(503698),
    c = t.n(r),
    o = t(835245),
    l = t(172218),
    u = t(575593),
    a = t(311907),
    d = t(444927),
    _ = t(793574),
    p = t(587895),
    f = t(44120),
    I = t(532794),
    h = t(317560),
    k = t(533406),
    S = t(954571),
    w = t(661492),
    T = t(299679),
    C = t(570050),
    L = t(95817),
    E = t(594832),
    m = t(146423),
    g = t(121700),
    A = t(460442),
    O = t(662349),
    x = t(754804),
    y = t(479026),
    R = t(699976),
    H = t(652215),
    M = t(788868),
    j = t(985018),
    v = t(313248),
    G = t(538189);
let D = M.vQ.DM_CHANNEL_WISHLIST,
    N = R.Z.SIZE_133;

function P(i) {
    let {
        spec: e = N
    } = i;
    return (0, s.jsx)(m.$, {
        spec: e
    })
}

function b(i) {
    let {
        sku: e,
        onDetailsClick: t,
        onPurchaseClick: r,
        onOpenWishlist: u,
        wishlistOwner: a,
        wishlistId: _,
        source: p,
        hasMultipleSources: f,
        skuPreviewStyle: I,
        skuPreviewHoverStyle: h,
        skuAssetHoverClassName: k,
        spec: y = N,
        guildId: R,
        channelId: M,
        numMoreItems: G
    } = i, [D, P] = n.useState(!1), b = (0, T.Ar)(), F = (0, d.A)(() => (0, o.A)()), W = null != G && G > 0, {
        handleVisibilityChange: B
    } = (0, L.G)(F), Y = (0, l.K)(B, .5, !W);
    (0, C.J)(D && !W, F);
    let U = n.useCallback(() => {
            if (W) return void u();
            let i = p === E.uS.WISHLIST ? "wishlist" : "shop";
            S.default.track(H.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: p === E.uS.WISHLIST ? _ : null,
                product_line: e.productLine
            }), S.default.track(H.HAw.WISHLIST_ITEM_CLICKED, {
                sku_id: e.id,
                wishlist_id: _,
                wishlist_owner_id: b?.wishlistOwnerId,
                surface: b?.surface,
                position_in_section: b?.positionInSection,
                item_source: b?.itemSource,
                click_type: "details",
                product_line: e.productLine,
                card_id: F,
                impression_session_id: b?.impressionSessionId,
                location_stack: b?.analyticsLocations
            }), t?.()
        }, [t, _, p, e.id, e.productLine, u, W, b, F]),
        Z = n.useCallback(() => {
            let i = p === E.uS.WISHLIST ? "wishlist" : "shop";
            S.default.track(H.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: i,
                wishlist_id: p === E.uS.WISHLIST ? _ : null,
                product_line: e.productLine
            }), S.default.track(H.HAw.WISHLIST_ITEM_CLICKED, {
                sku_id: e.id,
                wishlist_id: _,
                wishlist_owner_id: b?.wishlistOwnerId,
                surface: b?.surface,
                position_in_section: b?.positionInSection,
                item_source: b?.itemSource,
                click_type: "gift",
                product_line: e.productLine,
                card_id: F,
                impression_session_id: b?.impressionSessionId,
                location_stack: b?.analyticsLocations
            }), r?.()
        }, [r, e.id, e.productLine, p, _, b, F]),
        {
            label: K,
            icon: J,
            isPromptingPurchase: z
        } = (0, O.h)({
            sku: e,
            wishlistOwner: a,
            isOwned: !1,
            location: "DM Gifting Modal Wishlist Item Card"
        });
    return (0, s.jsx)("div", {
        ref: Y,
        children: (0, s.jsxs)(m.A, {
            sku: e,
            user: a,
            spec: y,
            skuPreviewStyle: c()(v.e, I, D ? h : void 0),
            skuAssetClassName: D ? k : void 0,
            onClick: U,
            "aria-label": W ? j.intl.formatToPlainString(j.t["8uYD+I"], {
                username: a.username
            }) : j.intl.formatToPlainString(j.t.ZBB4Ty, {
                productName: (0, w.TC)(e)
            }),
            onHoverOrFocusChange: P,
            children: [(0, s.jsx)(g.A, {
                spec: y,
                sku: e,
                isCardHovered: D && !W,
                location: "DMGiftingModalWishlistItemCardBase",
                replacedElement: f && p === E.uS.WISHLIST ? (0, s.jsx)(x.X, {
                    spec: y,
                    users: [a],
                    guildId: R ?? void 0,
                    channelId: M ?? void 0
                }) : null
            }), !W && (0, s.jsx)(O.A, {
                spec: y,
                onClick: z ? Z : U,
                label: K,
                icon: J,
                isHoveringOrFocusing: D
            }), W && (0, s.jsx)(A.Yb, {
                count: G
            })]
        })
    })
}

function F(i) {
    let {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onClick: c,
        hasMultipleSources: o,
        source: l,
        ...u
    } = i, d = (0, a.bG)([p.A], () => p.A.getApplication(e.applicationId)), f = n.useCallback(() => {
        c?.(), null != d && null != d.guildId && (0, h.R)({
            skuId: e.id,
            applicationId: e.applicationId,
            isStorefront: !1,
            giftRecipient: t,
            giftingOrigin: D,
            analyticsLocations: r ?? []
        })
    }, [r, d, c, e.applicationId, e.id, t]), I = n.useCallback(() => {
        c?.(), (0, k.a)(e, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: D
        }, {
            analyticsLocations: [...r ?? [], _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [e, t, r, c]);
    return (0, s.jsx)(b, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: I,
        hasMultipleSources: o,
        source: l,
        ...u
    })
}

function W(i) {
    let {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onClick: o,
        hasMultipleSources: l,
        source: a,
        ...d
    } = i, _ = (0, y.e)({
        sku: e,
        giftRecipient: t,
        giftingOrigin: D,
        analyticsLocations: r
    }), p = n.useCallback(() => {
        o?.(), (0, f.A)({
            skuId: e.id,
            isGift: !0,
            giftingOrigin: D,
            analyticsLocations: r ?? [],
            giftRecipient: t
        })
    }, [o, e.id, r, t]), I = n.useCallback(() => {
        o?.(), _()
    }, [o, _]);
    return (0, s.jsx)(b, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: I,
        onPurchaseClick: p,
        hasMultipleSources: l,
        source: a,
        skuPreviewHoverStyle: c()({
            [v.m]: null != e.bundledSkus && e.bundledSkus.length > 0 || e.tenantMetadata?.collectibles?.type !== u.R.NAMEPLATE && e.tenantMetadata?.collectibles?.type !== u.R.PROFILE_EFFECT
        }),
        ...d
    })
}

function B(i) {
    let {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onClick: c,
        hasMultipleSources: o,
        source: l,
        ...u
    } = i, a = n.useCallback(() => {
        c?.(), (0, I.A)({
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: D,
            subscriptionTier: e.id,
            analyticsLocations: r ?? []
        })
    }, [c, e.id, t, r]);
    return (0, s.jsx)(b, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: o,
        source: l,
        skuPreviewStyle: G.MO,
        skuAssetHoverClassName: G.iR,
        ...u
    })
}

function Y(i) {
    let {
        sku: e,
        ...t
    } = i;
    switch (e.productLine) {
        case H.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(F, {
                sku: e,
                ...t
            });
        case H.EZt.COLLECTIBLES:
            return (0, s.jsx)(W, {
                sku: e,
                ...t
            });
        case H.EZt.PREMIUM:
            return (0, s.jsx)(B, {
                sku: e,
                ...t
            });
        default:
            return null
    }
}