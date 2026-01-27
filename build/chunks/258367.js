/** Chunk was on 77870 **/
/** chunk id: 258367, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(64700),
    l = n(311907),
    i = n(256311),
    s = n(773669),
    a = n(222823),
    o = n(954571),
    c = n(883600),
    u = n(942366),
    d = n(343328),
    p = n(652215);

function h(e) {
    let t = (0, u.A)(e),
        n = (0, l.bG)([s.default], () => s.default.locale),
        h = (0, l.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
        f = (0, d.A)(e),
        g = r.useRef(f ? Date.now() : null),
        m = (0, l.bG)([a.Ay], () => a.Ay.getUnreadCount(e), [e]),
        b = r.useRef(m);
    r.useEffect(() => {
        b.current = m
    }), r.useEffect(() => {
        g.current = Date.now()
    }, [f]), r.useEffect(() => {
        f && null != t && i.A.fetchChangelog(t, n, !0)
    }, [t, n, f]), r.useEffect(() => {
        f && null != h && o.default.track(p.HAw.CHANGE_LOG_OPENED, {
            change_log_id: "".concat(h.date, ":").concat(h.revision),
            unread_count: b.current
        })
    }, [f, h]), r.useEffect(() => {
        let e = g.current;
        return () => {
            f && null != h && null != e && (o.default.track(p.HAw.CHANGE_LOG_CLOSED, {
                seconds_open: Math.round((Date.now() - e) / 1e3),
                change_log_id: "".concat(h.date, ":").concat(h.revision),
                unread_count: b.current
            }), g.current = 0)
        }
    }, [f, h])
}