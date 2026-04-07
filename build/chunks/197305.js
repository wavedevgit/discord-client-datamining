/** chunk id: 197305 params = (module,exports,require) **/
n.d(e, {
    A: () => d
}), n(321073);
var i = n(311907),
    l = n(73153),
    r = n(213012),
    s = n(71393);
let a = {},
    o = () => {
        a = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0
        }
    };
o();
class u extends i.Ay.PersistedStore {
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
let d = new u(l.h, {
    CONNECTION_OPEN: function() {
        return Date.now() - a.lastFetched > 864e5 && (0, r.I)(), !1
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function(t) {
        let {
            guildAffinities: e
        } = t;
        a.guildAffinities = [], a.guildAffinitiesByGuildId = {}, a.lastFetched = Date.now(), e.forEach((t, e) => {
            let {
                affinity: n,
                guild_id: i
            } = t, l = {
                score: n,
                guildId: i,
                index: e
            };
            a.guildAffinitiesByGuildId[i] = l, a.guildAffinities.push(l)
        })
    },
    LOGOUT: function() {
        o()
    }
})