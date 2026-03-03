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
    } = e, _ = (0, l.G)("use_unowned_wishlist_items_and_recommendations"), I = (0, a.Ay)(t.id), A = Math.max(n, (0, c.KQ)(_)), {
        defaultWishlistId: g,
        wishlist: f,
        popularCollectiblesProducts: S,
        isFetchingWishlist: p,
        isValidatingPopularProducts: E,
        isFetchingPopularProducts: m,
        wishlistError: T
    } = (0, c.eT)({
        giftRecipient: t,
        minNumItems: A,
        source: c.B5.USER_PROFILE
    }), L = (0, s.A)({
        displayProfile: I,
        location: u
    }), C = i.useMemo(() => [t.id], [t.id]), {
        recommendations: O
    } = (0, r.A)({
        numWishlistItems: A,
        location: u,
        applicationId: d.XR,
        userIds: C,
        includeWishlists: !0
    }), h = i.useMemo(() => (f?.items ?? []).filter(e => !0 !== e.isOwned && (0, o.$)(e)).length > 0 || L ? O : [], [f?.items, L, O]), {
        displayItems: N,
        totalUnownedWishlistItemCount: R
    } = (0, c.mk)({
        wishlist: f,
        popularCollectiblesProducts: S,
        popularSocialLayerStorefrontItems: h,
        wishlistError: T,
        numItems: A
    });
    return {
        displayItems: N,
        totalUnownedWishlistItemCount: R,
        fetchState: i.useMemo(() => p || E || m ? {
            status: "loading"
        } : null != T ? {
            status: "error",
            error: T
        } : {
            status: "success"
        }, [p, E, m, T]),
        defaultWishlistId: g,
        wishlist: f
    }
}