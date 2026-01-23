/** Chunk was on 61376 **/
/** chunk id: 178186, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Ey: () => o,
    O$: () => s,
    Rw: () => l,
    S9: () => u,
    q0: () => c
});
var r = n(562465),
    i = n(73153),
    a = n(652215);

function c() {
    i.h.dispatch({
        type: "VIBING_WUMPUS_PLAY_MUSIC"
    })
}

function u() {
    i.h.dispatch({
        type: "VIBING_WUMPUS_STOP_MUSIC"
    })
}

function s() {
    i.h.dispatch({
        type: "VIBING_WUMPUS_PAUSE_MUSIC"
    })
}

function o(t) {
    return r.Bo.del({
        url: a.Rsh.DELETE_SAFETY_WARNINGS(t),
        rejectWithError: !1
    })
}

function l(t, e) {
    return r.Bo.post({
        url: a.Rsh.ADD_SAFETY_WARNING(t),
        body: {
            safety_warning_type: e
        },
        rejectWithError: !1
    })
}