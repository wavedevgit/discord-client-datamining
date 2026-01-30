/** chunk id: 948011, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(311907),
    l = n(354328),
    r = n(622543),
    i = n(287809),
    s = n(916023),
    o = n(816176),
    c = n(501838),
    d = n(188275);

function u(e) {
    let {
        location: t
    } = e, n = (0, s.kt)({
        location: t
    }), u = (0, o.d)({
        location: t
    }), m = (0, a.bG)([i.default], () => i.default.getCurrentUser()), p = (0, a.bG)([r.A], () => null != m ? r.A.getFirstWishlistId(m.id) : null), h = (0, l.A)("wishlist_user_profile_account_popout_upsell"), x = (0, c.hJ)({
        gameIds: d.sQ
    }), g = (0, c.ok)({
        gameIds: d.sQ
    });
    return u && n && null == p && (g || x) || h
}