/** chunk id: 178186, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ey: () => d,
    O$: () => o,
    Rw: () => u,
    S9: () => s,
    q0: () => a
});
var i = n(562465),
    r = n(73153),
    l = n(652215);

function a() {
    r.h.dispatch({
        type: "VIBING_WUMPUS_PLAY_MUSIC"
    })
}

function s() {
    r.h.dispatch({
        type: "VIBING_WUMPUS_STOP_MUSIC"
    })
}

function o() {
    r.h.dispatch({
        type: "VIBING_WUMPUS_PAUSE_MUSIC"
    })
}

function d(e) {
    return i.Bo.del({
        url: l.Rsh.DELETE_SAFETY_WARNINGS(e),
        rejectWithError: !1
    })
}

function u(e, t) {
    return i.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(e),
        body: {
            safety_warning_type: t
        },
        rejectWithError: !1
    })
}