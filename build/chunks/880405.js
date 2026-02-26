/** chunk id: 880405, original params: e,t,i (module,exports,require) **/
i.d(t, {
    N: () => r
});
var n = i(562465),
    l = i(73153),
    a = i(198982),
    s = i(652215);
let r = async e => {
    try {
        let t = ((await n.Bo.get({
            url: s.Rsh.SIMILAR_GAMES(e),
            rejectWithError: !1
        })).body.similar_games ?? []).filter(t => t !== e);
        l.h.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: t
        })
    } catch (e) {
        throw new a.LG(e)
    }
}