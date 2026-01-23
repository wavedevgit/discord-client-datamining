/** Chunk was on 16674 **/
/** chunk id: 204459, original params: e,t,r (module,exports,require) **/
r.d(t, {
    w: () => s
});
var n = r(64700),
    l = r(311907),
    u = r(383501),
    i = r(162605),
    a = r(814278);

function s(e) {
    let {
        channelId: t,
        userId: r,
        nickname: s,
        onAlertOpen: c
    } = e, o = function(e) {
        let {
            userId: t
        } = e;
        return (0, l.bG)([u.A, i.A], () => (0, a.m8)(t, [u.A, i.A]))
    }({
        userId: r
    }), f = n.useRef(null);
    n.useEffect(() => {
        o && null == f.current ? f.current = setTimeout(() => {
            c(), (0, a.Vw)({
                userId: r,
                channelId: t,
                nickname: s
            })
        }, 1e3) : (clearTimeout(f.current), f.current = null);
        let e = f.current;
        return () => {
            clearTimeout(e)
        }
    }, [t, o, s, c, r])
}