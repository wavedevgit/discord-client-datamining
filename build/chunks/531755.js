/** Chunk was on 94682 **/
/** chunk id: 531755, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    a = n(158954),
    o = n(427262),
    s = n(228053),
    c = n(985018),
    u = n(401775);

function d(e) {
    let {
        wishlist: t,
        analyticsLocations: n,
        user: l,
        isOwner: d,
        className: f
    } = e;
    return (0, r.jsxs)("div", {
        className: i()(u.k, f),
        children: [(0, r.jsx)(a.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: d ? c.intl.string(c.t["+GB8Kt"]) : c.intl.formatToPlainString(c.t["D/FWJf"], {
                username: o.Ay.getName(l)
            })
        }), (0, r.jsx)(s.A, {
            wishlist: t,
            className: u.V,
            analyticsLocations: n,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 6
        })]
    })
}