/** Chunk was on 31294 **/
/** chunk id: 41580, original params: e,_,t (module,exports,require) **/
t.d(_, {
    A: () => u
}), t(896048);
var a = t(64700),
    o = t(311907),
    n = t(451988),
    r = t(964486),
    i = t(430452),
    c = t(383501),
    l = t(927813),
    s = t(340913),
    p = t(731854);
let d = 2.5 * l.A.Millis.SECOND,
    b = +l.A.Millis.HOUR;

function u() {
    let [e, _] = a.useState(!1), t = (0, o.bG)([i.A], () => i.A.getMode() === p.TB.PUSH_TO_TALK), l = (0, o.bG)([c.A], () => {
        var e;
        return null != c.A.getChannelId() && (null != (e = c.A.getDuration()) ? e : Number.MAX_VALUE) < d
    }), [u, f] = a.useState(!1), {
        showPTTJoinTooltip: m
    } = s.A.useConfig({
        location: "usePTTJoinTooltip"
    }), g = a.useRef(new n.Ep), C = a.useRef(new n.Ep);
    a.useEffect(() => {
        if (l && t && !e) {
            if (s.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !m) return;
            f(!0), _(!0), C.current.start(b, () => {
                _(!1)
            }), g.current.start(d, () => {
                f(!1)
            })
        }
        l || f(!1)
    }, [l, t, m, e]);
    let x = a.useCallback(() => {
        f(!1), g.current.stop()
    }, []);
    return (0, r.l0)(() => {
        g.current.stop(), C.current.stop()
    }), {
        shouldShowTooltip: u,
        dismissTooltip: x
    }
}