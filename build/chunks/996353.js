/** chunk id: 996353, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => _
});
var n = i(64700),
    s = i(20424),
    a = i(592356),
    l = i(950191),
    r = i(178213),
    o = i(721932),
    c = i(594832),
    d = i(188275);

function _(t) {
    let {
        user: e,
        numItems: i,
        location: _
    } = t, u = (0, r.G)("use_unowned_wishlist_items_and_recommendations"), I = (0, l.Ay)(e.id), g = Math.max(i, (0, c.KQ)(u)), {
        defaultWishlistId: S,
        wishlist: p,
        popularCollectiblesProducts: A,
        isFetchingWishlist: m,
        isValidatingPopularProducts: T,
        isFetchingPopularProducts: f,
        wishlistError: E
    } = (0, c.eT)({
        giftRecipient: e,
        minNumItems: g,
        source: c.B5.USER_PROFILE
    }), h = (0, s.A)({
        displayProfile: I,
        location: _
    }), L = n.useMemo(() => [e.id], [e.id]), {
        recommendations: N
    } = (0, a.A)({
        numWishlistItems: g,
        location: _,
        applicationId: d.XR,
        userIds: L,
        includeWishlists: !0
    }), G = n.useMemo(() => (p?.items ?? []).filter(t => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || h ? N : [], [p?.items, h, N]), {
        displayItems: b,
        totalUnownedWishlistItemCount: O
    } = (0, c.mk)({
        wishlist: p,
        popularCollectiblesProducts: A,
        popularSocialLayerStorefrontItems: G,
        wishlistError: E,
        numItems: g
    });
    return {
        displayItems: b,
        totalUnownedWishlistItemCount: O,
        fetchState: n.useMemo(() => m || T || f ? {
            status: "loading"
        } : null != E ? {
            status: "error",
            error: E
        } : {
            status: "success"
        }, [m, T, f, E]),
        defaultWishlistId: S,
        wishlist: p
    }
}