/** chunk id: 258367, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(64700),
    r = n(311907),
    i = n(256311),
    a = n(773669),
    s = n(222823),
    o = n(954571),
    c = n(883600),
    u = n(942366),
    d = n(343328),
    h = n(652215);

function p(e) {
    let t = (0, u.A)(e),
        n = (0, r.bG)([a.default], () => a.default.locale),
        p = (0, r.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
        f = (0, d.A)(e),
        m = l.useRef(f ? Date.now() : null),
        g = (0, r.bG)([s.Ay], () => s.Ay.getUnreadCount(e), [e]),
        A = l.useRef(g);
    l.useEffect(() => {
        A.current = g
    }), l.useEffect(() => {
        m.current = Date.now()
    }, [f]), l.useEffect(() => {
        f && null != t && i.A.fetchChangelog(t, n, !0)
    }, [t, n, f]), l.useEffect(() => {
        f && null != p && o.default.track(h.HAw.CHANGE_LOG_OPENED, {
            change_log_id: "".concat(p.date, ":").concat(p.revision),
            unread_count: A.current
        })
    }, [f, p]), l.useEffect(() => {
        let e = m.current;
        return () => {
            f && null != p && null != e && (o.default.track(h.HAw.CHANGE_LOG_CLOSED, {
                seconds_open: Math.round((Date.now() - e) / 1e3),
                change_log_id: "".concat(p.date, ":").concat(p.revision),
                unread_count: A.current
            }), m.current = 0)
        }
    }, [f, p])
}