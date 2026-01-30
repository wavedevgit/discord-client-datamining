/** chunk id: 880405, original params: e,t,l (module,exports,require) **/
l.d(t, {
    N: () => s
});
var n = l(562465),
    i = l(73153),
    a = l(198982),
    r = l(652215);
let s = async e => {
    try {
        var t;
        let l = (null != (t = (await n.Bo.get({
            url: r.Rsh.SIMILAR_GAMES(e),
            rejectWithError: !1
        })).body.similar_games) ? t : []).filter(t => t !== e);
        i.h.dispatch({
            type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS",
            applicationId: e,
            games: l
        })
    } catch (e) {
        throw new a.LG(e)
    }
}