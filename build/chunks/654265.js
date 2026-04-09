/** chunk id: 654265 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(64700),
    l = n(311907),
    a = n(71393),
    r = n(576705),
    s = n(661191),
    o = n(624458),
    c = n(844944),
    u = n(212455),
    d = n(652215);

function _(e) {
    let [t, n] = i.useState(!1), [_, A] = i.useState(!1), m = s.default.cast(e), {
        joinRequest: E,
        guild: T
    } = (0, l.cf)([c.A, u.A, a.A, r.A], () => {
        let e = c.A.getRequest(m);
        if (null == e) return {
            joinRequest: null,
            isModmin: !1,
            guild: null
        };
        let t = a.A.getGuild(e.guildId) ?? u.A.getJoinRequestGuild(e.guildId);
        return {
            joinRequest: e,
            isModmin: null != t && r.A.can(d.xBc.KICK_MEMBERS, t),
            guild: t
        }
    });
    return i.useEffect(() => {
        null != T || _ || (A(!0), o.A.fetchRequestToJoinGuilds())
    }, [T, _]), i.useEffect(() => {
        null == E && (n(!0), o.A.fetchGuildJoinRequest(m).finally(() => {
            n(!1)
        }))
    }, [E, m]), {
        loading: t,
        joinRequest: E,
        joinRequestGuild: T
    }
}