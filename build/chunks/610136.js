/** chunk id: 610136 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(311907),
    l = n(73153),
    a = n(49463),
    r = n(617617),
    s = n(71393),
    o = n(576705),
    c = n(903093);
let d = {},
    u = {};

function _() {
    let e = r.A.getGuildsProto() ?? {},
        t = s.A.getGuildsArray();
    for (let n of (u = {}, t)) u[n.id] = {
        guildId: n.id,
        guildName: n.name,
        ...e[n.id]
    }
}

function m(e) {
    return null != e && Object.keys(e).length > 0 ? {
        raidDetectedAt: e.raid_detected_at,
        dmSpamDetectedAt: e.dm_spam_detected_at,
        dmsDisabledUntil: e.dms_disabled_until,
        invitesDisabledUntil: e.invites_disabled_until
    } : null
}
class A extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(r.A, s.A, o.A, a.A), this.syncWith([r.A, s.A, o.A, a.A], _)
    }
    getGuildIncident(e) {
        return d[e]
    }
    getIncidentsByGuild() {
        return d
    }
    getGuildAlertSettings() {
        return u
    }
}
let E = new A(l.h, {
    CONNECTION_OPEN: function(e) {
        for (let t of (d = {}, e.guilds)) {
            let e = m(t.properties?.incidents_data);
            null != e && ((0, c.k$)(e) || (0, c._J)(e)) && (d[t.id] = e)
        }
    },
    GUILD_CREATE: function(e) {
        let {
            guild: t
        } = e, n = m(t.properties?.incidents_data);
        null != n && ((0, c.k$)(n) || (0, c._J)(n)) && (d[t.id] = n)
    },
    GUILD_UPDATE: function(e) {
        let {
            guild: t
        } = e, n = m(t.incidents_data);
        null != n && ((0, c.k$)(n) || (0, c._J)(n)) ? d[t.id] = n : delete d[t.id]
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        delete d[t.id]
    },
    LOGOUT: function(e) {
        d = {}
    }
})