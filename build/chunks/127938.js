/** chunk id: 127938, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    o = n(833147),
    a = n(33445),
    c = n(91242),
    s = n(193855),
    u = n(360469);

function d() {
    let e = (0, i.bG)([c.A], () => c.A.getConnectedFrame()),
        t = (0, i.bG)([c.A], () => (null == e ? void 0 : e.applicationId) != null && c.A.isProxyTicketRefreshing(e.applicationId), [e]),
        n = r.useCallback(e => {
            let {
                application: t
            } = e;
            return (0, l.jsx)(s.A, {
                applicationId: t.id
            })
        }, []),
        d = r.useCallback(t => {
            let {
                application: n
            } = t, r = {};
            null != e && (r.instance_id = "example-cl-instance", r.platform = u.vu.DESKTOP, null != e.proxyTicket && (r.discord_proxy_ticket = e.proxyTicket));
            let i = null == e ? void 0 : e.url;
            return (0, l.jsx)(o.A, {
                application: n,
                queryParams: r,
                url: i
            })
        }, [e]);
    return (0, l.jsx)(a.E, {
        activity: e,
        isLoading: t,
        renderHeader: n,
        renderActivityIFrameWithLoadedData: d
    })
}