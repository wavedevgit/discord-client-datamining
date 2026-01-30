/** chunk id: 654265, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048), n(492834);
var r = n(64700),
    i = n(311907),
    l = n(71393),
    a = n(576705),
    s = n(661191),
    o = n(624458),
    c = n(844944),
    u = n(212455),
    d = n(652215);

function p(e) {
    let [t, n] = r.useState(!1), [p, m] = r.useState(!1), f = s.default.cast(e), {
        joinRequest: g,
        guild: _
    } = (0, i.cf)([c.A, u.A, l.A, a.A], () => {
        var e;
        let t = c.A.getRequest(f);
        if (null == t) return {
            joinRequest: null,
            isModmin: !1,
            guild: null
        };
        let n = null != (e = l.A.getGuild(t.guildId)) ? e : u.A.getJoinRequestGuild(t.guildId);
        return {
            joinRequest: t,
            isModmin: null != n && a.A.can(d.xBc.KICK_MEMBERS, n),
            guild: n
        }
    });
    return r.useEffect(() => {
        null != _ || p || (m(!0), o.A.fetchRequestToJoinGuilds())
    }, [_, p]), r.useEffect(() => {
        null == g && (n(!0), o.A.fetchGuildJoinRequest(f).finally(() => {
            n(!1)
        }))
    }, [g, f]), {
        loading: t,
        joinRequest: g,
        joinRequestGuild: _
    }
}