/** chunk id: 777347 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    U: () => _
});
var r = n(64700),
    i = n(311907),
    l = n(923408),
    s = n(80682),
    o = n(859241),
    a = n(256587),
    d = n(696451),
    u = n(71393),
    c = n(661191);

function p(e, t) {
    let n = (0, i.yK)([o.A], () => o.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
        p = r.useMemo(() => [...n].sort((e, t) => c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : -1).slice(0, t), [n, t]),
        _ = (0, i.yK)([d.Ay], () => {
            let t = new Set;
            return p.forEach(n => {
                null == d.Ay.getMember(e, n.userId) && t.add(n.userId)
            }), Array.from(t)
        }, [e, p]);
    r.useEffect(() => {
        _.length > 0 && _.forEach(t => a.A.requestMember(e, t))
    }, [e, _]);
    let m = r.useMemo(() => {
        let t = _.slice(0, s.JM / 2);
        return t.length > 0 ? {
            [e]: t
        } : {}
    }, [e, _]);
    (0, s.Eq)(m, "GuildPowerupsRecentActivity");
    let f = (0, i.bG)([u.A], () => u.A.getGuild(e)?.premiumSubscriberCount);
    return r.useEffect(() => {
        f !== n.length && (0, l.VU)(e)
    }, [e, f, n.length]), p
}

function _(e) {
    let t = new Date(c.default.extractTimestamp(e.id)),
        {
            username: n,
            roleColor: r,
            roleColorStrings: l
        } = (0, i.cf)([d.Ay], () => {
            let t = d.Ay.getMember(e.guildId, e.userId);
            return {
                username: d.Ay.getNick(e.guildId, e.userId) ?? e.user?.username,
                roleColor: t?.colorString ?? null,
                roleColorStrings: t?.colorStrings ?? null
            }
        }, [e]);
    return {
        timestamp: t,
        username: n,
        roleColor: r,
        roleColorStrings: l
    }
}