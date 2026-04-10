/** chunk id: 216954 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    l = n(587895),
    r = n(25171),
    a = n(651743);

function s(e) {
    let t, n, {
        gameId: s
    } = e;
    t = a.A.launchableGames[s], (null != (n = l.A.getApplication(s)) ? r.A.isLaunchable(n) : r.A.isGameLaunchable(s)).then(e => {
        e !== t && i.h.dispatch({
            type: "GAME_LAUNCHABLE_UPDATE",
            gameId: s,
            isLaunchable: e
        })
    })
}
let o = {
    initialize() {
        i.h.subscribe("CHECK_LAUNCHABLE_GAME", s)
    }
}