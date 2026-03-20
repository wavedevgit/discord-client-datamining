/** chunk id: 216954 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    a = n(587895),
    l = n(25171),
    r = n(651743);

function s(e) {
    let t, n, {
        gameId: s
    } = e;
    t = r.A.launchableGames[s], (null != (n = a.A.getApplication(s)) ? l.A.isLaunchable(n) : l.A.isGameLaunchable(s)).then(e => {
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