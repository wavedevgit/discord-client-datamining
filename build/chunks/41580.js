/** chunk id: 41580, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => b
}), _(896048);
var n = _(64700),
    a = _(311907),
    o = _(451988),
    c = _(964486),
    r = _(430452),
    i = _(383501),
    l = _(927813),
    s = _(340913),
    d = _(731854);
let u = 2.5 * l.A.Millis.SECOND,
    f = +l.A.Millis.HOUR;

function b() {
    let [e, t] = n.useState(!1), _ = (0, a.bG)([r.A], () => r.A.getMode() === d.TB.PUSH_TO_TALK), l = (0, a.bG)([i.A], () => {
        var e;
        return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
    }), [b, p] = n.useState(!1), {
        showPTTJoinTooltip: m
    } = s.A.useConfig({
        location: "usePTTJoinTooltip"
    }), A = n.useRef(new o.Ep), C = n.useRef(new o.Ep);
    n.useEffect(() => {
        if (l && _ && !e) {
            if (s.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !m) return;
            p(!0), t(!0), C.current.start(f, () => {
                t(!1)
            }), A.current.start(u, () => {
                p(!1)
            })
        }
        l || p(!1)
    }, [l, _, m, e]);
    let g = n.useCallback(() => {
        p(!1), A.current.stop()
    }, []);
    return (0, c.l0)(() => {
        A.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: g
    }
}