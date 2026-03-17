/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var _ = a(64700),
    n = a(311907),
    r = a(451988),
    o = a(964486),
    i = a(430452),
    l = a(383501),
    s = a(927813),
    c = a(340913),
    u = a(731854);
let p = 2.5 * s.A.Millis.SECOND,
    d = +s.A.Millis.HOUR;

function b() {
    let [e, t] = _.useState(!1), a = (0, n.bG)([i.Ay], () => i.Ay.getMode() === u.TB.PUSH_TO_TALK), s = (0, n.bG)([l.A], () => null != l.A.getChannelId() && (l.A.getDuration() ?? Number.MAX_VALUE) < p), [b, f] = _.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = _.useRef(new r.Ep), x = _.useRef(new r.Ep);
    _.useEffect(() => {
        if (s && a && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), x.current.start(d, () => {
                t(!1)
            }), m.current.start(p, () => {
                f(!1)
            })
        }
        s || f(!1)
    }, [s, a, g, e]);
    let A = _.useCallback(() => {
        f(!1), m.current.stop()
    }, []);
    return (0, o.l0)(() => {
        m.current.stop(), x.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: A
    }
}