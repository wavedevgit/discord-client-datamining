/** Chunk was on 97492 **/
/** chunk id: 957283, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => s
});
var r = n(311907),
    l = n(940382),
    i = n(761640);

function s() {
    let e = (0, r.bG)([i.Ay], () => i.Ay.getSidebarState(i.fe)),
        t = (null == e ? void 0 : e.type) === l.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: null == t ? void 0 : t.channelId,
        hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === l.LU.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
    }
}