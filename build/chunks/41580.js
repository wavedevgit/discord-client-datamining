/** chunk id: 41580 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(64700),
    r = n(311907),
    i = n(451988),
    l = n(964486),
    o = n(430452),
    s = n(383501),
    _ = n(927813),
    u = n(499156),
    c = n(731854);
let d = 2.5 * _.A.Millis.SECOND,
    p = +_.A.Millis.HOUR;

function A() {
    let [e, t] = a.useState(!1), n = (0, r.bG)([o.Ay], () => o.Ay.getMode() === c.TB.PUSH_TO_TALK), _ = (0, r.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < d), [A, g] = a.useState(!1), {
        showPTTJoinTooltip: f
    } = u.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = a.useRef(new i.Ep), b = a.useRef(new i.Ep);
    a.useEffect(() => {
        if (_ && n && !e) {
            if (u.A.getConfig({
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
    let C = a.useCallback(() => {
        g(!1), m.current.stop()
    }, []);
    return (0, l.l0)(() => {
        m.current.stop(), b.current.stop()
    }), {
        shouldShowTooltip: A,
        dismissTooltip: C
    }
}