/** chunk id: 193855, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    o = n(780376),
    a = n(625180),
    c = n(91242),
    s = n(905579);

function u(e) {
    let {
        applicationId: t
    } = e, n = (0, i.bG)([c.A], () => c.A.getConnectedFrame()), u = r.useCallback(async () => {
        await a.A.refreshProxyTicket({
            applicationId: t
        }), s.A.popInFrame()
    }, [t]);
    return (0, l.jsx)(o.d, {
        hasActivity: null != n,
        applicationId: t,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: u,
        channelId: void 0
    })
}