/** chunk id: 898616 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073);
var i = n(64700),
    a = n(735438),
    l = n(311907),
    s = n(721932),
    r = n(403362),
    o = n(832163),
    c = n(501838);

function d(e) {
    let {
        wishlist: t,
        profileOwner: n,
        currentUser: d
    } = e, u = n.id === d?.id, g = i.useMemo(() => t?.userId != null ? [t.userId] : [], [t]), m = (0, l.bG)([o.A], () => o.A.getDetectableIdsToApplicationIds()), x = i.useMemo(() => {
        let e = [];
        for (let n of t?.items ?? [])(0, s.$)(n) && null != m[n.sku.applicationId] && e.push(n.sku.applicationId);
        return e
    }, [t, m]), p = (0, c.w)({
        userIds: g
    }), f = (0, c.mn)({
        userIds: g
    }), h = (0, c.tR)(g), _ = (0, c.rY)(), A = (0, c.qx)(), I = (0, c.px)();
    return i.useMemo(() => (0, a.uniq)([...x, ...p, ...f, ...h, ...u ? [..._, ...A, ...I] : []].filter(r.Vq)), [x, p, f, h, _, A, I, u])
}