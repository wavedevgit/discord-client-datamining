/** chunk id: 193855 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(780376),
    o = n(625180),
    s = n(91242),
    c = n(905579);

function d(e) {
    let {
        applicationId: t
    } = e, n = (0, a.bG)([s.A], () => s.A.getConnectedFrame()), d = l.useCallback(async () => {
        await o.A.refreshProxyTicket({
            applicationId: t
        }), c.A.popInFrame()
    }, [t]);
    return (0, i.jsx)(r.d, {
        hasActivity: null != n,
        applicationId: t,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: d,
        channelId: void 0
    })
}