/** chunk id: 376932 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(554146),
    d = n(932001),
    u = n(178213),
    g = n(770983),
    m = n(927813),
    x = n(622543),
    p = n(49999),
    f = n(985018),
    h = n(970901);
let _ = 90 * m.A.Millis.DAY,
    A = 90 * m.A.Millis.DAY;

function I(e) {
    let {
        user: t,
        wishlist: n,
        hasFetchedWishlist: a = !1,
        analyticsLocations: m,
        className: I,
        applicationIds: j
    } = e, v = (0, u.GG)("social_layer_wishlist_recommendations_on_profile"), E = (n?.items.length ?? 0) > 0, [T, b] = l.useState(!1);
    !a || E || T || b(!0);
    let C = (0, o.bG)([x.A], () => null != n ? new Date(x.A.getWishlistSettings(t.id, n.id)?.updated_at ?? 0).valueOf() : 0),
        [S, N] = (0, d.Wl)(c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS, {
            showAfterTimestamp: C + A,
            cooldownDurationMs: _
        }, void 0, !0),
        y = S === c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return a && (!E || y || T) ? (0, i.jsxs)("div", {
        className: s()(h.kL, I),
        children: [(0, i.jsxs)("div", {
            className: h.wx,
            children: [(0, i.jsx)(r.EYj, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: f.intl.string(f.t["+GB8Kt"])
            }), E && (0, i.jsx)(r.JnF, {
                size: "xs",
                onClick: () => {
                    b(!1), N(p.i.USER_DISMISS)
                }
            })]
        }), (0, i.jsx)(g.A, {
            userId: t.id,
            applicationIds: j,
            wishlist: n,
            className: s()(h.Vg, {
                [h.e6]: v
            }),
            analyticsLocations: m,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: v ? 8 : 6
        })]
    }) : null
}