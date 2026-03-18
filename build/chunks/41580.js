/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var n = a(64700),
    _ = a(311907),
    r = a(451988),
    o = a(964486),
    i = a(430452),
    l = a(383501),
    s = a(927813),
    c = a(340913),
    u = a(731854);
let d = 2.5 * s.A.Millis.SECOND,
    p = +s.A.Millis.HOUR;

function b() {
    let [e, t] = n.useState(!1), a = (0, _.bG)([i.Ay], () => i.Ay.getMode() === u.TB.PUSH_TO_TALK), s = (0, _.bG)([l.A], () => null != l.A.getChannelId() && (l.A.getDuration() ?? Number.MAX_VALUE) < d), [b, f] = n.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = n.useRef(new r.Ep), x = n.useRef(new r.Ep);
    n.useEffect(() => {
        if (s && a && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), x.current.start(p, () => {
                t(!1)
            }), m.current.start(d, () => {
                f(!1)
            })
        }
        s || f(!1)
    }, [s, a, g, e]);
    let A = n.useCallback(() => {
        f(!1), m.current.stop()
    }, []);
    return (0, o.l0)(() => {
        m.current.stop(), x.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: A
    }
}