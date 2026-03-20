/** chunk id: 898879 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
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
    } = e, h = (0, l.bG)([d.A], () => d.A.getConnectedFrame()), _ = (0, l.bG)([d.A], () => d.A.getFrameLayoutMode()), m = null != h && _ === c.y.FOCUSED ? window : s ?? window, g = a.useRef(null), p = a.useCallback(() => {
        null == g.current || A(t, g.current.getBoundingClientRect())
    }, [t]);
    a.useLayoutEffect(() => {
        p()
    });
    let E = a.useMemo(() => new ResizeObserver(() => {
        p()
    }), [p]);
    return a.useLayoutEffect(() => {
        let e = g.current;
        if (null != e) return E.observe(e), () => E.unobserve(e)
    }, [E]), a.useLayoutEffect(() => {
        let e = () => p(),
            t = () => p();
        return m.addEventListener("scroll", e, !0), m.addEventListener("resize", t), () => {
            m.removeEventListener("scroll", e, !0), m.removeEventListener("resize", t)
        }
    }, [p, m]), a.useLayoutEffect(() => (o._.subscribe(u.jej.MANUAL_IFRAME_RESIZING, p), () => {
        o._.unsubscribe(u.jej.MANUAL_IFRAME_RESIZING, p)
    }), [p]), a.useLayoutEffect(() => () => {
        A(t, null)
    }, [t]), (0, i.jsx)("div", {
        ref: g,
        className: n,
        style: r
    })
}