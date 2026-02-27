/** chunk id: 479026, original params: e,t,l (module,exports,require) **/
l.d(t, {
    T: () => g,
    _: () => S
});
var r = l(635358),
    i = l(793574),
    n = l(590180),
    s = l(572595),
    u = l(57020),
    a = l(44120),
    o = l(976860),
    d = l(44724),
    c = l(317560),
    h = l(533406),
    I = l(657331),
    f = l(901123);

function S(e) {
    let {
        isOwner: t,
        isItemOwned: l,
        onWishlistItemClick: d,
        profileOwner: c,
        sku: h,
        analyticsLocations: S,
        giftingOrigin: g
    } = e, m = location.pathname.startsWith(f.BV.COLLECTIBLES_SHOP);
    if (t || l) {
        let e = !t && l;
        if (m) {
            let t = n.A.getProduct(h.id),
                l = n.A.getCategoryForProduct(h.id);
            if (null != t && null != l) {
                e || (0, I.closeUserProfileModal)(), (0, s.t)({
                    product: t,
                    category: l,
                    shouldCheckoutWithOrbs: (0, u.A)({
                        product: t
                    }),
                    analyticsLocations: S,
                    analyticsSource: i.A.USER_PROFILE_WISHLIST,
                    returnRef: void 0,
                    tab: void 0
                });
                return
            }
        }
        e || (0, I.closeUserProfileModal)(), (0, o.pX)(`${f.BV.COLLECTIBLES_SHOP}#itemSkuId=${h.id}`)
    } else d?.(), (0, a.A)({
        skuId: h.id,
        isGift: !0,
        giftingOrigin: g,
        analyticsLocations: S,
        giftRecipient: c,
        variantsReturnStyle: r.g.VARIANTS_GROUP
    })
}

function g(e) {
    let {
        isOwner: t,
        giftingOrigin: l,
        profileOwner: r,
        isItemOwned: n,
        application: s,
        sku: u,
        analyticsLocations: a,
        additionalUserIds: o
    } = e;
    t || n ? s?.guildId != null && (t ? ((0, I.closeUserProfileModal)(), (0, d.default)({
        guildId: s.guildId,
        skuId: u.id,
        slug: u.slug
    })) : (0, c.R)({
        skuId: u.id,
        applicationId: s.id,
        guildId: s.guildId,
        isStorefront: !1,
        analyticsLocations: a
    })) : (0, h.a)(u, {
        isGift: !0,
        giftRecipient: r,
        additionalUserIds: o,
        giftingOrigin: l
    }, {
        analyticsLocations: [...a, i.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
}