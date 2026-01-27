/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => b
}), a(896048);
var o = a(64700),
    _ = a(311907),
    n = a(451988),
    c = a(964486),
    r = a(430452),
    i = a(383501),
    l = a(927813),
    d = a(340913),
    s = a(731854);
let u = 2.5 * l.A.Millis.SECOND,
    p = +l.A.Millis.HOUR;

function b() {
    let [e, t] = o.useState(!1), a = (0, _.bG)([r.A], () => r.A.getMode() === s.TB.PUSH_TO_TALK), l = (0, _.bG)([i.A], () => {
        var e;
        return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < u
    }), [b, f] = o.useState(!1), {
        showPTTJoinTooltip: A
    } = d.A.useConfig({
        location: "usePTTJoinTooltip"
    }), g = o.useRef(new n.Ep), C = o.useRef(new n.Ep);
    o.useEffect(() => {
        if (l && a && !e) {
            if (d.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !A) return;
            f(!0), t(!0), C.current.start(p, () => {
                t(!1)
            }), g.current.start(u, () => {
                f(!1)
            })
        }
        l || f(!1)
    }, [l, a, A, e]);
    let m = o.useCallback(() => {
        f(!1), g.current.stop()
    }, []);
    return (0, c.l0)(() => {
        g.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: b,
        dismissTooltip: m
    }
}