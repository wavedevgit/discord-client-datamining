/** chunk id: 843402 params = (module,exports,require) **/
a.d(t, {
    a2: () => s,
    e0: () => u
});
var r = a(73153),
    n = a(723702),
    l = a(837921);

function s() {
    if (!(0, n.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    l.Ay.setCandidateGamesCallback(e => {
        r.h.dispatch({
            type: "CANDIDATE_GAMES_CHANGE",
            games: e
        })
    }), r.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
    })
}

function u() {
    if (!(0, n.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    l.Ay.clearCandidateGamesCallback(), r.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
    })
}
a(223273).Lb.ALL