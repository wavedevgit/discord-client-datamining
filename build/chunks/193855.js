/** chunk id: 193855, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => s
});
var r = t(627968),
    o = t(64700),
    a = t(311907),
    i = t(780376),
    l = t(625180),
    c = t(91242),
    _ = t(905579);

function s(e) {
    let {
        applicationId: n
    } = e, t = (0, a.bG)([c.A], () => c.A.getConnectedFrame()), s = o.useCallback(async () => {
        await l.A.refreshProxyTicket({
            applicationId: n
        }), _.A.popInFrame()
    }, [n]);
    return (0, r.jsx)(i.d, {
        hasActivity: null != t,
        applicationId: n,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: s,
        channelId: void 0
    })
}