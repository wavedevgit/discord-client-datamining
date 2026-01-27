/** Chunk was on 41727 **/
/** chunk id: 478564, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    s = n(311907),
    a = n(568598),
    o = n(313961),
    c = n(916023),
    u = n(501838),
    d = n(188275),
    p = n(806931);

function h(e) {
    let {
        location: t,
        channelId: n
    } = e, l = (0, c.kt)({
        location: t
    }), [h] = (0, s.bG)([o.A], () => null != n ? [o.A.getParticipants(n), o.A.getParticipantsVersion(n)] : [
        [], 0
    ], [n], a.hS), f = r.useMemo(() => i().uniq(h.filter(e => (0, p.Xw)(e) || (0, p.Ay)(e)).map(e => e.user.id)), [h]), g = (0, u.gT)({
        gameIds: d.sQ,
        userIds: f
    }), m = (0, u.hJ)({
        gameIds: d.sQ
    });
    return l && (m || g)
}