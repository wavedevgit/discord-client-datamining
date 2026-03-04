/** chunk id: 422069, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(311907),
    l = i(73153);
let a = {},
    s = {};
class r extends n.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return a[e]
    }
    getSimilarGamesError(e) {
        return s[e]
    }
}
let c = new r(l.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
        let {
            applicationId: t,
            games: i
        } = e;
        a[t] = i
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
        let {
            applicationId: t,
            error: i
        } = e;
        s[t] = i
    }
})