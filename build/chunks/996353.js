/** chunk id: 996353, original params: t,e,n (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => d
});
var i = n(64700),
    a = n(20424),
    s = n(592356),
    r = n(950191),
    c = n(178213),
    l = n(721932),
    _ = n(594832),
    o = n(188275);

function d(t) {
    let {
        user: e,
        numItems: n,
        location: d
    } = t, I = (0, c.G)("use_unowned_wishlist_items_and_recommendations"), g = (0, r.Ay)(e.id), A = Math.max(n, (0, _.KQ)(I)), {
        defaultWishlistId: u,
        wishlist: S,
        popularCollectiblesProducts: T,
        isFetchingWishlist: p,
        isValidatingPopularProducts: E,
        isFetchingPopularProducts: m,
        wishlistError: f
    } = (0, _.eT)({
        giftRecipient: e,
        minNumItems: A,
        source: _.B5.USER_PROFILE
    }), N = (0, a.A)({
        displayProfile: g,
        location: d
    }), G = i.useMemo(() => [e.id], [e.id]), {
        recommendations: L
    } = (0, s.A)({
        numWishlistItems: A,
        location: d,
        applicationId: o.XR,
        userIds: G,
        includeWishlists: !0
    }), b = i.useMemo(() => (S?.items ?? []).filter(t => !0 !== t.isOwned && (0, l.$)(t)).length > 0 || N ? L : [], [S?.items, N, L]), {
        displayItems: O,
        totalUnownedWishlistItemCount: R
    } = (0, _.mk)({
        wishlist: S,
        popularCollectiblesProducts: T,
        popularSocialLayerStorefrontItems: b,
        wishlistError: f,
        numItems: A
    });
    return {
        displayItems: O,
        totalUnownedWishlistItemCount: R,
        fetchState: i.useMemo(() => p || E || m ? {
            status: "loading"
        } : null != f ? {
            status: "error",
            error: f
        } : {
            status: "success"
        }, [p, E, m, f]),
        defaultWishlistId: u,
        wishlist: S
    }
}