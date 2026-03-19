/** chunk id: 948011 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(311907),
    i = n(354328),
    l = n(622543),
    s = n(287809),
    r = n(816176),
    o = n(501838);

function d(e) {
    let {
        location: t
    } = e, n = (0, r.d)({
        location: t
    }), d = (0, a.bG)([s.default], () => s.default.getCurrentUser()), c = (0, a.bG)([l.A], () => null != d ? l.A.getFirstWishlistId(d.id) : null), u = (0, i.A)("wishlist_user_profile_account_popout_upsell"), m = (0, o.hJ)(), h = (0, o.ok)();
    return n && null == c && (h || m) || u
}