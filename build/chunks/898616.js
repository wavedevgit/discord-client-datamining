/** chunk id: 898616 params = (module,exports,require) **/
i.d(t, {
    A: () => c
}), i(321073);
var n = i(64700),
    l = i(735438),
    s = i(311907),
    a = i(721932),
    r = i(403362),
    d = i(832163),
    o = i(501838);

function c(e) {
    let {
        wishlist: t,
        profileOwner: i,
        currentUser: c
    } = e, u = i.id === c?.id, g = n.useMemo(() => t?.userId != null ? [t.userId] : [], [t]), m = (0, s.bG)([d.A], () => d.A.getDetectableIdsToApplicationIds()), h = n.useMemo(() => {
        let e = [];
        for (let i of t?.items ?? [])(0, a.$)(i) && null != m[i.sku.applicationId] && e.push(i.sku.applicationId);
        return e
    }, [t, m]), x = (0, o.w)({
        userIds: g
    }), A = (0, o.mn)({
        userIds: g
    }), p = (0, o.tR)(g), f = (0, o.rY)(), I = (0, o.qx)(), j = (0, o.px)();
    return n.useMemo(() => (0, l.uniq)([...h, ...x, ...A, ...p, ...u ? [...f, ...I, ...j] : []].filter(r.Vq)), [h, x, A, p, f, I, j, u])
}