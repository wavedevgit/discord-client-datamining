/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var _ = a(64700),
    n = a(311907),
    r = a(451988),
    s = a(964486),
    o = a(430452),
    i = a(383501),
    l = a(927813),
    c = a(499156),
    p = a(731854);
let u = 2.5 * l.A.Millis.SECOND,
    d = +l.A.Millis.HOUR;

function b() {
    let [e, t] = _.useState(!1), a = (0, n.bG)([o.Ay], () => o.Ay.getMode() === p.TB.PUSH_TO_TALK), l = (0, n.bG)([i.A], () => null != i.A.getChannelId() && (i.A.getDuration() ?? Number.MAX_VALUE) < u), [b, f] = _.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), T = _.useRef(new r.Ep), m = _.useRef(new r.Ep);
    _.useEffect(() => {
        if (l && a && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), m.current.start(d, () => {
                t(!1)
            }), T.current.start(u, () => {
                f(!1)
            })
        }
        l || f(!1)
    }, [l, a, g, e]);
    let x = _.useCallback(() => {
        f(!1), T.current.stop()
    }, []);
    return (0, s.l0)(() => {
        T.current.stop(), m.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: x
    }
}