/** chunk id: 127938 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(833147),
    o = n(33445),
    s = n(91242),
    c = n(193855),
    d = n(360469);

function u() {
    let e = (0, a.bG)([s.A], () => s.A.getConnectedFrame()),
        t = (0, a.bG)([s.A], () => e?.applicationId != null && s.A.isProxyTicketRefreshing(e.applicationId), [e]),
        n = l.useCallback(e => {
            let {
                application: t
            } = e;
            return (0, i.jsx)(c.A, {
                applicationId: t.id
            })
        }, []),
        u = l.useCallback(t => {
            let {
                application: n
            } = t, l = {};
            null != e && (l.instance_id = "example-cl-instance", l.platform = d.vu.DESKTOP, null != e.proxyTicket && (l.discord_proxy_ticket = e.proxyTicket));
            let a = e?.url;
            return (0, i.jsx)(r.A, {
                application: n,
                queryParams: l,
                url: a
            })
        }, [e]);
    return (0, i.jsx)(o.E, {
        activity: e,
        isLoading: t,
        renderHeader: n,
        renderActivityIFrameWithLoadedData: u
    })
}