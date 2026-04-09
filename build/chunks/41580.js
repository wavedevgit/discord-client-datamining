/** chunk id: 41580 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(64700),
    r = n(311907),
    l = n(451988),
    i = n(964486),
    s = n(430452),
    o = n(383501),
    _ = n(927813),
    u = n(499156),
    c = n(731854);
let d = 2.5 * _.A.Millis.SECOND,
    p = +_.A.Millis.HOUR;

function A() {
    let [e, t] = a.useState(!1), n = (0, r.bG)([s.Ay], () => s.Ay.getMode() === c.TB.PUSH_TO_TALK), _ = (0, r.bG)([o.A], () => null != o.A.getChannelId() && (o.A.getDuration() ?? Number.MAX_VALUE) < d), [A, m] = a.useState(!1), {
        showPTTJoinTooltip: f
    } = u.A.useConfig({
        location: "usePTTJoinTooltip"
    }), b = a.useRef(new l.Ep), g = a.useRef(new l.Ep);
    a.useEffect(() => {
        if (_ && n && !e) {
            if (u.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !f) return;
            m(!0), t(!0), g.current.start(p, () => {
                t(!1)
            }), b.current.start(d, () => {
                m(!1)
            })
        }
        _ || m(!1)
    }, [_, n, f, e]);
    let T = a.useCallback(() => {
        m(!1), b.current.stop()
    }, []);
    return (0, i.l0)(() => {
        b.current.stop(), g.current.stop()
    }), {
        shouldShowTooltip: A,
        dismissTooltip: T
    }
}