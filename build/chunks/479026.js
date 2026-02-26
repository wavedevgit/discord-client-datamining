/** chunk id: 479026, original params: e,t,i (module,exports,require) **/
i.d(t, {
    T: () => m,
    _: () => g
});
var r = i(635358),
    l = i(793574),
    s = i(590180),
    n = i(572595),
    u = i(57020),
    a = i(44120),
    d = i(976860),
    o = i(44724),
    c = i(317560),
    I = i(533406),
    h = i(657331),
    S = i(901123);

function g(e) {
    let {
        isOwner: t,
        isItemOwned: i,
        onWishlistItemClick: o,
        profileOwner: c,
        sku: I,
        analyticsLocations: g,
        giftingOrigin: m
    } = e, A = location.pathname.startsWith(S.BV.COLLECTIBLES_SHOP);
    if (t || i) {
        let e = !t && i;
        if (A) {
            let t = s.A.getProduct(I.id),
                i = s.A.getCategoryForProduct(I.id);
            if (null != t && null != i) {
                e || (0, h.closeUserProfileModal)(), (0, n.t)({
                    product: t,
                    category: i,
                    shouldCheckoutWithOrbs: (0, u.A)({
                        product: t
                    }),
                    analyticsLocations: g,
                    analyticsSource: l.A.USER_PROFILE_WISHLIST,
                    returnRef: void 0,
                    tab: void 0
                });
                return
            }
        }
        e || (0, h.closeUserProfileModal)(), (0, d.pX)(`${S.BV.COLLECTIBLES_SHOP}#itemSkuId=${I.id}`)
    } else o?.(), (0, a.A)({
        skuId: I.id,
        isGift: !0,
        giftingOrigin: m,
        analyticsLocations: g,
        giftRecipient: c,
        variantsReturnStyle: r.g.VARIANTS_GROUP
    })
}

function m(e) {
    let {
        isOwner: t,
        giftingOrigin: i,
        profileOwner: r,
        isItemOwned: s,
        application: n,
        sku: u,
        analyticsLocations: a,
        additionalUserIds: d
    } = e;
    t || s ? n?.guildId != null && (t ? ((0, h.closeUserProfileModal)(), (0, o.default)({
        guildId: n.guildId,
        skuId: u.id,
        slug: u.slug
    })) : (0, c.R)({
        skuId: u.id,
        applicationId: n.id,
        guildId: n.guildId,
        isStorefront: !1,
        analyticsLocations: a
    })) : (0, I.a)(u, {
        isGift: !0,
        giftRecipient: r,
        additionalUserIds: d,
        giftingOrigin: i
    }, {
        analyticsLocations: [...a, l.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
}