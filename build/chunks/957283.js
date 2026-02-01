/** chunk id: 957283, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => a
});
var l = n(311907),
    r = n(940382),
    i = n(761640);

function a() {
    let e = (0, l.bG)([i.Ay], () => i.Ay.getSidebarState(i.fe)),
        t = (null == e ? void 0 : e.type) === r.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: null == t ? void 0 : t.channelId,
        hasSingleMessageRequest: (null == t ? void 0 : t.details) != null && t.details.type === r.LU.MESSAGE_REQUEST && t.details.hasSingleMessageRequest
    }
}