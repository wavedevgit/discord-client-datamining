/** chunk id: 479026, original params: e,t,r (module,exports,require) **/
r.d(t, {
    T: () => I,
    _: () => g
}), r(896048);
var n = r(635358),
    i = r(793574),
    l = r(590180),
    s = r(572595),
    a = r(57020),
    u = r(44120),
    o = r(976860),
    c = r(44724),
    d = r(317560),
    f = r(533406),
    h = r(657331),
    m = r(901123);

function g(e) {
    let {
        isOwner: t,
        isItemOwned: r,
        onWishlistItemClick: c,
        profileOwner: d,
        sku: f,
        analyticsLocations: g,
        giftingOrigin: I
    } = e, p = location.pathname.startsWith(m.BV.COLLECTIBLES_SHOP);
    if (t || r) {
        let e = !t && r;
        if (p) {
            let t = l.A.getProduct(f.id),
                r = l.A.getCategoryForProduct(f.id);
            if (null != t && null != r) {
                e || (0, h.closeUserProfileModal)(), (0, s.t)({
                    product: t,
                    category: r,
                    shouldCheckoutWithOrbs: (0, a.Ak)({
                        product: t
                    }),
                    analyticsLocations: g,
                    analyticsSource: i.A.USER_PROFILE_WISHLIST,
                    returnRef: void 0,
                    tab: void 0
                });
                return
            }
        }
        e || (0, h.closeUserProfileModal)(), (0, o.pX)("".concat(m.BV.COLLECTIBLES_SHOP, "#itemSkuId=").concat(f.id))
    } else null == c || c(), (0, u.A)({
        skuId: f.id,
        isGift: !0,
        giftingOrigin: I,
        analyticsLocations: g,
        giftRecipient: d,
        variantsReturnStyle: n.g.VARIANTS_GROUP
    })
}

function I(e) {
    let {
        isOwner: t,
        giftingOrigin: r,
        profileOwner: n,
        isItemOwned: l,
        application: s,
        sku: a,
        analyticsLocations: u,
        additionalUserIds: o
    } = e;
    t || l ? (null == s ? void 0 : s.guildId) != null && (t ? ((0, h.closeUserProfileModal)(), (0, c.default)({
        guildId: s.guildId,
        skuId: a.id,
        slug: a.slug
    })) : (0, d.R)({
        skuId: a.id,
        applicationId: s.id,
        guildId: s.guildId,
        isStorefront: !1,
        analyticsLocations: u
    })) : (0, f.a)(a, {
        isGift: !0,
        giftRecipient: n,
        additionalUserIds: o,
        giftingOrigin: r
    }, {
        analyticsLocations: [...u, i.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON]
    })
}