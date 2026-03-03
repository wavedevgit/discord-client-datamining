/** chunk id: 878244, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M,
    O: () => N
});
var i = n(627968),
    s = n(64700),
    r = n(575593),
    a = n(635358),
    l = n(311907),
    o = n(793574),
    c = n(587895),
    d = n(44120),
    u = n(317560),
    _ = n(533406),
    I = n(954571),
    A = n(594832),
    g = n(146423),
    f = n(460442),
    S = n(662349),
    p = n(754804),
    E = n(479026),
    m = n(699976),
    T = n(652215),
    L = n(788868),
    C = n(804810);
let O = L.vQ.DM_CHANNEL_WISHLIST,
    h = m.Z.SIZE_133;

function N(e) {
    let {
        spec: t = h
    } = e;
    return (0, i.jsx)(g.$, {
        spec: t
    })
}

function R(e) {
    let {
        sku: t,
        onClick: n,
        onButtonClick: r,
        onOpenWishlist: a,
        wishlistOwner: l,
        wishlistId: o,
        source: c,
        hasMultipleSources: d,
        totalUnownedWishlistItems: u,
        index: _,
        skuPreviewStyle: E,
        maxWishlistLength: m,
        spec: L = h,
        guildId: C,
        channelId: O
    } = e, N = s.useMemo(() => ({
        collectibles: {
            nameplate: {
                width: 136
            }
        }
    }), []), [R, b] = s.useState(!1), G = _ === m - 1 && u > m, M = s.useCallback(() => {
        if (G) return void a();
        let e = c === A.uS.WISHLIST ? "wishlist" : "shop";
        I.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: t.id,
            item_source: e,
            wishlist_id: c === A.uS.WISHLIST ? o : null,
            product_line: t.productLine
        }), n?.()
    }, [n, o, c, t.id, t.productLine, a, G]), k = s.useCallback(() => {
        let e = c === A.uS.WISHLIST ? "wishlist" : "shop";
        I.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: t.id,
            item_source: e,
            wishlist_id: c === A.uS.WISHLIST ? o : null,
            product_line: t.productLine
        }), r?.()
    }, [r, t.id, t.productLine, c, o]), {
        label: U,
        icon: y
    } = (0, S.hB)({
        sku: t,
        wishlistOwner: l,
        isOwned: !1,
        location: "DM Gifting Modal Wishlist Item Card"
    });
    return (0, i.jsxs)(g.A, {
        sku: t,
        user: l,
        spec: L,
        skuPreviewStyle: E,
        options: N,
        onClick: M,
        onHoverOrFocusChange: b,
        children: [d && c === A.uS.WISHLIST && (0, i.jsx)(p.X, {
            spec: L,
            users: [l],
            guildId: C ?? void 0,
            channelId: O ?? void 0
        }), !G && (0, i.jsx)(S.AJ, {
            spec: L,
            onClick: k,
            label: U,
            icon: y,
            isHoveringOrFocusing: R
        }), G && (0, i.jsx)(f.Yb, {
            count: u - m + 1
        })]
    })
}

function b(e) {
    let {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: r,
        onClick: a,
        hasMultipleSources: d,
        source: I,
        ...A
    } = e, g = (0, l.bG)([c.A], () => c.A.getApplication(t.applicationId)), f = s.useCallback(() => {
        a?.(), null != g && null != g.guildId && (0, u.R)({
            skuId: t.id,
            applicationId: t.applicationId,
            guildId: g.guildId,
            isStorefront: !1,
            analyticsLocations: r ?? []
        })
    }, [r, g, a, t.applicationId, t.id]), S = s.useCallback(() => {
        a?.(), (0, _.a)(t, {
            isGift: !0,
            giftRecipient: n,
            giftingOrigin: O
        }, {
            analyticsLocations: [...r ?? [], o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [t, n, r, a]);
    return (0, i.jsx)(R, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: r,
        onClick: f,
        onButtonClick: S,
        hasMultipleSources: d,
        source: I,
        ...A
    })
}

function G(e) {
    let {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onClick: o,
        hasMultipleSources: c,
        source: u,
        ..._
    } = e, I = (0, E.ez)({
        sku: t,
        analyticsLocations: l
    }), A = s.useMemo(() => null != t.bundledSkus && t.bundledSkus.length > 0 ? C.E : t.tenantMetadata?.collectibles?.type === r.R.NAMEPLATE ? C.q : void 0, [t.bundledSkus, t.tenantMetadata?.collectibles?.type]), g = s.useCallback(() => {
        o?.(), (0, d.A)({
            skuId: t.id,
            isGift: !0,
            giftingOrigin: O,
            analyticsLocations: l ?? [],
            giftRecipient: n,
            variantsReturnStyle: a.g.VARIANTS_GROUP
        })
    }, [o, t.id, l, n]), f = s.useCallback(() => {
        o?.(), I()
    }, [o, I]);
    return (0, i.jsx)(R, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onClick: f,
        onButtonClick: g,
        hasMultipleSources: c,
        source: u,
        skuPreviewStyle: A,
        ..._
    })
}

function M(e) {
    let {
        sku: t,
        ...n
    } = e;
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(b, {
                sku: t,
                ...n
            });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(G, {
                sku: t,
                ...n
            });
        default:
            return null
    }
}