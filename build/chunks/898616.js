/** chunk id: 898616 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(64700),
    l = n(311907),
    a = n(721932),
    s = n(71393),
    r = n(871123),
    o = n(501838),
    d = n(188275);

function c(e) {
    let {
        wishlist: t,
        profileOwner: n,
        currentUser: c
    } = e, u = n.id === c?.id, m = i.useMemo(() => t?.userId != null ? [t.userId] : [], [t]), g = (0, l.bG)([s.A], () => s.A.getGuild((0, r.zf)())), x = t?.items.some(e => (0, a.$)(e)) ?? !1, f = (0, o.gT)({
        gameIds: d.sQ,
        userIds: m
    }), p = (0, o.K6)({
        gameIds: d.sQ,
        userIds: m
    }), h = (0, o.l1)(m), _ = (0, o.hJ)({
        gameIds: d.sQ
    }), A = (0, o.ok)({
        gameIds: d.sQ
    });
    return x || f || p || h || u && (null != g || _ || A)
}