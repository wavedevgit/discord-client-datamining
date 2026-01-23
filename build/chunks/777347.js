/** Chunk was on 88615 **/
/** chunk id: 777347, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    U: () => m
}), n(896048), n(638769);
var r = n(64700),
    l = n(311907),
    i = n(923408),
    o = n(80682),
    s = n(859241),
    a = n(256587),
    u = n(696451),
    d = n(71393),
    c = n(661191);

function p(e, t) {
    let n = (0, l.yK)([s.A], () => {
            var t;
            return null != (t = s.A.getAppliedGuildBoostsForGuild(e)) ? t : []
        }, [e]),
        p = r.useMemo(() => [...n].sort((e, t) => c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : -1).slice(0, t), [n, t]),
        m = (0, l.yK)([u.Ay], () => {
            let t = new Set;
            return p.forEach(n => {
                null == u.Ay.getMember(e, n.userId) && t.add(n.userId)
            }), Array.from(t)
        }, [e, p]);
    r.useEffect(() => {
        m.length > 0 && m.forEach(t => a.A.requestMember(e, t))
    }, [e, m]);
    let f = r.useMemo(() => m.length > 0 ? {
        [e]: m
    } : {}, [e, m]);
    (0, o.E)(f, "GuildPowerupsRecentActivity");
    let v = (0, l.bG)([d.A], () => {
        var t;
        return null == (t = d.A.getGuild(e)) ? void 0 : t.premiumSubscriberCount
    });
    return r.useEffect(() => {
        v !== n.length && (0, i.VU)(e)
    }, [e, v, n.length]), p
}

function m(e) {
    let t = new Date(c.default.extractTimestamp(e.id)),
        {
            username: n,
            roleColor: r,
            roleColorStrings: i
        } = (0, l.cf)([u.Ay], () => {
            var t, n, r, l;
            let i = u.Ay.getMember(e.guildId, e.userId);
            return {
                username: null != (t = u.Ay.getNick(e.guildId, e.userId)) ? t : null == (l = e.user) ? void 0 : l.username,
                roleColor: null != (n = null == i ? void 0 : i.colorString) ? n : null,
                roleColorStrings: null != (r = null == i ? void 0 : i.colorStrings) ? r : null
            }
        }, [e]);
    return {
        timestamp: t,
        username: n,
        roleColor: r,
        roleColorStrings: i
    }
}