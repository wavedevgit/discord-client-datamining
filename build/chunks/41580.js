/** chunk id: 41580 params = (module,exports,require) **/
_.d(t, {
    A: () => b
});
var a = _(64700),
    o = _(311907),
    n = _(451988),
    r = _(964486),
    i = _(430452),
    c = _(383501),
    l = _(927813),
    s = _(340913),
    u = _(731854);
let p = 2.5 * l.A.Millis.SECOND,
    d = +l.A.Millis.HOUR;

function b() {
    let [e, t] = a.useState(!1), _ = (0, o.bG)([i.Ay], () => i.Ay.getMode() === u.TB.PUSH_TO_TALK), l = (0, o.bG)([c.A], () => null != c.A.getChannelId() && (c.A.getDuration() ?? Number.MAX_VALUE) < p), [b, f] = a.useState(!1), {
        showPTTJoinTooltip: g
    } = s.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = a.useRef(new n.Ep), A = a.useRef(new n.Ep);
    a.useEffect(() => {
        if (l && _ && !e) {
            if (s.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), A.current.start(d, () => {
                t(!1)
            }), m.current.start(p, () => {
                f(!1)
            })
        }
        l || f(!1)
    }, [l, _, g, e]);
    let C = a.useCallback(() => {
        f(!1), m.current.stop()
    }, []);
    return (0, r.l0)(() => {
        m.current.stop(), A.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: C
    }
}