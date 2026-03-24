/** chunk id: 777347 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    U: () => m
});
var r = n(64700),
    i = n(311907),
    s = n(923408),
    l = n(80682),
    o = n(859241),
    a = n(256587),
    u = n(696451),
    d = n(71393),
    c = n(661191);

function p(e, t) {
    let n = (0, i.yK)([o.A], () => o.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
        p = r.useMemo(() => [...n].sort((e, t) => c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : -1).slice(0, t), [n, t]),
        m = (0, i.yK)([u.Ay], () => {
            let t = new Set;
            return p.forEach(n => {
                null == u.Ay.getMember(e, n.userId) && t.add(n.userId)
            }), Array.from(t)
        }, [e, p]);
    r.useEffect(() => {
        m.length > 0 && m.forEach(t => a.A.requestMember(e, t))
    }, [e, m]);
    let _ = r.useMemo(() => {
        let t = m.slice(0, l.JM / 2);
        return t.length > 0 ? {
            [e]: t
        } : {}
    }, [e, m]);
    (0, l.Eq)(_, "GuildPowerupsRecentActivity");
    let f = (0, i.bG)([d.A], () => d.A.getGuild(e)?.premiumSubscriberCount);
    return r.useEffect(() => {
        f !== n.length && (0, s.VU)(e)
    }, [e, f, n.length]), p
}

function m(e) {
    let t = new Date(c.default.extractTimestamp(e.id)),
        {
            username: n,
            roleColor: r,
            roleColorStrings: s
        } = (0, i.cf)([u.Ay], () => {
            let t = u.Ay.getMember(e.guildId, e.userId);
            return {
                username: u.Ay.getNick(e.guildId, e.userId) ?? e.user?.username,
                roleColor: t?.colorString ?? null,
                roleColorStrings: t?.colorStrings ?? null
            }
        }, [e]);
    return {
        timestamp: t,
        username: n,
        roleColor: r,
        roleColorStrings: s
    }
}