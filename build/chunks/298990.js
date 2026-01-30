/** Chunk was on 12925 **/
/** chunk id: 298990, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Jb: () => i,
    b4: () => o,
    oR: () => a,
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

function a(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_QUERY",
        query: e
    })
}

function o(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        channelId: e
    })
}

function i(e) {
    r.h.dispatch({
        type: "ACTIVITY_INVITE_MODAL_SEND",
        userId: e
    })
}