/** chunk id: 41580, original params: e,_,t (module,exports,require) **/
t.d(_, {
    A: () => u
}), t(896048);
var a = t(64700),
    o = t(311907),
    n = t(451988),
    r = t(964486),
    c = t(430452),
    i = t(383501),
    l = t(927813),
    s = t(340913),
    p = t(731854);
let b = 2.5 * l.A.Millis.SECOND,
    d = +l.A.Millis.HOUR;

function u() {
    let [e, _] = a.useState(!1), t = (0, o.bG)([c.A], () => c.A.getMode() === p.TB.PUSH_TO_TALK), l = (0, o.bG)([i.A], () => {
        var e;
        return null != i.A.getChannelId() && (null != (e = i.A.getDuration()) ? e : Number.MAX_VALUE) < b
    }), [u, f] = a.useState(!1), {
        showPTTJoinTooltip: g
    } = s.A.useConfig({
        location: "usePTTJoinTooltip"
    }), C = a.useRef(new n.Ep), m = a.useRef(new n.Ep);
    a.useEffect(() => {
        if (l && t && !e) {
            if (s.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !g) return;
            f(!0), _(!0), m.current.start(d, () => {
                _(!1)
            }), C.current.start(b, () => {
                f(!1)
            })
        }
        l || f(!1)
    }, [l, t, g, e]);
    let x = a.useCallback(() => {
        f(!1), C.current.stop()
    }, []);
    return (0, r.l0)(() => {
        C.current.stop(), m.current.stop()
    }), {
        shouldShowTooltip: u,
        dismissTooltip: x
    }
}