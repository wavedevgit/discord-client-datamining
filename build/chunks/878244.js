/** chunk id: 878244 params = (module,exports,require) **/
e.d(i, {
    A: () => y,
    O: () => b
});
var n = e(627968),
    a = e(64700),
    l = e(503698),
    s = e.n(l),
    r = e(575593),
    o = e(311907),
    c = e(793574),
    u = e(587895),
    d = e(44120),
    g = e(317560),
    I = e(533406),
    _ = e(954571),
    f = e(594832),
    p = e(146423),
    A = e(121700),
    T = e(460442),
    S = e(662349),
    h = e(754804),
    C = e(479026),
    E = e(699976),
    L = e(652215),
    O = e(788868),
    m = e(804810);
let k = O.vQ.DM_CHANNEL_WISHLIST,
    G = E.Z.SIZE_133;

function b(t) {
    let {
        spec: i = G
    } = t;
    return (0, n.jsx)(p.$, {
        spec: i
    })
}

function N(t) {
    let {
        sku: i,
        onDetailsClick: e,
        onPurchaseClick: l,
        onOpenWishlist: r,
        wishlistOwner: o,
        wishlistId: c,
        source: u,
        hasMultipleSources: d,
        skuPreviewStyle: g,
        skuPreviewHoverStyle: I,
        spec: C = G,
        guildId: E,
        channelId: O,
        numMoreItems: k
    } = t, [b, N] = a.useState(!1), M = null != k && k > 0, R = a.useCallback(() => {
        if (M) return void r();
        let t = u === f.uS.WISHLIST ? "wishlist" : "shop";
        _.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: i.id,
            item_source: t,
            wishlist_id: u === f.uS.WISHLIST ? c : null,
            product_line: i.productLine
        }), e?.()
    }, [e, c, u, i.id, i.productLine, r, M]), y = a.useCallback(() => {
        let t = u === f.uS.WISHLIST ? "wishlist" : "shop";
        _.default.track(L.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: i.id,
            item_source: t,
            wishlist_id: u === f.uS.WISHLIST ? c : null,
            product_line: i.productLine
        }), l?.()
    }, [l, i.id, i.productLine, u, c]), {
        label: P,
        icon: w,
        isPromptingPurchase: v
    } = (0, S.hB)({
        sku: i,
        wishlistOwner: o,
        isOwned: !1,
        location: "DM Gifting Modal Wishlist Item Card"
    });
    return (0, n.jsxs)(p.A, {
        sku: i,
        user: o,
        spec: C,
        skuPreviewStyle: s()(m.e, g, b ? I : void 0),
        onClick: R,
        onHoverOrFocusChange: N,
        children: [d && u === f.uS.WISHLIST && (0, n.jsx)(h.X, {
            spec: C,
            users: [o],
            guildId: E ?? void 0,
            channelId: O ?? void 0
        }), (0, n.jsx)(A.A, {
            spec: C,
            sku: i,
            isCardHovered: b && !M,
            location: "DMGiftingModalWishlistItemCardBase"
        }), !M && (0, n.jsx)(S.AJ, {
            spec: C,
            onClick: v ? y : R,
            label: P,
            icon: w,
            isHoveringOrFocusing: b
        }), M && (0, n.jsx)(T.Yb, {
            count: k
        })]
    })
}

function M(t) {
    let {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: l,
        onClick: s,
        hasMultipleSources: r,
        source: d,
        ..._
    } = t, f = (0, o.bG)([u.A], () => u.A.getApplication(i.applicationId)), p = a.useCallback(() => {
        s?.(), null != f && null != f.guildId && (0, g.R)({
            skuId: i.id,
            applicationId: i.applicationId,
            guildId: f.guildId,
            isStorefront: !1,
            analyticsLocations: l ?? []
        })
    }, [l, f, s, i.applicationId, i.id]), A = a.useCallback(() => {
        s?.(), (0, I.a)(i, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: k
        }, {
            analyticsLocations: [...l ?? [], c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [i, e, l, s]);
    return (0, n.jsx)(N, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: p,
        onPurchaseClick: A,
        hasMultipleSources: r,
        source: d,
        ..._
    })
}

function R(t) {
    let {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: l,
        onClick: o,
        hasMultipleSources: c,
        source: u,
        ...g
    } = t, I = (0, C.e)({
        sku: i,
        analyticsLocations: l
    }), _ = a.useCallback(() => {
        o?.(), (0, d.A)({
            skuId: i.id,
            isGift: !0,
            giftingOrigin: k,
            analyticsLocations: l ?? [],
            giftRecipient: e
        })
    }, [o, i.id, l, e]), f = a.useCallback(() => {
        o?.(), I()
    }, [o, I]);
    return (0, n.jsx)(N, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: f,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: s()({
            [m.m]: null != i.bundledSkus && i.bundledSkus.length > 0 || i.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE && i.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT
        }),
        ...g
    })
}

function y(t) {
    let {
        sku: i,
        ...e
    } = t;
    switch (i.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(M, {
                sku: i,
                ...e
            });
        case L.EZt.COLLECTIBLES:
            return (0, n.jsx)(R, {
                sku: i,
                ...e
            });
        default:
            return null
    }
}