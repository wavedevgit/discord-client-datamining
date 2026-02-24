/** chunk id: 843402, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a2: () => l,
    e0: () => r
});
var i = n(73153),
    s = n(723702),
    a = n(837921);

function l() {
    if (!(0, s.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    a.Ay.setCandidateGamesCallback(e => {
        i.h.dispatch({
            type: "CANDIDATE_GAMES_CHANGE",
            games: e
        })
    }), i.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
    })
}

function r() {
    if (!(0, s.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    a.Ay.clearCandidateGamesCallback(), i.h.dispatch({
        type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
    })
}
n(223273).Lb.ALL