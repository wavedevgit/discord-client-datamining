/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => f
});
var n = a(64700),
    r = a(311907),
    o = a(451988),
    i = a(964486),
    _ = a(430452),
    s = a(383501),
    l = a(927813),
    c = a(499156),
    u = a(731854);
let d = 2.5 * l.A.Millis.SECOND,
    p = +l.A.Millis.HOUR;

function f() {
    let [e, t] = n.useState(!1), a = (0, r.bG)([_.Ay], () => _.Ay.getMode() === u.TB.PUSH_TO_TALK), l = (0, r.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < d), [f, b] = n.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), A = n.useRef(new o.Ep), C = n.useRef(new o.Ep);
    n.useEffect(() => {
        if (l && a && !e) {
            if (c.A.getConfig({
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
    let I = n.useCallback(() => {
        b(!1), A.current.stop()
    }, []);
    return (0, i.l0)(() => {
        A.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: f,
        dismissTooltip: I
    }
}