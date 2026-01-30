/** chunk id: 197305, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var r, i = n(311907),
    l = n(73153),
    s = n(213012),
    a = n(71393);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let c = {},
    d = () => {
        c = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0
        }
    };
d();
class u extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(a.A)
    }
    getState() {
        return c
    }
    getGuildAffinity(e) {
        return c.guildAffinitiesByGuildId[e]
    }
    get affinities() {
        return c.guildAffinities
    }
    get hasRequestResolved() {
        return 0 !== c.lastFetched
    }
}
o(u, "displayName", "GuildAffinitiesStore"), o(u, "persistKey", "GuildAffinitiesStore");
let _ = new u(l.h, {
    CONNECTION_OPEN: function() {
        return Date.now() - c.lastFetched > 864e5 && (0, s.I)(), !1
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
        let {
            guildAffinities: t
        } = e;
        c.guildAffinities = [], c.guildAffinitiesByGuildId = {}, c.lastFetched = Date.now(), t.forEach((e, t) => {
            let {
                affinity: n,
                guild_id: r
            } = e, i = {
                score: n,
                guildId: r,
                index: t
            };
            c.guildAffinitiesByGuildId[r] = i, c.guildAffinities.push(i)
        })
    },
    LOGOUT: function() {
        d()
    }
})