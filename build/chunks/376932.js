/** chunk id: 376932 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(554146),
    c = n(932001),
    u = n(178213),
    g = n(770983),
    m = n(927813),
    h = n(622543),
    x = n(49999),
    p = n(985018),
    f = n(465472);
let A = 90 * m.A.Millis.DAY,
    _ = 90 * m.A.Millis.DAY;

function I(e) {
    let {
        user: t,
        wishlist: n,
        hasFetchedWishlist: l = !1,
        analyticsLocations: m,
        className: I,
        applicationIds: j
    } = e, v = (0, u.GG)("social_layer_wishlist_recommendations_on_profile"), b = (n?.items.length ?? 0) > 0, [S, y] = a.useState(!1);
    !l || b || S || y(!0);
    let E = (0, o.bG)([h.A], () => null != n ? new Date(h.A.getWishlistSettings(t.id, n.id)?.updated_at ?? 0).valueOf() : 0),
        [C, T] = (0, c.Wl)(d.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS, {
            showAfterTimestamp: E + _,
            cooldownDurationMs: A
        }, void 0, !0),
        w = C === d.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return l && (!b || w || S) ? (0, i.jsxs)("div", {
        className: s()(f.kL, I),
        children: [(0, i.jsxs)("div", {
            className: f.wx,
            children: [(0, i.jsx)(r.EYj, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: p.intl.string(p.t["+GB8Kt"])
            }), b && (0, i.jsx)(r.JnF, {
                size: "xs",
                onClick: () => {
                    y(!1), T(x.i.USER_DISMISS)
                }
            })]
        }), (0, i.jsx)(g.A, {
            userId: t.id,
            applicationIds: j,
            wishlist: n,
            className: s()(f.Vg, {
                [f.e6]: v
            }),
            analyticsLocations: m,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: v ? 8 : 6
        })]
    }) : null
}