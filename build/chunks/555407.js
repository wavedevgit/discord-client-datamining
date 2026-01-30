/** chunk id: 555407, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => v
}), n(896048);
var l = n(64700),
    i = n(735438),
    r = n.n(i),
    s = n(311907),
    a = n(919796),
    u = n(927813),
    c = n(661191),
    o = n(285059),
    d = n(698441),
    h = n(974930);

function v(t, e, n) {
    let i = (0, s.bG)([d.Ay], () => d.Ay.getGuildScheduledEvent(t)),
        v = (0, a.A)(n),
        [m, g] = l.useState(null != n && null != i ? (0, h.er)(4, (0, h.X7)(n), new Date(i.scheduled_start_time)) : []);
    l.useEffect(() => {
        if (null == v || null == n || null == i || r().isEqual(v, n)) return;
        let t = (0, h.X7)(n);
        g((0, h.er)(m.length, t, new Date(i.scheduled_start_time)))
    }, [n, m.length, i, v]), l.useEffect(() => {
        if (null == e) return;
        let n = m.map(t => c.default.fromTimestamp(Math.floor(t.getTime() / u.A.Millis.SECOND) * u.A.Millis.SECOND));
        o.A.getGuildEventUserCounts(e, t, n)
    }, [t, e, m]);
    let f = l.useMemo(() => {
        if (null == n || 0 === m.length || (null == i ? void 0 : i.scheduled_start_time) == null) return !1;
        let t = new Date;
        t.setFullYear(t.getFullYear() + h.Ze);
        let e = m[m.length - 1],
            l = (0, h.X7)(n).after(e);
        return null != l && l <= t
    }, [n, m, null == i ? void 0 : i.scheduled_start_time]);
    return {
        recurrenceStartTimes: m,
        canViewMoreRecurrences: f,
        updateRecurrenceStartTimes: () => {
            if (null == n || null == i) return;
            let t = (0, h.X7)(n),
                e = m[m.length - 1];
            g([...m, ...(0, h.er)(4, t, e, !0)])
        }
    }
}