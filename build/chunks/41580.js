/** chunk id: 41580 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var _ = a(64700),
    r = a(311907),
    n = a(451988),
    s = a(964486),
    o = a(430452),
    l = a(383501),
    i = a(927813),
    c = a(499156),
    p = a(731854);
let u = 2.5 * i.A.Millis.SECOND,
    d = +i.A.Millis.HOUR;

function b() {
    let [e, t] = _.useState(!1), a = (0, r.bG)([o.Ay], () => o.Ay.getMode() === p.TB.PUSH_TO_TALK), i = (0, r.bG)([l.A], () => null != l.A.getChannelId() && (l.A.getDuration() ?? Number.MAX_VALUE) < u), [b, f] = _.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), T = _.useRef(new n.Ep), m = _.useRef(new n.Ep);
    _.useEffect(() => {
        if (i && a && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), m.current.start(d, () => {
                t(!1)
            }), T.current.start(u, () => {
                f(!1)
            })
        }
        i || f(!1)
    }, [i, a, g, e]);
    let h = _.useCallback(() => {
        f(!1), T.current.stop()
    }, []);
    return (0, s.l0)(() => {
        T.current.stop(), m.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: h
    }
}