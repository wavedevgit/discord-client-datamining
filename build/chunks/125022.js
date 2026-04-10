/** chunk id: 125022 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(311907),
    l = n(73153),
    r = n(927813),
    a = n(48128);
let s = r.A.Millis.DAY,
    o = 5 * r.A.Millis.MINUTE,
    d = {},
    c = !1,
    u = null,
    A = null;

function h() {
    !(c || null != A && Date.now() < A + o) && (null == u || Date.now() >= u + s) && a.A.fetch()
}
class _ extends i.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getUnclaimedGameIdsForGuild(e) {
        return h(), d[e] ?? []
    }
    hasUnclaimedGames(e) {
        h();
        let t = d[e];
        return null != t && t.length > 0
    }
    getGuildIdsWithUnclaimedGames() {
        return h(), Object.keys(d).filter(e => d[e].length > 0)
    }
    get fetching() {
        return c
    }
    get lastFetchedAt() {
        return u
    }
}
let m = new _(l.h, {
    LOGOUT: function() {
        d = {}, c = !1, u = null, A = null
    },
    UNCLAIMED_GAMES_FETCH: function() {
        c = !0
    },
    UNCLAIMED_GAMES_FETCH_SUCCESS: function(e) {
        let {
            guildIdToGameIds: t
        } = e;
        d = t, c = !1, u = Date.now(), A = null
    },
    UNCLAIMED_GAMES_FETCH_FAIL: function() {
        c = !1, A = Date.now()
    }
})