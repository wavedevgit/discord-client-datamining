/** chunk id: 654265 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(64700),
    r = n(311907),
    l = n(71393),
    s = n(576705),
    a = n(661191),
    o = n(624458),
    c = n(844944),
    u = n(212455),
    d = n(652215);

function _(e) {
    let [t, n] = i.useState(!1), [_, A] = i.useState(!1), E = a.default.cast(e), {
        joinRequest: m,
        guild: I
    } = (0, r.cf)([c.A, u.A, l.A, s.A], () => {
        let e = c.A.getRequest(E);
        if (null == e) return {
            joinRequest: null,
            isModmin: !1,
            guild: null
        };
        let t = l.A.getGuild(e.guildId) ?? u.A.getJoinRequestGuild(e.guildId);
        return {
            joinRequest: e,
            isModmin: null != t && s.A.can(d.xBc.KICK_MEMBERS, t),
            guild: t
        }
    });
    return i.useEffect(() => {
        null != I || _ || (A(!0), o.A.fetchRequestToJoinGuilds())
    }, [I, _]), i.useEffect(() => {
        null == m && (n(!0), o.A.fetchGuildJoinRequest(E).finally(() => {
            n(!1)
        }))
    }, [m, E]), {
        loading: t,
        joinRequest: m,
        joinRequestGuild: I
    }
}