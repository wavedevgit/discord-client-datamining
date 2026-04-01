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
    c = n(554146),
    d = n(932001),
    u = n(178213),
    m = n(770983),
    g = n(927813),
    p = n(622543),
    x = n(49999),
    f = n(985018),
    _ = n(465472);
let h = 90 * g.A.Millis.DAY,
    A = 90 * g.A.Millis.DAY;

function I(e) {
    let {
        user: t,
        wishlist: n,
        hasFetchedWishlist: l = !1,
        analyticsLocations: g,
        className: I,
        applicationIds: v
    } = e, j = (0, u.GG)("social_layer_wishlist_recommendations_on_profile"), E = (n?.items.length ?? 0) > 0, [T, N] = a.useState(!1);
    !l || E || T || N(!0);
    let C = (0, o.bG)([p.A], () => null != n ? new Date(p.A.getWishlistSettings(t.id, n.id)?.updated_at ?? 0).valueOf() : 0),
        [b, S] = (0, d.Wl)(c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS, {
            showAfterTimestamp: C + A,
            cooldownDurationMs: h
        }, void 0, !0),
        y = b === c.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
    return l && (!E || y || T) ? (0, i.jsxs)("div", {
        className: s()(_.kL, I),
        children: [(0, i.jsxs)("div", {
            className: _.wx,
            children: [(0, i.jsx)(r.EYj, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: f.intl.string(f.t["+GB8Kt"])
            }), E && (0, i.jsx)(r.JnF, {
                size: "xs",
                onClick: () => {
                    N(!1), S(x.i.USER_DISMISS)
                }
            })]
        }), (0, i.jsx)(m.A, {
            userId: t.id,
            applicationIds: v,
            wishlist: n,
            className: s()(_.Vg, {
                [_.e6]: j
            }),
            analyticsLocations: g,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: j ? 8 : 6
        })]
    }) : null
}