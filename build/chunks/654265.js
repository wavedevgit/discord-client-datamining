/** chunk id: 654265, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(64700),
    l = n(311907),
    a = n(71393),
    r = n(576705),
    s = n(661191),
    o = n(624458),
    c = n(844944),
    d = n(212455),
    u = n(652215);

function m(e) {
    let [t, n] = i.useState(!1), [m, _] = i.useState(!1), A = s.default.cast(e), {
        joinRequest: h,
        guild: f
    } = (0, l.cf)([c.A, d.A, a.A, r.A], () => {
        let e = c.A.getRequest(A);
        if (null == e) return {
            joinRequest: null,
            isModmin: !1,
            guild: null
        };
        let t = a.A.getGuild(e.guildId) ?? d.A.getJoinRequestGuild(e.guildId);
        return {
            joinRequest: e,
            isModmin: null != t && r.A.can(u.xBc.KICK_MEMBERS, t),
            guild: t
        }
    });
    return i.useEffect(() => {
        null != f || m || (_(!0), o.A.fetchRequestToJoinGuilds())
    }, [f, m]), i.useEffect(() => {
        null == h && (n(!0), o.A.fetchGuildJoinRequest(A).finally(() => {
            n(!1)
        }))
    }, [h, A]), {
        loading: t,
        joinRequest: h,
        joinRequestGuild: f
    }
}