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
let u = {},
    d = {};

function _() {
    let e = r.A.getGuildsProto() ?? {},
        t = s.A.getGuildsArray();
    for (let n of (d = {}, t)) d[n.id] = {
        guildId: n.id,
        guildName: n.name,
        ...e[n.id]
    }
}

function A(e) {
    return null != e && Object.keys(e).length > 0 ? {
        raidDetectedAt: e.raid_detected_at,
        dmSpamDetectedAt: e.dm_spam_detected_at,
        dmsDisabledUntil: e.dms_disabled_until,
        invitesDisabledUntil: e.invites_disabled_until
    } : null
}
class m extends i.Ay.Store {
    static displayName = "GuildIncidentsStore";
    initialize() {
        this.waitFor(r.A, s.A, o.A, a.A), this.syncWith([r.A, s.A, o.A, a.A], _)
    }
    getGuildIncident(e) {
        return u[e]
    }
    getIncidentsByGuild() {
        return u
    }
    getGuildAlertSettings() {
        return d
    }
}
let E = new m(l.h, {
    CONNECTION_OPEN: function(e) {
        for (let t of (u = {}, e.guilds)) {
            let e = A(t.properties?.incidents_data);
            null != e && ((0, c.k$)(e) || (0, c._J)(e)) && (u[t.id] = e)
        }
    },
    GUILD_CREATE: function(e) {
        let {
            guild: t
        } = e, n = A(t.properties?.incidents_data);
        null != n && ((0, c.k$)(n) || (0, c._J)(n)) && (u[t.id] = n)
    },
    GUILD_UPDATE: function(e) {
        let {
            guild: t
        } = e, n = A(t.incidents_data);
        null != n && ((0, c.k$)(n) || (0, c._J)(n)) ? u[t.id] = n : delete u[t.id]
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        delete u[t.id]
    },
    LOGOUT: function(e) {
        u = {}
    }
})