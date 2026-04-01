/** chunk id: 478564 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(311907),
    r = n(568598),
    o = n(313961),
    d = n(501838),
    c = n(806931);

function u(e) {
    let {
        channelId: t
    } = e, [n] = (0, a.bG)([o.A], () => null != t ? [o.A.getParticipants(t), o.A.getParticipantsVersion(t)] : [
        [], 0
    ], [t], r.hS), l = i.useMemo(() => s().uniq(n.filter(e => (0, c.Xw)(e) || (0, c.Ay)(e)).map(e => e.user.id)), [n]), u = (0, d.gT)({
        userIds: l
    });
    return (0, d.hJ)() || u
}