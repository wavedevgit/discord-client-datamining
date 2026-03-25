/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => p
});
var _ = a(64700),
    n = a(311907),
    o = a(451988),
    r = a(964486),
    i = a(430452),
    c = a(383501),
    s = a(927813),
    l = a(340913),
    d = a(731854);
let b = 2.5 * s.A.Millis.SECOND,
    u = +s.A.Millis.HOUR;

function p() {
    let [e, t] = _.useState(!1), a = (0, n.bG)([i.Ay], () => i.Ay.getMode() === d.TB.PUSH_TO_TALK), s = (0, n.bG)([c.A], () => null != c.A.getChannelId() && (c.A.getDuration() ?? Number.MAX_VALUE) < b), [p, f] = _.useState(!1), {
        showPTTJoinTooltip: g
    } = l.A.useConfig({
        location: "usePTTJoinTooltip"
    }), x = _.useRef(new o.Ep), m = _.useRef(new o.Ep);
    _.useEffect(() => {
        if (s && a && !e) {
            if (l.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), m.current.start(u, () => {
                t(!1)
            }), x.current.start(b, () => {
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
        shouldShowTooltip: p,
        dismissTooltip: A
    }
}