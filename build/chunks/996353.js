/** chunk id: 996353, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(64700),
    s = n(20424),
    r = n(592356),
    a = n(950191),
    l = n(178213),
    o = n(721932),
    c = n(594832),
    d = n(188275);

function u(e) {
    let {
        user: t,
        numItems: n,
        location: u
    } = e, _ = (0, l.G)("use_unowned_wishlist_items_and_recommendations"), I = (0, a.Ay)(t.id), g = Math.max(n, (0, c.KQ)(_)), {
        defaultWishlistId: A,
        wishlist: S,
        popularCollectiblesProducts: f,
        isFetchingWishlist: m,
        isValidatingPopularProducts: p,
        isFetchingPopularProducts: T,
        wishlistError: E
    } = (0, c.eT)({
        giftRecipient: t,
        minNumItems: g,
        source: c.B5.USER_PROFILE
    }), L = (0, s.A)({
        displayProfile: I,
        location: u
    }), R = i.useMemo(() => [t.id], [t.id]), {
        recommendations: O
    } = (0, r.A)({
        numWishlistItems: g,
        location: u,
        applicationId: d.XR,
        userIds: R,
        includeWishlists: !0
    }), h = i.useMemo(() => (S?.items ?? []).filter(e => !0 !== e.isOwned && (0, o.$)(e)).length > 0 || L ? O : [], [S?.items, L, O]), {
        displayItems: N,
        totalUnownedWishlistItemCount: b
    } = (0, c.mk)({
        wishlist: S,
        popularCollectiblesProducts: f,
        popularSocialLayerStorefrontItems: h,
        wishlistError: E,
        numItems: g
    });
    return {
        displayItems: N,
        totalUnownedWishlistItemCount: b,
        fetchState: i.useMemo(() => m || p || T ? {
            status: "loading"
        } : null != E ? {
            status: "error",
            error: E
        } : {
            status: "success"
        }, [m, p, T, E]),
        defaultWishlistId: A,
        wishlist: S
    }
}