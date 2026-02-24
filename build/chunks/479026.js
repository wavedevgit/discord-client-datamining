/** chunk id: 479026, original params: e,t,i (module,exports,require) **/
i.d(t, {
    T: () => p,
    _: () => h
});
var n = i(635358),
    s = i(793574),
    r = i(590180),
    l = i(572595),
    o = i(57020),
    a = i(44120),
    d = i(976860),
    c = i(44724),
    u = i(317560),
    m = i(533406),
    _ = i(657331),
    f = i(901123);

function h(e) {
    let {
        isOwner: t,
        isItemOwned: i,
        onWishlistItemClick: c,
        profileOwner: u,
        sku: m,
        analyticsLocations: h,
        giftingOrigin: p
    } = e, I = location.pathname.startsWith(f.BV.COLLECTIBLES_SHOP);
    if (t || i) {
        let e = !t && i;
        if (I) {
            let t = r.A.getProduct(m.id),
                i = r.A.getCategoryForProduct(m.id);
            if (null != t && null != i) {
                e || (0, _.closeUserProfileModal)(), (0, l.t)({
                    product: t,
                    category: i,
                    shouldCheckoutWithOrbs: (0, o.A)({
                        product: t
                    }),
                    analyticsLocations: h,
                    analyticsSource: s.A.USER_PROFILE_WISHLIST,
                    returnRef: void 0,
                    tab: void 0
                });
                return
            }
        }
        e || (0, _.closeUserProfileModal)(), (0, d.pX)(`${f.BV.COLLECTIBLES_SHOP}#itemSkuId=${m.id}`)
    } else c?.(), (0, a.A)({
        skuId: m.id,
        isGift: !0,
        giftingOrigin: p,
        analyticsLocations: h,
        giftRecipient: u,
        variantsReturnStyle: n.g.VARIANTS_GROUP
    })
}

function p(e) {
    let {
        isOwner: t,
        giftingOrigin: i,
        profileOwner: n,
        isItemOwned: r,
        application: l,
        sku: o,
        analyticsLocations: a,
        additionalUserIds: d
    } = e;
    t || r ? l?.guildId != null && (t ? ((0, _.closeUserProfileModal)(), (0, c.default)({
        guildId: l.guildId,
        skuId: o.id,
        slug: o.slug
    })) : (0, u.R)({
        skuId: o.id,
        applicationId: l.id,
        guildId: l.guildId,
        isStorefront: !1,
        analyticsLocations: a
    })) : (0, m.a)(o, {
        isGift: !0,
        giftRecipient: n,
        additionalUserIds: d,
        giftingOrigin: i
    }, {
        analyticsLocations: [...a, s.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
}