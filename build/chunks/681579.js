/** Chunk was on 43600 **/
/** chunk id: 681579, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => a,
    t: () => s
}), n(896048);
var l = n(73153),
    i = n(219271);

function s(e) {
    let {
        omitUserIds: t,
        guild: n,
        channel: s,
        applicationId: a,
        inviteTargetType: r
    } = e;
    return (0, i.u)().then(() => {
        l.h.dispatch({
            type: "LOAD_INVITE_SUGGESTIONS",
            omitUserIds: null != t ? t : new Set,
            guild: n,
            channel: s,
            applicationId: a,
            inviteTargetType: r
        })
    })
}

function a(e) {
    l.h.dispatch({
        type: "INVITE_SUGGESTIONS_SEARCH",
        query: e
    })
}
n(535820)