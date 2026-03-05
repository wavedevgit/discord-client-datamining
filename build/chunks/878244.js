/** chunk id: 878244, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => y,
    O: () => k
});
var n = i(627968),
    s = i(64700),
    r = i(575593),
    l = i(635358),
    a = i(311907),
    o = i(793574),
    u = i(587895),
    c = i(44120),
    d = i(317560),
    g = i(533406),
    I = i(954571),
    m = i(594832),
    A = i(146423),
    f = i(460442),
    _ = i(662349),
    p = i(754804),
    S = i(479026),
    T = i(699976),
    h = i(652215),
    E = i(788868),
    C = i(607216);
let O = E.vQ.DM_CHANNEL_WISHLIST,
    R = T.Z.SIZE_133;

function k(t) {
    let {
        spec: e = R
    } = t;
    return (0, n.jsx)(A.$, {
        spec: e
    })
}

function L(t) {
    let {
        sku: e,
        onDetailsClick: i,
        onPurchaseClick: r,
        onOpenWishlist: l,
        wishlistOwner: a,
        wishlistId: o,
        source: u,
        hasMultipleSources: c,
        totalUnownedWishlistItems: d,
        index: g,
        skuPreviewStyle: S,
        maxWishlistLength: T,
        spec: E = R,
        guildId: C,
        channelId: O
    } = t, k = s.useMemo(() => ({
        collectibles: {
            nameplate: {
                width: 136
            }
        }
    }), []), [L, M] = s.useState(!1), b = g === T - 1 && d > T, y = s.useCallback(() => {
        if (b) return void l();
        let t = u === m.uS.WISHLIST ? "wishlist" : "shop";
        I.default.track(h.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: t,
            wishlist_id: u === m.uS.WISHLIST ? o : null,
            product_line: e.productLine
        }), i?.()
    }, [i, o, u, e.id, e.productLine, l, b]), G = s.useCallback(() => {
        let t = u === m.uS.WISHLIST ? "wishlist" : "shop";
        I.default.track(h.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: t,
            wishlist_id: u === m.uS.WISHLIST ? o : null,
            product_line: e.productLine
        }), r?.()
    }, [r, e.id, e.productLine, u, o]), {
        label: N,
        icon: w,
        isPromptingPurchase: v
    } = (0, _.hB)({
        sku: e,
        wishlistOwner: a,
        isOwned: !1,
        location: "DM Gifting Modal Wishlist Item Card"
    });
    return (0, n.jsxs)(A.A, {
        sku: e,
        user: a,
        spec: E,
        skuPreviewStyle: S,
        options: k,
        onClick: y,
        onHoverOrFocusChange: M,
        children: [c && u === m.uS.WISHLIST && (0, n.jsx)(p.X, {
            spec: E,
            users: [a],
            guildId: C ?? void 0,
            channelId: O ?? void 0
        }), !b && (0, n.jsx)(_.AJ, {
            spec: E,
            onClick: v ? G : y,
            label: N,
            icon: w,
            isHoveringOrFocusing: L
        }), b && (0, n.jsx)(f.Yb, {
            count: d - T + 1
        })]
    })
}

function M(t) {
    let {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: l,
        hasMultipleSources: c,
        source: I,
        ...m
    } = t, A = (0, a.bG)([u.A], () => u.A.getApplication(e.applicationId)), f = s.useCallback(() => {
        l?.(), null != A && null != A.guildId && (0, d.R)({
            skuId: e.id,
            applicationId: e.applicationId,
            guildId: A.guildId,
            isStorefront: !1,
            analyticsLocations: r ?? []
        })
    }, [r, A, l, e.applicationId, e.id]), _ = s.useCallback(() => {
        l?.(), (0, g.a)(e, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: O
        }, {
            analyticsLocations: [...r ?? [], o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [e, i, r, l]);
    return (0, n.jsx)(L, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onDetailsClick: f,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: I,
        ...m
    })
}

function b(t) {
    let {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onClick: o,
        hasMultipleSources: u,
        source: d,
        ...g
    } = t, I = (0, S.e)({
        sku: e,
        analyticsLocations: a
    }), m = s.useMemo(() => null != e.bundledSkus && e.bundledSkus.length > 0 ? C.E : e.tenantMetadata?.collectibles?.type === r.R.NAMEPLATE ? C.q : void 0, [e.bundledSkus, e.tenantMetadata?.collectibles?.type]), A = s.useCallback(() => {
        o?.(), (0, c.A)({
            skuId: e.id,
            isGift: !0,
            giftingOrigin: O,
            analyticsLocations: a ?? [],
            giftRecipient: i,
            variantsReturnStyle: l.g.VARIANTS_GROUP
        })
    }, [o, e.id, a, i]), f = s.useCallback(() => {
        o?.(), I()
    }, [o, I]);
    return (0, n.jsx)(L, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onDetailsClick: f,
        onPurchaseClick: A,
        hasMultipleSources: u,
        source: d,
        skuPreviewStyle: m,
        ...g
    })
}

function y(t) {
    let {
        sku: e,
        ...i
    } = t;
    switch (e.productLine) {
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(M, {
                sku: e,
                ...i
            });
        case h.EZt.COLLECTIBLES:
            return (0, n.jsx)(b, {
                sku: e,
                ...i
            });
        default:
            return null
    }
}