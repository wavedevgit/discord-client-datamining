/** chunk id: 197305 params = (module,exports,require) **/
i.d(e, {
    A: () => u
}), i(321073);
var n = i(311907),
    l = i(73153),
    r = i(213012),
    s = i(71393);
let a = {},
    o = () => {
        a = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0
        }
    };
o();
class d extends n.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(t) {
        null != t && (a = t), this.waitFor(s.A)
    }
    getState() {
        return a
    }
    getGuildAffinity(t) {
        return a.guildAffinitiesByGuildId[t]
    }
    get affinities() {
        return a.guildAffinities
    }
    get hasRequestResolved() {
        return 0 !== a.lastFetched
    }
}
let u = new d(l.h, {
    CONNECTION_OPEN: function() {
        return Date.now() - a.lastFetched > 864e5 && (0, r.I)(), !1
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function(t) {
        let {
            guildAffinities: e
        } = t;
        a.guildAffinities = [], a.guildAffinitiesByGuildId = {}, a.lastFetched = Date.now(), e.forEach((t, e) => {
            let {
                affinity: i,
                guild_id: n
            } = t, l = {
                score: i,
                guildId: n,
                index: e
            };
            a.guildAffinitiesByGuildId[n] = l, a.guildAffinities.push(l)
        })
    },
    LOGOUT: function() {
        o()
    }
})