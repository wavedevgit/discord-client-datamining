/** Chunk was on 60667 **/
/** chunk id: 843402, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a2: () => s,
    e0: () => a
}), n(65821);
var r = n(73153),
    i = n(723702),
    l = n(837921);

function s() {
    if (!(0, i.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    l.Ay.setCandidateGamesCallback(e => {
        r.h.dispatch({
            type: "CANDIDATE_GAMES_CHANGE",
            games: e
        })
    }), r.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
    })
}

function a() {
    if (!(0, i.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    l.Ay.clearCandidateGamesCallback(), r.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
    })
}
n(223273).Lb.ALL