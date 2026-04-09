/** chunk id: 898616 params = (module,exports,require) **/
i.d(t, {
    A: () => c
}), i(321073);
var n = i(64700),
    s = i(735438),
    l = i(311907),
    a = i(721932),
    r = i(403362),
    o = i(832163),
    d = i(501838);

function c(e) {
    let {
        wishlist: t,
        profileOwner: i,
        currentUser: c
    } = e, u = i.id === c?.id, g = n.useMemo(() => t?.userId != null ? [t.userId] : [], [t]), m = (0, l.bG)([o.A], () => o.A.getDetectableIdsToApplicationIds()), h = n.useMemo(() => {
        let e = [];
        for (let i of t?.items ?? [])(0, a.$)(i) && null != m[i.sku.applicationId] && e.push(i.sku.applicationId);
        return e
    }, [t, m]), x = (0, d.w)({
        userIds: g
    }), p = (0, d.mn)({
        userIds: g
    }), A = (0, d.tR)(g), f = (0, d.rY)(), I = (0, d.qx)(), j = (0, d.px)();
    return n.useMemo(() => (0, s.uniq)([...h, ...x, ...p, ...A, ...u ? [...f, ...I, ...j] : []].filter(r.Vq)), [h, x, p, A, f, I, j, u])
}