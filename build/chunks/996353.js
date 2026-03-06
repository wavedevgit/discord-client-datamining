/** chunk id: 996353 params = (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => d
});
var n = i(64700),
    r = i(20424),
    s = i(592356),
    a = i(950191),
    l = i(178213),
    o = i(721932),
    c = i(594832),
    u = i(188275);

function d(t) {
    let {
        user: e,
        numItems: i
    } = t, d = (0, l.G)("use_unowned_wishlist_items_and_recommendations"), g = (0, a.Ay)(e.id), I = Math.max(i, (0, c.KQ)(d)), {
        defaultWishlistId: _,
        wishlist: p,
        popularCollectiblesProducts: A,
        isFetchingWishlist: m,
        isValidatingPopularProducts: S,
        isFetchingPopularProducts: f,
        wishlistError: T
    } = (0, c.eT)({
        giftRecipient: e,
        minNumItems: I,
        source: c.B5.USER_PROFILE
    }), C = (0, r.A)({
        displayProfile: g
    }), E = n.useMemo(() => [e.id], [e.id]), {
        recommendations: L
    } = (0, s.A)({
        numWishlistItems: I,
        applicationId: u.XR,
        userIds: E,
        includeWishlists: !0
    }), O = n.useMemo(() => (p?.items ?? []).filter(t => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || C ? L : [], [p?.items, C, L]), {
        displayItems: h,
        totalUnownedWishlistItemCount: k
    } = (0, c.mk)({
        wishlist: p,
        popularCollectiblesProducts: A,
        popularSocialLayerStorefrontItems: O,
        wishlistError: T,
        numItems: I
    });
    return {
        displayItems: h,
        totalUnownedWishlistItemCount: k,
        fetchState: n.useMemo(() => m || S || f ? {
            status: "loading"
        } : null != T ? {
            status: "error",
            error: T
        } : {
            status: "success"
        }, [m, S, f, T]),
        defaultWishlistId: _,
        wishlist: p
    }
}