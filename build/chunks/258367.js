/** Chunk was on 1113 **/
/** chunk id: 258367, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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
    h = n(652215);

function p(e) {
    let t = (0, u.A)(e),
        n = (0, l.bG)([s.default], () => s.default.locale),
        p = (0, l.bG)([c.A], () => c.A.getChangelog(null != t ? t : "", n), [t, n]),
        g = (0, d.A)(e),
        f = r.useRef(g ? Date.now() : null),
        m = (0, l.bG)([a.Ay], () => a.Ay.getUnreadCount(e), [e]),
        b = r.useRef(m);
    r.useEffect(() => {
        b.current = m
    }), r.useEffect(() => {
        f.current = Date.now()
    }, [g]), r.useEffect(() => {
        g && null != t && i.A.fetchChangelog(t, n, !0)
    }, [t, n, g]), r.useEffect(() => {
        g && null != p && o.default.track(h.HAw.CHANGE_LOG_OPENED, {
            change_log_id: "".concat(p.date, ":").concat(p.revision),
            unread_count: b.current
        })
    }, [g, p]), r.useEffect(() => {
        let e = f.current;
        return () => {
            g && null != p && null != e && (o.default.track(h.HAw.CHANGE_LOG_CLOSED, {
                seconds_open: Math.round((Date.now() - e) / 1e3),
                change_log_id: "".concat(p.date, ":").concat(p.revision),
                unread_count: b.current
            }), f.current = 0)
        }
    }, [g, p])
}