/** chunk id: 41580 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(64700),
    a = n(311907),
    i = n(451988),
    l = n(964486),
    o = n(430452),
    s = n(383501),
    _ = n(927813),
    u = n(499156),
    d = n(731854);
let c = 2.5 * _.A.Millis.SECOND,
    A = +_.A.Millis.HOUR;

function g() {
    let [e, t] = r.useState(!1), n = (0, a.bG)([o.Ay], () => o.Ay.getMode() === d.TB.PUSH_TO_TALK), _ = (0, a.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < c), [g, p] = r.useState(!1), {
        showPTTJoinTooltip: b
    } = u.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = r.useRef(new i.Ep), f = r.useRef(new i.Ep);
    r.useEffect(() => {
        if (_ && n && !e) {
            if (u.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !b) return;
            p(!0), t(!0), f.current.start(A, () => {
                t(!1)
            }), m.current.start(c, () => {
                p(!1)
            })
        }
        _ || p(!1)
    }, [_, n, b, e]);
    let T = r.useCallback(() => {
        p(!1), m.current.stop()
    }, []);
    return (0, l.l0)(() => {
        m.current.stop(), f.current.stop()
    }), {
        shouldShowTooltip: g,
        dismissTooltip: T
    }
}