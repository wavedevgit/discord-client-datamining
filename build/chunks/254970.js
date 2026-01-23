/** Chunk was on 31748 **/
/** chunk id: 254970, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    l = n(835245),
    i = n(318937);
let a = () => {};

function o(e, t, n) {
    let o = r.useRef((0, l.A)()),
        s = r.useRef(Date.now()),
        c = r.useCallback((r, l) => {
            let a = {
                x: r,
                y: l,
                deltaTime: Date.now() - s.current
            };
            (0, i.dk)(t, o.current, e, n, a), (0, i.d4)(o.current, e, n, [a])
        }, [t, n, e]),
        u = r.useCallback((e, t, n) => {
            o.current = (0, l.A)(), s.current = Date.now(), c(t, n)
        }, [c]),
        d = r.useCallback((e, t, n) => c(t, n), [c]),
        f = r.useCallback((e, t, n) => u(e, t, n), [u]);
    return r.useMemo(() => ({
        handleMouseDown: u,
        handleMouseMove: d,
        handleMouseUp: a,
        handleMouseEnter: f
    }), [u, f, d])
}