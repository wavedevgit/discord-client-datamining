/** chunk id: 878244 params = (module,exports,require) **/
e.d(i, {
    A: () => b,
    O: () => M
});
var n = e(627968),
    a = e(64700),
    s = e(503698),
    l = e.n(s),
    r = e(575593),
    o = e(311907),
    c = e(793574),
    u = e(587895),
    d = e(44120),
    I = e(317560),
    g = e(533406),
    _ = e(954571),
    p = e(594832),
    A = e(146423),
    f = e(121700),
    T = e(460442),
    S = e(662349),
    h = e(754804),
    L = e(479026),
    E = e(699976),
    C = e(652215),
    O = e(788868),
    k = e(804810);
let m = O.vQ.DM_CHANNEL_WISHLIST,
    G = E.Z.SIZE_133;

function M(t) {
    let {
        spec: i = G
    } = t;
    return (0, n.jsx)(A.$, {
        spec: i
    })
}

function N(t) {
    let {
        sku: i,
        onDetailsClick: e,
        onPurchaseClick: s,
        onOpenWishlist: r,
        wishlistOwner: o,
        wishlistId: c,
        source: u,
        hasMultipleSources: d,
        skuPreviewStyle: I,
        skuPreviewHoverStyle: g,
        spec: L = G,
        guildId: E,
        channelId: O,
        numMoreItems: m
    } = t, [M, N] = a.useState(!1), R = null != m && m > 0, y = a.useCallback(() => {
        if (R) return void r();
        let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
        _.default.track(C.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: i.id,
            item_source: t,
            wishlist_id: u === p.uS.WISHLIST ? c : null,
            product_line: i.productLine
        }), e?.()
    }, [e, c, u, i.id, i.productLine, r, R]), b = a.useCallback(() => {
        let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
        _.default.track(C.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: i.id,
            item_source: t,
            wishlist_id: u === p.uS.WISHLIST ? c : null,
            product_line: i.productLine
        }), s?.()
    }, [s, i.id, i.productLine, u, c]), {
        label: w,
        icon: P,
        isPromptingPurchase: x
    } = (0, S.hB)({
        sku: i,
        wishlistOwner: o,
        isOwned: !1,
        location: "DM Gifting Modal Wishlist Item Card"
    });
    return (0, n.jsxs)(A.A, {
        sku: i,
        user: o,
        spec: L,
        skuPreviewStyle: l()(k.e, I, M ? g : void 0),
        onClick: y,
        onHoverOrFocusChange: N,
        children: [d && u === p.uS.WISHLIST && (0, n.jsx)(h.X, {
            spec: L,
            users: [o],
            guildId: E ?? void 0,
            channelId: O ?? void 0
        }), (0, n.jsx)(f.A, {
            spec: L,
            sku: i,
            isCardHovered: M && !R,
            location: "DMGiftingModalWishlistItemCardBase"
        }), !R && (0, n.jsx)(S.AJ, {
            spec: L,
            onClick: x ? b : y,
            label: w,
            icon: P,
            isHoveringOrFocusing: M
        }), R && (0, n.jsx)(T.Yb, {
            count: m
        })]
    })
}

function R(t) {
    let {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: s,
        onClick: l,
        hasMultipleSources: r,
        source: d,
        ..._
    } = t, p = (0, o.bG)([u.A], () => u.A.getApplication(i.applicationId)), A = a.useCallback(() => {
        l?.(), null != p && null != p.guildId && (0, I.R)({
            skuId: i.id,
            applicationId: i.applicationId,
            guildId: p.guildId,
            isStorefront: !1,
            analyticsLocations: s ?? []
        })
    }, [s, p, l, i.applicationId, i.id]), f = a.useCallback(() => {
        l?.(), (0, g.a)(i, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: m
        }, {
            analyticsLocations: [...s ?? [], c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [i, e, s, l]);
    return (0, n.jsx)(N, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: s,
        onDetailsClick: A,
        onPurchaseClick: f,
        hasMultipleSources: r,
        source: d,
        ..._
    })
}

function y(t) {
    let {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: s,
        onClick: o,
        hasMultipleSources: c,
        source: u,
        ...I
    } = t, g = (0, L.e)({
        sku: i,
        analyticsLocations: s
    }), _ = a.useCallback(() => {
        o?.(), (0, d.A)({
            skuId: i.id,
            isGift: !0,
            giftingOrigin: m,
            analyticsLocations: s ?? [],
            giftRecipient: e
        })
    }, [o, i.id, s, e]), p = a.useCallback(() => {
        o?.(), g()
    }, [o, g]);
    return (0, n.jsx)(N, {
        sku: i,
        wishlistOwner: e,
        analyticsLocations: s,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: l()({
            [k.m]: null != i.bundledSkus && i.bundledSkus.length > 0 || i.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE && i.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT
        }),
        ...I
    })
}

function b(t) {
    let {
        sku: i,
        ...e
    } = t;
    switch (i.productLine) {
        case C.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(R, {
                sku: i,
                ...e
            });
        case C.EZt.COLLECTIBLES:
            return (0, n.jsx)(y, {
                sku: i,
                ...e
            });
        default:
            return null
    }
}