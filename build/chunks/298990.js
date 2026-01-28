/** Chunk was on 78528 **/
/** chunk id: 298990, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Jb: () => a,
    b4: () => s,
    oR: () => i,
    qf: () => l
});
var r = n(73153);

function l(e, t, n) {
    return new Promise(l => {
        setTimeout(() => {
            r.h.dispatch({
                type: "ACTIVITY_INVITE_MODAL_OPEN",
                activity: e,
                isPrivate: t,
                context: n,
                resolve: l
            })
        }, 0)
    })
}

function i(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_QUERY",
        query: e
    })
}

function s(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        channelId: e
    })
}

function a(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        userId: e
    })
}