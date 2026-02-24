/** chunk id: 197305, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => u
}), i(321073);
var n = i(311907),
    s = i(73153),
    l = i(213012),
    r = i(71393);
let a = {},
    d = () => {
        a = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0
        }
    };
d();
class o extends n.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (a = e), this.waitFor(r.A)
    }
    getState() {
        return a
    }
    getGuildAffinity(e) {
        return a.guildAffinitiesByGuildId[e]
    }
    get affinities() {
        return a.guildAffinities
    }
    get hasRequestResolved() {
        return 0 !== a.lastFetched
    }
}
let u = new o(s.h, {
    CONNECTION_OPEN: function() {
        return Date.now() - a.lastFetched > 864e5 && (0, l.I)(), !1
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
        let {
            guildAffinities: t
        } = e;
        a.guildAffinities = [], a.guildAffinitiesByGuildId = {}, a.lastFetched = Date.now(), t.forEach((e, t) => {
            let {
                affinity: i,
                guild_id: n
            } = e, s = {
                score: i,
                guildId: n,
                index: t
            };
            a.guildAffinitiesByGuildId[n] = s, a.guildAffinities.push(s)
        })
    },
    LOGOUT: function() {
        d()
    }
})