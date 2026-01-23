/** Chunk was on 13492 **/
/** chunk id: 127938, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => d
});
var r = t(627968),
    o = t(64700),
    a = t(311907),
    i = t(833147),
    l = t(33445),
    c = t(91242),
    _ = t(193855),
    s = t(360469);

function d() {
    let e = (0, a.bG)([c.A], () => c.A.getConnectedFrame()),
        n = (0, a.bG)([c.A], () => (null == e ? void 0 : e.applicationId) != null && c.A.isProxyTicketRefreshing(e.applicationId), [e]),
        t = o.useCallback(e => {
            let {
                application: n
            } = e;
            return (0, r.jsx)(_.A, {
                applicationId: n.id
            })
        }, []),
        d = o.useCallback(n => {
            let {
                application: t
            } = n, o = {};
            null != e && (o.instance_id = "example-cl-instance", o.platform = s.vu.DESKTOP, null != e.proxyTicket && (o.discord_proxy_ticket = e.proxyTicket));
            let a = null == e ? void 0 : e.url;
            return (0, r.jsx)(i.A, {
                application: t,
                queryParams: o,
                url: a
            })
        }, [e]);
    return (0, r.jsx)(l.E, {
        activity: e,
        isLoading: n,
        renderHeader: t,
        renderActivityIFrameWithLoadedData: d
    })
}