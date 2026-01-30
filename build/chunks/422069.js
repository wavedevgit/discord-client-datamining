/** chunk id: 422069, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => d
});
var n, i, a = l(311907),
    r = l(73153);
let s = {},
    o = {};
class c extends(i = a.Ay.Store) {
    getSimilarGames(e) {
        return s[e]
    }
    getSimilarGamesError(e) {
        return o[e]
    }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
    value: "GameProfileStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : c[n] = "GameProfileStore";
let d = new c(r.h, {
    GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function(e) {
        let {
            applicationId: t,
            games: l
        } = e;
        s[t] = l
    },
    GAME_PROFILE_GET_SIMILAR_GAMES_ERROR: function(e) {
        let {
            applicationId: t,
            error: l
        } = e;
        o[t] = l
    }
})