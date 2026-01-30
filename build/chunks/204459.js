/** chunk id: 204459, original params: e,t,r (module,exports,require) **/
r.d(t, {
    w: () => a
});
var n = r(64700),
    l = r(311907),
    u = r(383501),
    i = r(162605),
    s = r(814278);

function a(e) {
    let {
        channelId: t,
        userId: r,
        nickname: a,
        onAlertOpen: c
    } = e, o = function(e) {
        let {
            userId: t
        } = e;
        return (0, l.bG)([u.A, i.A], () => (0, s.m8)(t, [u.A, i.A]))
    }({
        userId: r
    }), f = n.useRef(null);
    n.useEffect(() => {
        o && null == f.current ? f.current = setTimeout(() => {
            c(), (0, s.Vw)({
                userId: r,
                channelId: t,
                nickname: a
            })
        }, 1e3) : (clearTimeout(f.current), f.current = null);
        let e = f.current;
        return () => {
            clearTimeout(e)
        }
    }, [t, o, a, c, r])
}