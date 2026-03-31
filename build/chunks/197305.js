/** chunk id: 197305 params = (module,exports,require) **/
i.d(t, {
    A: () => d
}), i(321073);
var n = i(311907),
    a = i(73153),
    l = i(213012),
    s = i(71393);
let r = {},
    o = () => {
        r = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0
        }
    };
o();
class c extends n.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (r = e), this.waitFor(s.A)
    }
    getState() {
        return r
    }
    getGuildAffinity(e) {
        return r.guildAffinitiesByGuildId[e]
    }
    get affinities() {
        return r.guildAffinities
    }
    get hasRequestResolved() {
        return 0 !== r.lastFetched
    }
}
let d = new c(a.h, {
    CONNECTION_OPEN: function() {
        return Date.now() - r.lastFetched > 864e5 && (0, l.I)(), !1
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
        let {
            guildAffinities: t
        } = e;
        r.guildAffinities = [], r.guildAffinitiesByGuildId = {}, r.lastFetched = Date.now(), t.forEach((e, t) => {
            let {
                affinity: i,
                guild_id: n
            } = e, a = {
                score: i,
                guildId: n,
                index: t
            };
            r.guildAffinitiesByGuildId[n] = a, r.guildAffinities.push(a)
        })
    },
    LOGOUT: function() {
        o()
    }
})