/** chunk id: 41580 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(64700),
    r = n(311907),
    l = n(451988),
    i = n(964486),
    o = n(430452),
    s = n(383501),
    _ = n(927813),
    c = n(499156),
    u = n(731854);
let d = 2.5 * _.A.Millis.SECOND,
    p = +_.A.Millis.HOUR;

function A() {
    let [e, t] = a.useState(!1), n = (0, r.bG)([o.Ay], () => o.Ay.getMode() === u.TB.PUSH_TO_TALK), _ = (0, r.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < d), [A, g] = a.useState(!1), {
        showPTTJoinTooltip: f
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = a.useRef(new l.Ep), b = a.useRef(new l.Ep);
    a.useEffect(() => {
        if (_ && n && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !f) return;
            g(!0), t(!0), b.current.start(p, () => {
                t(!1)
            }), m.current.start(d, () => {
                g(!1)
            })
        }
        _ || g(!1)
    }, [_, n, f, e]);
    let h = a.useCallback(() => {
        g(!1), m.current.stop()
    }, []);
    return (0, i.l0)(() => {
        m.current.stop(), b.current.stop()
    }), {
        shouldShowTooltip: A,
        dismissTooltip: h
    }
}