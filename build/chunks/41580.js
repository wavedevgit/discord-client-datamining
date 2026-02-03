/** chunk id: 41580, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => p
}), _(896048);
var n = _(64700),
    a = _(311907),
    o = _(451988),
    r = _(964486),
    c = _(430452),
    i = _(383501),
    l = _(927813),
    s = _(340913),
    d = _(731854);
let u = 2.5 * l.A.Millis.SECOND,
    f = +l.A.Millis.HOUR;

function p() {
    let [e, t] = n.useState(!1), _ = (0, a.bG)([c.A], () => c.A.getMode() === d.TB.PUSH_TO_TALK), l = (0, a.bG)([i.A], () => {
        var e;
        return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
    }), [p, b] = n.useState(!1), {
        showPTTJoinTooltip: m
    } = s.A.useConfig({
        location: "usePTTJoinTooltip"
    }), g = n.useRef(new o.Ep), A = n.useRef(new o.Ep);
    n.useEffect(() => {
        if (l && _ && !e) {
            if (s.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !m) return;
            b(!0), t(!0), A.current.start(f, () => {
                t(!1)
            }), g.current.start(u, () => {
                b(!1)
            })
        }
        l || b(!1)
    }, [l, _, m, e]);
    let C = n.useCallback(() => {
        b(!1), g.current.stop()
    }, []);
    return (0, r.l0)(() => {
        g.current.stop(), A.current.stop()
    }), {
        shouldShowTooltip: p,
        dismissTooltip: C
    }
}