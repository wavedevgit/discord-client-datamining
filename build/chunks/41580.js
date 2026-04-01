/** chunk id: 41580 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(64700),
    a = n(311907),
    i = n(451988),
    l = n(964486),
    s = n(430452),
    o = n(383501),
    _ = n(927813),
    u = n(499156),
    c = n(731854);
let d = 2.5 * _.A.Millis.SECOND,
    p = +_.A.Millis.HOUR;

function A() {
    let [e, t] = r.useState(!1), n = (0, a.bG)([s.Ay], () => s.Ay.getMode() === c.TB.PUSH_TO_TALK), _ = (0, a.bG)([o.A], () => null != o.A.getChannelId() && (o.A.getDuration() ?? Number.MAX_VALUE) < d), [A, g] = r.useState(!1), {
        showPTTJoinTooltip: f
    } = u.A.useConfig({
        location: "usePTTJoinTooltip"
    }), b = r.useRef(new i.Ep), m = r.useRef(new i.Ep);
    r.useEffect(() => {
        if (_ && n && !e) {
            if (u.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !f) return;
            g(!0), t(!0), m.current.start(p, () => {
                t(!1)
            }), b.current.start(d, () => {
                g(!1)
            })
        }
        _ || g(!1)
    }, [_, n, f, e]);
    let C = r.useCallback(() => {
        g(!1), b.current.stop()
    }, []);
    return (0, l.l0)(() => {
        b.current.stop(), m.current.stop()
    }), {
        shouldShowTooltip: A,
        dismissTooltip: C
    }
}