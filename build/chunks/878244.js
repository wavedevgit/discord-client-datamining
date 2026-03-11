/** chunk id: 878244 params = (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => N,
    O: () => G
});
var n = i(627968),
    s = i(64700),
    r = i(503698),
    a = i.n(r),
    l = i(575593),
    o = i(311907),
    c = i(793574),
    u = i(587895),
    d = i(44120),
    g = i(317560),
    I = i(533406),
    _ = i(954571),
    p = i(594832),
    A = i(146423),
    f = i(460442),
    T = i(662349),
    S = i(754804),
    m = i(479026),
    C = i(699976),
    E = i(652215),
    L = i(788868),
    O = i(804810);
let h = L.vQ.DM_CHANNEL_WISHLIST,
    k = C.Z.SIZE_133;

function G(t) {
    let {
        spec: e = k
    } = t;
    return (0, n.jsx)(A.$, {
        spec: e
    })
}

function b(t) {
    let {
        sku: e,
        onDetailsClick: i,
        onPurchaseClick: r,
        onOpenWishlist: l,
        wishlistOwner: o,
        wishlistId: c,
        source: u,
        hasMultipleSources: d,
        skuPreviewStyle: g,
        skuPreviewHoverStyle: I,
        spec: m = k,
        guildId: C,
        channelId: L,
        numMoreItems: h
    } = t, [G, b] = s.useState(!1), R = s.useCallback(() => {
        if (null != h && h > 0) return void l();
        let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
        _.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: t,
            wishlist_id: u === p.uS.WISHLIST ? c : null,
            product_line: e.productLine
        }), i?.()
    }, [i, c, u, e.id, e.productLine, l, h]), y = s.useCallback(() => {
        let t = u === p.uS.WISHLIST ? "wishlist" : "shop";
        _.default.track(E.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: t,
            wishlist_id: u === p.uS.WISHLIST ? c : null,
            product_line: e.productLine
        }), r?.()
    }, [r, e.id, e.productLine, u, c]), {
        label: N,
        icon: M,
        isPromptingPurchase: v
    } = (0, T.hB)({
        sku: e,
        wishlistOwner: o,
        isOwned: !1,
        location: "DM Gifting Modal Wishlist Item Card"
    });
    return (0, n.jsxs)(A.A, {
        sku: e,
        user: o,
        spec: m,
        skuPreviewStyle: a()(O.e, g, G ? I : void 0),
        onClick: R,
        onHoverOrFocusChange: b,
        children: [d && u === p.uS.WISHLIST && (0, n.jsx)(S.X, {
            spec: m,
            users: [o],
            guildId: C ?? void 0,
            channelId: L ?? void 0
        }), (null == h || 0 === h) && (0, n.jsx)(T.AJ, {
            spec: m,
            onClick: v ? y : R,
            label: N,
            icon: M,
            isHoveringOrFocusing: G
        }), null != h && h > 0 && (0, n.jsx)(f.Yb, {
            count: h
        })]
    })
}

function R(t) {
    let {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: a,
        hasMultipleSources: l,
        source: d,
        ..._
    } = t, p = (0, o.bG)([u.A], () => u.A.getApplication(e.applicationId)), A = s.useCallback(() => {
        a?.(), null != p && null != p.guildId && (0, g.R)({
            skuId: e.id,
            applicationId: e.applicationId,
            guildId: p.guildId,
            isStorefront: !1,
            analyticsLocations: r ?? []
        })
    }, [r, p, a, e.applicationId, e.id]), f = s.useCallback(() => {
        a?.(), (0, I.a)(e, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: h
        }, {
            analyticsLocations: [...r ?? [], c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [e, i, r, a]);
    return (0, n.jsx)(b, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onDetailsClick: A,
        onPurchaseClick: f,
        hasMultipleSources: l,
        source: d,
        ..._
    })
}

function y(t) {
    let {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: o,
        hasMultipleSources: c,
        source: u,
        ...g
    } = t, I = (0, m.e)({
        sku: e,
        analyticsLocations: r
    }), _ = s.useCallback(() => {
        o?.(), (0, d.A)({
            skuId: e.id,
            isGift: !0,
            giftingOrigin: h,
            analyticsLocations: r ?? [],
            giftRecipient: i
        })
    }, [o, e.id, r, i]), p = s.useCallback(() => {
        o?.(), I()
    }, [o, I]);
    return (0, n.jsx)(b, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onDetailsClick: p,
        onPurchaseClick: _,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: a()({
            [O.m]: null != e.bundledSkus && e.bundledSkus.length > 0 || e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE && e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT
        }),
        ...g
    })
}

function N(t) {
    let {
        sku: e,
        ...i
    } = t;
    switch (e.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(R, {
                sku: e,
                ...i
            });
        case E.EZt.COLLECTIBLES:
            return (0, n.jsx)(y, {
                sku: e,
                ...i
            });
        default:
            return null
    }
}