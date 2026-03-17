/** chunk id: 746081 params = (module,exports,require) **/
n.d(t, {
    m: () => l
});
var s = n(64700),
    i = n(310209);

function l(e) {
    let {
        wishlistAndRecommendations: t,
        skusToUserAndReason: n,
        userId: l,
        numItems: r
    } = e;
    return {
        totalUnownedWishlistItemCount: s.useMemo(() => t.filter(e => null != n[e.id] && n[e.id][l] === i.j.WISHLIST).length, [t, l, n]),
        slicedWishlistAndRecommendations: s.useMemo(() => t.slice(0, r), [t, r])
    }
}