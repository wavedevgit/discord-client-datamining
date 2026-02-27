/** chunk id: 996353, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => u
});
var n = i(64700),
    s = i(20424),
    a = i(592356),
    r = i(950191),
    l = i(178213),
    o = i(721932),
    c = i(594832),
    d = i(188275);

function u(t) {
    let {
        user: e,
        numItems: i,
        location: u
    } = t, _ = (0, l.G)("use_unowned_wishlist_items_and_recommendations"), I = (0, r.Ay)(e.id), g = Math.max(i, (0, c.KQ)(_)), {
        defaultWishlistId: p,
        wishlist: A,
        popularCollectiblesProducts: S,
        isFetchingWishlist: E,
        isValidatingPopularProducts: T,
        isFetchingPopularProducts: m,
        wishlistError: f
    } = (0, c.eT)({
        giftRecipient: e,
        minNumItems: g,
        source: c.B5.USER_PROFILE
    }), L = (0, s.A)({
        displayProfile: I,
        location: u
    }), h = n.useMemo(() => [e.id], [e.id]), {
        recommendations: N
    } = (0, a.A)({
        numWishlistItems: g,
        location: u,
        applicationId: d.XR,
        userIds: h,
        includeWishlists: !0
    }), G = n.useMemo(() => (A?.items ?? []).filter(t => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || L ? N : [], [A?.items, L, N]), {
        displayItems: O,
        totalUnownedWishlistItemCount: b
    } = (0, c.mk)({
        wishlist: A,
        popularCollectiblesProducts: S,
        popularSocialLayerStorefrontItems: G,
        wishlistError: f,
        numItems: g
    });
    return {
        displayItems: O,
        totalUnownedWishlistItemCount: b,
        fetchState: n.useMemo(() => E || T || m ? {
            status: "loading"
        } : null != f ? {
            status: "error",
            error: f
        } : {
            status: "success"
        }, [E, T, m, f]),
        defaultWishlistId: p,
        wishlist: A
    }
}