/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var r = a(64700),
    n = a(311907),
    _ = a(451988),
    o = a(964486),
    i = a(430452),
    s = a(383501),
    l = a(927813),
    u = a(340913),
    c = a(731854);
let d = 2.5 * l.A.Millis.SECOND,
    p = +l.A.Millis.HOUR;

function f() {
    let [e, t] = r.useState(!1), a = (0, n.bG)([i.Ay], () => i.Ay.getMode() === c.TB.PUSH_TO_TALK), l = (0, n.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < d), [f, b] = r.useState(!1), {
        showPTTJoinTooltip: g
    } = u.A.useConfig({
        location: "usePTTJoinTooltip"
    }), A = r.useRef(new _.Ep), C = r.useRef(new _.Ep);
    r.useEffect(() => {
        if (l && a && !e) {
            if (u.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            b(!0), t(!0), C.current.start(p, () => {
                t(!1)
            }), A.current.start(d, () => {
                b(!1)
            })
        }
        l || b(!1)
    }, [l, a, g, e]);
    let T = r.useCallback(() => {
        b(!1), A.current.stop()
    }, []);
    return (0, o.l0)(() => {
        A.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: f,
        dismissTooltip: T
    }
}