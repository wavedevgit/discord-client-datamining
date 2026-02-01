/** chunk id: 843402, original params: e,t,r (module,exports,require) **/
r.d(t, {
    a2: () => o,
    e0: () => u
}), r(65821);
var n = r(73153),
    l = r(723702),
    a = r(837921);

function o() {
    if (!(0, l.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    a.Ay.setCandidateGamesCallback(e => {
        n.h.dispatch({
            type: "CANDIDATE_GAMES_CHANGE",
            games: e
        })
    }), n.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
    })
}

function u() {
    if (!(0, l.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    a.Ay.clearCandidateGamesCallback(), n.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
    })
}
r(223273).Lb.ALL