/** Chunk was on 5606 **/
/** chunk id: 200921, original params: e,t,n (module,exports,require) **/
n.d(t, {
    GY: () => s,
    U0: () => o,
    ZQ: () => a
});
var r = n(562465),
    i = n(73153),
    l = n(652215);
async function s() {
    var e;
    let t = await r.Bo.get({
        url: l.Rsh.AUTH_SESSIONS,
        rejectWithError: !1
    });
    return (null == t ? void 0 : t.ok) && (null == (e = t.body) ? void 0 : e.user_sessions) != null && i.h.dispatch({
        type: "FETCH_AUTH_SESSIONS_SUCCESS",
        sessions: t.body.user_sessions
    }), t
}

function a() {
    i.h.dispatch({
        type: "FETCH_AUTH_SESSIONS_SUCCESS",
        sessions: []
    })
}
async function o(e) {
    if (Array.isArray(e)) {
        if (0 === e.length) return
    } else e = [e];
    let t = await r.Bo.post({
        url: l.Rsh.AUTH_SESSIONS_LOGOUT,
        body: {
            session_id_hashes: e
        },
        rejectWithError: !1
    });
    return (null == t ? void 0 : t.ok) && i.h.dispatch({
        type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
        sessionIdHashes: e
    }), t
}