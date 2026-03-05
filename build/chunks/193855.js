/** chunk id: 193855 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968),
    i = n(64700),
    o = n(311907),
    r = n(780376),
    l = n(625180),
    c = n(91242),
    _ = n(905579);

function s(e) {
    let {
        applicationId: t
    } = e, n = (0, o.bG)([c.A], () => c.A.getConnectedFrame()), s = i.useCallback(async () => {
        await l.A.refreshProxyTicket({
            applicationId: t
        }), _.A.popInFrame()
    }, [t]);
    return (0, a.jsx)(r.d, {
        hasActivity: null != n,
        applicationId: t,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: s,
        channelId: void 0
    })
}