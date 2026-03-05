/** chunk id: 336590 params = (module,exports,require) **/
n.d(t, {
    k: () => c,
    r: () => u
});
var i = n(64700),
    r = n(311907),
    l = n(724442),
    a = n(380335),
    s = n(157550),
    o = n(411976),
    d = n(790499);

function c() {
    let e = (0, o.W)(),
        t = i.useRef(e),
        n = (0, r.bG)([a.A], () => a.A.isReady()),
        s = i.useRef(n);
    return i.useEffect(() => {
        n && !s.current && (s.current = !0, t.current = e)
    }, [n, e]), 1 >= (0, l.A)(t) && 1 === e
}

function u() {
    let e = (0, d.I)(),
        t = i.useRef(e),
        n = (0, r.bG)([s.A], () => s.A.isReady()),
        a = i.useRef(n);
    return i.useEffect(() => {
        n && !a.current && (a.current = !0, t.current = e)
    }, [n, e]), 1 >= (0, l.A)(t) && 1 === e
}