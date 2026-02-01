/** chunk id: 183325, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(64700),
    r = n(205693),
    i = n(451988),
    a = n(684339),
    s = n(808180),
    o = n(927813),
    c = n(37965);
let u = 20 * o.A.Millis.SECOND;

function d(e) {
    let {
        streamId: t,
        userId: n,
        videoSpinnerContext: o,
        streamKey: d,
        loading: h,
        paused: p = !1
    } = e, f = l.useRef(new i.Ep), m = o === a.u.SELF_STREAM || o === a.u.REMOTE_STREAM ? r.x.STREAM : r.x.DEFAULT;
    return l.useEffect(() => {
        if (!h || p || !s.X.isIncomingVideoEnabled()) return;
        let e = f.current;
        return e.start(u, () => {
            (0, c.Z)(t, n, m, d)
        }), () => {
            e.stop()
        }
    }, [p, t, h, m, d, n]), {
        onReady: l.useCallback(() => {
            f.current.stop(), (0, c.W)(m, n)
        }, [n, m])
    }
}