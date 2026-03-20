/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var _ = a(64700),
    n = a(311907),
    o = a(451988),
    r = a(964486),
    i = a(430452),
    l = a(383501),
    s = a(927813),
    c = a(340913),
    u = a(731854);
let d = 2.5 * s.A.Millis.SECOND,
    p = +s.A.Millis.HOUR;

function b() {
    let [e, t] = _.useState(!1), a = (0, n.bG)([i.Ay], () => i.Ay.getMode() === u.TB.PUSH_TO_TALK), s = (0, n.bG)([l.A], () => null != l.A.getChannelId() && (l.A.getDuration() ?? Number.MAX_VALUE) < d), [b, f] = _.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), x = _.useRef(new o.Ep), m = _.useRef(new o.Ep);
    _.useEffect(() => {
        if (s && a && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), m.current.start(p, () => {
                t(!1)
            }), x.current.start(d, () => {
                f(!1)
            })
        }
        s || f(!1)
    }, [s, a, g, e]);
    let A = _.useCallback(() => {
        f(!1), x.current.stop()
    }, []);
    return (0, r.l0)(() => {
        x.current.stop(), m.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: A
    }
}