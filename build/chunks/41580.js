/** chunk id: 41580, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => f
}), _(896048);
var o = _(64700),
    a = _(311907),
    n = _(451988),
    c = _(964486),
    r = _(430452),
    i = _(383501),
    s = _(927813),
    d = _(340913),
    l = _(731854);
let u = 2.5 * s.A.Millis.SECOND,
    p = +s.A.Millis.HOUR;

function f() {
    let [e, t] = o.useState(!1), _ = (0, a.bG)([r.A], () => r.A.getMode() === l.TB.PUSH_TO_TALK), s = (0, a.bG)([i.A], () => {
        var e;
        return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
    }), [f, b] = o.useState(!1), {
        showPTTJoinTooltip: m
    } = d.A.useConfig({
        location: "usePTTJoinTooltip"
    }), A = o.useRef(new n.Ep), C = o.useRef(new n.Ep);
    o.useEffect(() => {
        if (s && _ && !e) {
            if (d.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !m) return;
            b(!0), t(!0), C.current.start(p, () => {
                t(!1)
            }), A.current.start(u, () => {
                b(!1)
            })
        }
        s || b(!1)
    }, [s, _, m, e]);
    let g = o.useCallback(() => {
        b(!1), A.current.stop()
    }, []);
    return (0, c.l0)(() => {
        A.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: f,
        dismissTooltip: g
    }
}