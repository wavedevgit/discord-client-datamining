/** chunk id: 209137 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(64700),
    i = n(735438),
    l = n(311907),
    s = n(622543),
    r = n(287809),
    o = n(816176),
    d = n(501838),
    c = n(760716);

function u(e) {
    let {
        location: t
    } = e, n = (0, o.d)({
        location: t
    }), u = (0, l.bG)([r.default], () => r.default.getCurrentUser()), m = (0, l.bG)([s.A], () => null != u ? s.A.getFirstWishlistId(u.id) : null), h = (0, c.i)(e => e.recommendationApplicationIds), x = (0, d.rY)(), p = (0, d.qx)();
    return a.useMemo(() => null != h || null == m && n ? (0, i.uniq)([...h ?? [], ...p, ...x]).sort() : [], [n, m, p, x, h])
}