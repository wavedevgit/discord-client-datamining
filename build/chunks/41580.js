/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => b
}), _(896048);
var a = _(64700),
    o = _(311907),
    r = _(451988),
    n = _(964486),
    i = _(430452),
    l = _(383501),
    s = _(927813),
    c = _(340913),
    u = _(731854);
let p = 2.5 * s.A.Millis.SECOND,
    d = +s.A.Millis.HOUR;

function b() {
    let [e, t] = a.useState(!1), _ = (0, o.bG)([i.A], () => i.A.getMode() === u.TB.PUSH_TO_TALK), s = (0, o.bG)([l.A], () => {
        var e;
        return null != l.A.getChannelId() && (null != (e = l.A.getDuration()) ? e : Number.MAX_VALUE) < p
    }), [b, f] = a.useState(!1), {
        showPTTJoinTooltip: g
    } = c.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = a.useRef(new r.Ep), C = a.useRef(new r.Ep);
    a.useEffect(() => {
        if (s && _ && !e) {
            if (c.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), t(!0), C.current.start(d, () => {
                t(!1)
            }), m.current.start(p, () => {
                f(!1)
            })
        }
        s || f(!1)
    }, [s, _, g, e]);
    let A = a.useCallback(() => {
        f(!1), m.current.stop()
    }, []);
    return (0, n.l0)(() => {
        m.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: A
    }
}