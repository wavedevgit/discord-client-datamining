/** chunk id: 996353, original params: t,e,i (module,exports,require) **/
"use strict";
i.d(e, {
    A: () => _
});
var n = i(64700),
    s = i(20424),
    a = i(592356),
    r = i(950191),
    l = i(178213),
    o = i(721932),
    c = i(594832),
    d = i(188275);

function _(t) {
    let {
        user: e,
        numItems: i,
        location: _
    } = t, u = (0, l.G)("use_unowned_wishlist_items_and_recommendations"), I = (0, r.Ay)(e.id), g = Math.max(i, (0, c.KQ)(u)), {
        defaultWishlistId: A,
        wishlist: p,
        popularCollectiblesProducts: S,
        isFetchingWishlist: E,
        isValidatingPopularProducts: T,
        isFetchingPopularProducts: f,
        wishlistError: L
    } = (0, c.eT)({
        giftRecipient: e,
        minNumItems: g,
        source: c.B5.USER_PROFILE
    }), m = (0, s.A)({
        displayProfile: I,
        location: _
    }), G = n.useMemo(() => [e.id], [e.id]), {
        recommendations: N
    } = (0, a.A)({
        numWishlistItems: g,
        location: _,
        applicationId: d.XR,
        userIds: G,
        includeWishlists: !0
    }), O = n.useMemo(() => (p?.items ?? []).filter(t => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || m ? N : [], [p?.items, m, N]), {
        displayItems: b,
        totalUnownedWishlistItemCount: C
    } = (0, c.mk)({
        wishlist: p,
        popularCollectiblesProducts: S,
        popularSocialLayerStorefrontItems: O,
        wishlistError: L,
        numItems: g
    });
    return {
        displayItems: b,
        totalUnownedWishlistItemCount: C,
        fetchState: n.useMemo(() => E || T || f ? {
            status: "loading"
        } : null != L ? {
            status: "error",
            error: L
        } : {
            status: "success"
        }, [E, T, f, L]),
        defaultWishlistId: A,
        wishlist: p
    }
}