/** chunk id: 183325, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    l = n(205693),
    i = n(451988),
    a = n(684339),
    o = n(808180),
    s = n(927813),
    c = n(37965);
let u = 20 * s.A.Millis.SECOND;

function d(e) {
    let {
        streamId: t,
        userId: n,
        videoSpinnerContext: s,
        streamKey: d,
        loading: f,
        paused: p = !1
    } = e, g = r.useRef(new i.Ep), m = s === a.u.SELF_STREAM || s === a.u.REMOTE_STREAM ? l.x.STREAM : l.x.DEFAULT;
    return r.useEffect(() => {
        if (!f || p || !o.X.isIncomingVideoEnabled()) return;
        let e = g.current;
        return e.start(u, () => {
            (0, c.Z)(t, n, m, d)
        }), () => {
            e.stop()
        }
    }, [p, t, f, m, d, n]), {
        onReady: r.useCallback(() => {
            g.current.stop(), (0, c.W)(m, n)
        }, [n, m])
    }
}