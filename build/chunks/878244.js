/** chunk id: 878244 params = (module,exports,require) **/
t.d(e, {
    A: () => P,
    O: () => w
});
var n = t(627968),
    s = t(64700),
    r = t(503698),
    o = t.n(r),
    l = t(575593),
    a = t(311907),
    c = t(793574),
    u = t(587895),
    d = t(44120),
    p = t(317560),
    I = t(533406),
    f = t(954571),
    _ = t(661492),
    C = t(594832),
    g = t(146423),
    T = t(121700),
    E = t(460442),
    S = t(662349),
    L = t(754804),
    h = t(479026),
    k = t(699976),
    A = t(652215),
    O = t(788868),
    x = t(985018),
    y = t(313248);
let v = O.vQ.DM_CHANNEL_WISHLIST,
    G = k.Z.SIZE_133;

function w(i) {
    let {
        spec: e = G
    } = i;
    return (0, n.jsx)(g.$, {
        spec: e
    })
}

function m(i) {
    let {
        sku: e,
        onDetailsClick: t,
        onPurchaseClick: r,
        onOpenWishlist: l,
        wishlistOwner: a,
        wishlistId: c,
        source: u,
        hasMultipleSources: d,
        skuPreviewStyle: p,
        skuPreviewHoverStyle: I,
        spec: h = G,
        guildId: k,
        channelId: O,
        numMoreItems: v
    } = i, [w, m] = s.useState(!1), R = null != v && v > 0, M = s.useCallback(() => {
        if (R) return void l();
        let i = u === C.uS.WISHLIST ? "wishlist" : "shop";
        f.default.track(A.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: i,
            wishlist_id: u === C.uS.WISHLIST ? c : null,
            product_line: e.productLine
        }), t?.()
    }, [t, c, u, e.id, e.productLine, l, R]), P = s.useCallback(() => {
        let i = u === C.uS.WISHLIST ? "wishlist" : "shop";
        f.default.track(A.HAw.GIFTING_ITEM_CLICKED, {
            sku_id: e.id,
            item_source: i,
            wishlist_id: u === C.uS.WISHLIST ? c : null,
            product_line: e.productLine
        }), r?.()
    }, [r, e.id, e.productLine, u, c]), {
        label: H,
        icon: b,
        isPromptingPurchase: j
    } = (0, S.h)({
        sku: e,
        wishlistOwner: a,
        isOwned: !1,
        location: "DM Gifting Modal Wishlist Item Card"
    });
    return (0, n.jsxs)(g.A, {
        sku: e,
        user: a,
        spec: h,
        skuPreviewStyle: o()(y.e, p, w ? I : void 0),
        onClick: M,
        "aria-label": R ? x.intl.formatToPlainString(x.t["8uYD+I"], {
            username: a.username
        }) : x.intl.formatToPlainString(x.t.ZBB4Ty, {
            productName: (0, _.TC)(e)
        }),
        onHoverOrFocusChange: m,
        children: [(0, n.jsx)(T.A, {
            spec: h,
            sku: e,
            isCardHovered: w && !R,
            location: "DMGiftingModalWishlistItemCardBase",
            replacedElement: d && u === C.uS.WISHLIST ? (0, n.jsx)(L.X, {
                spec: h,
                users: [a],
                guildId: k ?? void 0,
                channelId: O ?? void 0
            }) : null
        }), !R && (0, n.jsx)(S.A, {
            spec: h,
            onClick: j ? P : M,
            label: H,
            icon: b,
            isHoveringOrFocusing: w
        }), R && (0, n.jsx)(E.Yb, {
            count: v
        })]
    })
}

function R(i) {
    let {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onClick: o,
        hasMultipleSources: l,
        source: d,
        ...f
    } = i, _ = (0, a.bG)([u.A], () => u.A.getApplication(e.applicationId)), C = s.useCallback(() => {
        o?.(), null != _ && null != _.guildId && (0, p.R)({
            skuId: e.id,
            applicationId: e.applicationId,
            isStorefront: !1,
            giftRecipient: t,
            giftingOrigin: v,
            analyticsLocations: r ?? []
        })
    }, [r, _, o, e.applicationId, e.id, t]), g = s.useCallback(() => {
        o?.(), (0, I.a)(e, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: v
        }, {
            analyticsLocations: [...r ?? [], c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
        })
    }, [e, t, r, o]);
    return (0, n.jsx)(m, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: C,
        onPurchaseClick: g,
        hasMultipleSources: l,
        source: d,
        ...f
    })
}

function M(i) {
    let {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onClick: a,
        hasMultipleSources: c,
        source: u,
        ...p
    } = i, I = (0, h.e)({
        sku: e,
        giftRecipient: t,
        giftingOrigin: v,
        analyticsLocations: r
    }), f = s.useCallback(() => {
        a?.(), (0, d.A)({
            skuId: e.id,
            isGift: !0,
            giftingOrigin: v,
            analyticsLocations: r ?? [],
            giftRecipient: t
        })
    }, [a, e.id, r, t]), _ = s.useCallback(() => {
        a?.(), I()
    }, [a, I]);
    return (0, n.jsx)(m, {
        sku: e,
        wishlistOwner: t,
        analyticsLocations: r,
        onDetailsClick: _,
        onPurchaseClick: f,
        hasMultipleSources: c,
        source: u,
        skuPreviewHoverStyle: o()({
            [y.m]: null != e.bundledSkus && e.bundledSkus.length > 0 || e.tenantMetadata?.collectibles?.type !== l.R.NAMEPLATE && e.tenantMetadata?.collectibles?.type !== l.R.PROFILE_EFFECT
        }),
        ...p
    })
}

function P(i) {
    let {
        sku: e,
        ...t
    } = i;
    switch (e.productLine) {
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(R, {
                sku: e,
                ...t
            });
        case A.EZt.COLLECTIBLES:
            return (0, n.jsx)(M, {
                sku: e,
                ...t
            });
        default:
            return null
    }
}