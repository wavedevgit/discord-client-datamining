/** chunk id: 41580 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(64700),
    a = n(311907),
    i = n(451988),
    l = n(964486),
    o = n(430452),
    s = n(383501),
    u = n(927813),
    _ = n(499156),
    c = n(731854);
let d = 2.5 * u.A.Millis.SECOND,
    p = +u.A.Millis.HOUR;

function A() {
    let [e, t] = r.useState(!1), n = (0, a.bG)([o.Ay], () => o.Ay.getMode() === c.TB.PUSH_TO_TALK), u = (0, a.bG)([s.A], () => null != s.A.getChannelId() && (s.A.getDuration() ?? Number.MAX_VALUE) < d), [A, g] = r.useState(!1), {
        showPTTJoinTooltip: f
    } = _.A.useConfig({
        location: "usePTTJoinTooltip"
    }), m = r.useRef(new i.Ep), b = r.useRef(new i.Ep);
    r.useEffect(() => {
        if (u && n && !e) {
            if (_.A.getConfig({
                    location: "usePTTJoinTooltip:couldDisplayTooltip"
                }), !f) return;
            g(!0), t(!0), b.current.start(p, () => {
                t(!1)
            }), m.current.start(d, () => {
                g(!1)
            })
        }
        u || g(!1)
    }, [u, n, f, e]);
    let T = r.useCallback(() => {
        g(!1), m.current.stop()
    }, []);
    return (0, l.l0)(() => {
        m.current.stop(), b.current.stop()
    }), {
        shouldShowTooltip: A,
        dismissTooltip: T
    }
}