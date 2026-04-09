/** chunk id: 336590 params = (module,exports,require) **/
n.d(t, {
    k: () => c,
    r: () => u
});
var i = n(64700),
    a = n(311907),
    r = n(724442),
    l = n(380335),
    s = n(157550),
    o = n(411976),
    d = n(790499);

function c() {
    let e = (0, o.W)(),
        t = i.useRef(e),
        n = (0, a.bG)([l.A], () => l.A.isReady()),
        s = i.useRef(n);
    return i.useEffect(() => {
        n && !s.current && (s.current = !0, t.current = e)
    }, [n, e]), 1 >= (0, r.A)(t) && 1 === e
}

function u() {
    let e = (0, d.I)(),
        t = i.useRef(e),
        n = (0, a.bG)([s.A], () => s.A.isReady()),
        l = i.useRef(n);
    return i.useEffect(() => {
        n && !l.current && (l.current = !0, t.current = e)
    }, [n, e]), 1 >= (0, r.A)(t) && 1 === e
}