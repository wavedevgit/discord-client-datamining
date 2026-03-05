/** chunk id: 996353, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => d
});
var n = i(64700),
    s = i(20424),
    r = i(592356),
    l = i(950191),
    a = i(178213),
    o = i(721932),
    u = i(594832),
    c = i(188275);

function d(t) {
    let {
        user: e,
        numItems: i,
        location: d
    } = t, g = (0, a.G)("use_unowned_wishlist_items_and_recommendations"), I = (0, l.Ay)(e.id), m = Math.max(i, (0, u.KQ)(g)), {
        defaultWishlistId: A,
        wishlist: f,
        popularCollectiblesProducts: _,
        isFetchingWishlist: p,
        isValidatingPopularProducts: S,
        isFetchingPopularProducts: T,
        wishlistError: h
    } = (0, u.eT)({
        giftRecipient: e,
        minNumItems: m,
        source: u.B5.USER_PROFILE
    }), E = (0, s.A)({
        displayProfile: I,
        location: d
    }), C = n.useMemo(() => [e.id], [e.id]), {
        recommendations: O
    } = (0, r.A)({
        numWishlistItems: m,
        location: d,
        applicationId: c.XR,
        userIds: C,
        includeWishlists: !0
    }), R = n.useMemo(() => (f?.items ?? []).filter(t => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || E ? O : [], [f?.items, E, O]), {
        displayItems: k,
        totalUnownedWishlistItemCount: L
    } = (0, u.mk)({
        wishlist: f,
        popularCollectiblesProducts: _,
        popularSocialLayerStorefrontItems: R,
        wishlistError: h,
        numItems: m
    });
    return {
        displayItems: k,
        totalUnownedWishlistItemCount: L,
        fetchState: n.useMemo(() => p || S || T ? {
            status: "loading"
        } : null != h ? {
            status: "error",
            error: h
        } : {
            status: "success"
        }, [p, S, T, h]),
        defaultWishlistId: A,
        wishlist: f
    }
}