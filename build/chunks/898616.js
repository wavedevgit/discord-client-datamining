/** chunk id: 898616 params = (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(321073);
var i = n(64700),
    a = n(735438),
    l = n(311907),
    s = n(721932),
    r = n(403362),
    o = n(832163),
    d = n(501838);

function c(e) {
    let {
        wishlist: t,
        profileOwner: n,
        currentUser: c
    } = e, u = n.id === c?.id, g = i.useMemo(() => t?.userId != null ? [t.userId] : [], [t]), m = (0, l.bG)([o.A], () => o.A.getDetectableIdsToApplicationIds()), h = i.useMemo(() => {
        let e = [];
        for (let n of t?.items ?? [])(0, s.$)(n) && null != m[n.sku.applicationId] && e.push(n.sku.applicationId);
        return e
    }, [t, m]), x = (0, d.w)({
        userIds: g
    }), p = (0, d.mn)({
        userIds: g
    }), f = (0, d.tR)(g), A = (0, d.rY)(), _ = (0, d.qx)(), I = (0, d.px)();
    return i.useMemo(() => (0, a.uniq)([...h, ...x, ...p, ...f, ...u ? [...A, ..._, ...I] : []].filter(r.Vq)), [h, x, p, f, A, _, I, u])
}