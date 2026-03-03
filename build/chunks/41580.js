/** chunk id: 41580, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => g
});
var n = a(64700),
    r = a(311907),
    i = a(451988),
    o = a(964486),
    _ = a(430452),
    c = a(383501),
    l = a(927813),
    s = a(340913),
    d = a(731854);
let u = 2.5 * l.A.Millis.SECOND,
    p = +l.A.Millis.HOUR;

function g() {
    let [e, t] = n.useState(!1), a = (0, r.bG)([_.Ay], () => _.Ay.getMode() === d.TB.PUSH_TO_TALK), l = (0, r.bG)([c.A], () => null != c.A.getChannelId() && (c.A.getDuration() ?? Number.MAX_VALUE) < u), [g, b] = n.useState(!1), {
        showPTTJoinTooltip: m
    } = s.A.useConfig({
        location: "usePTTJoinTooltip"
    }), f = n.useRef(new i.Ep), A = n.useRef(new i.Ep);
    n.useEffect(() => {
        if (l && a && !e) {
            if (s.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !m) return;
            b(!0), t(!0), A.current.start(p, () => {
                t(!1)
            }), f.current.start(u, () => {
                b(!1)
            })
        }
        l || b(!1)
    }, [l, a, m, e]);
    let C = n.useCallback(() => {
        b(!1), f.current.stop()
    }, []);
    return (0, o.l0)(() => {
        f.current.stop(), A.current.stop()
    }), {
        shouldShowTooltip: g,
        dismissTooltip: C
    }
}