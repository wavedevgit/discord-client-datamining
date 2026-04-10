/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => A
});
var n = a(64700),
    r = a(311907),
    i = a(451988),
    l = a(964486),
    o = a(430452),
    s = a(383501),
    _ = a(927813),
    c = a(499156),
    d = a(731854);
let u = 2.5 * _.A.Millis.SECOND,
    p = +_.A.Millis.HOUR;

function A() {
    let [e, t] = n.useState(!1), a = (0, r.bG)([o.Ay], () => o.Ay.getMode() === d.TB.PUSH_TO_TALK), _ = (0, r.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < u), [A, g] = n.useState(!1), {
        showPTTJoinTooltip: m
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), b = n.useRef(new i.Ep), f = n.useRef(new i.Ep);
    n.useEffect(() => {
        if (_ && a && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !m) return;
            g(!0), t(!0), f.current.start(p, () => {
                t(!1)
            }), b.current.start(u, () => {
                g(!1)
            })
        }
        _ || g(!1)
    }, [_, a, m, e]);
    let h = n.useCallback(() => {
        g(!1), b.current.stop()
    }, []);
    return (0, l.l0)(() => {
        b.current.stop(), f.current.stop()
    }), {
        shouldShowTooltip: A,
        dismissTooltip: h
    }
}