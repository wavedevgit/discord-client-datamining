/** chunk id: 376932 params = (module,exports,require) **/
i.d(t, {
    A: () => j
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(158954),
    o = i(311907),
    d = i(554146),
    c = i(932001),
    u = i(178213),
    g = i(770983),
    m = i(927813),
    h = i(622543),
    x = i(49999),
    p = i(985018),
    A = i(970901);
let f = 90 * m.A.Millis.DAY,
    I = 90 * m.A.Millis.DAY;

function j(e) {
    let {
        user: t,
        wishlist: i,
        hasFetchedWishlist: l = !1,
        analyticsLocations: m,
        className: j,
        applicationIds: v
    } = e, S = (0, u.GG)("social_layer_wishlist_recommendations_on_profile"), b = (i?.items.length ?? 0) > 0, [y, E] = s.useState(!1);
    !l || b || y || E(!0);
    let T = (0, o.bG)([h.A], () => null != i ? new Date(h.A.getWishlistSettings(t.id, i.id)?.updated_at ?? 0).valueOf() : 0),
        [C, w] = (0, c.Wl)(d.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS, {
            showAfterTimestamp: T + I,
            cooldownDurationMs: f
        }, void 0, !0),
        N = C === d.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return l && (!b || N || y) ? (0, n.jsxs)("div", {
        className: a()(A.kL, j),
        children: [(0, n.jsxs)("div", {
            className: A.wx,
            children: [(0, n.jsx)(r.EYj, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: p.intl.string(p.t["+GB8Kt"])
            }), b && (0, n.jsx)(r.JnF, {
                size: "xs",
                onClick: () => {
                    E(!1), w(x.i.USER_DISMISS)
                }
            })]
        }), (0, n.jsx)(g.A, {
            userId: t.id,
            applicationIds: v,
            wishlist: i,
            className: a()(A.Vg, {
                [A.e6]: S
            }),
            analyticsLocations: m,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: S ? 8 : 6
        })]
    }) : null
}