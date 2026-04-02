/** chunk id: 898879 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(73153),
    s = n(31728),
    o = n(203982),
    d = n(91242),
    c = n(165610),
    u = n(652215);
let A = (e, t) => {
    r.h.wait(() => {
        (0, s.I_)(e, t)
    })
};

function h(e) {
    let {
        embedId: t,
        className: n,
        style: r,
        currentWindow: s
    } = e, h = (0, a.bG)([d.A], () => d.A.getConnectedFrame()), _ = (0, a.bG)([d.A], () => d.A.getFrameLayoutMode()), m = null != h && _ === c.y.FOCUSED ? window : s ?? window, p = l.useRef(null), g = l.useCallback(() => {
        null == p.current || A(t, p.current.getBoundingClientRect())
    }, [t]);
    l.useLayoutEffect(() => {
        g()
    });
    let E = l.useMemo(() => new ResizeObserver(() => {
        g()
    }), [g]);
    return l.useLayoutEffect(() => {
        let e = p.current;
        if (null != e) return E.observe(e), () => E.unobserve(e)
    }, [E]), l.useLayoutEffect(() => {
        let e = () => g(),
            t = () => g();
        return m.addEventListener("scroll", e, !0), m.addEventListener("resize", t), () => {
            m.removeEventListener("scroll", e, !0), m.removeEventListener("resize", t)
        }
    }, [g, m]), l.useLayoutEffect(() => (o._.subscribe(u.jej.MANUAL_IFRAME_RESIZING, g), () => {
        o._.unsubscribe(u.jej.MANUAL_IFRAME_RESIZING, g)
    }), [g]), l.useLayoutEffect(() => () => {
        A(t, null)
    }, [t]), (0, i.jsx)("div", {
        ref: p,
        className: n,
        style: r
    })
}