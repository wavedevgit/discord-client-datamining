/** chunk id: 422069 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(311907),
    a = n(73153);
let i = {},
    r = {};
class s extends l.Ay.Store {
    static displayName = "GameProfileStore";
    getSimilarGames(e) {
        return i[e]
    }
    getSimilarGamesError(e) {
        return r[e]
    }
}
let c = new s(a.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
        let {
            applicationId: t,
            games: n
        } = e;
        i[t] = n
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
        let {
            applicationId: t,
            error: n
        } = e;
        r[t] = n
    }
})