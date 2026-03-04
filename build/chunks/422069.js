/** chunk id: 422069, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153);
let a = {},
    s = {};
class r extends i.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return a[e]
    }
    getSimilarGamesError(e) {
        return s[e]
    }
}
let o = new r(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
        let {
            applicationId: t,
            games: n
        } = e;
        a[t] = n
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
        let {
            applicationId: t,
            error: n
        } = e;
        s[t] = n
    }
})