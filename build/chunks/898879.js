/** chunk id: 898879, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(73153),
    s = n(31728),
    o = n(203982),
    c = n(91242),
    u = n(165610),
    d = n(652215);
let p = (e, t) => {
    a.h.wait(() => {
        (0, s.I_)(e, t)
    })
};

function h(e) {
    let {
        embedId: t,
        className: n,
        style: a,
        currentWindow: s
    } = e, h = (0, l.bG)([c.A], () => c.A.getConnectedFrame()), f = (0, l.bG)([c.A], () => c.A.getFrameLayoutMode()), g = null != h && f === u.y.FOCUSED ? window : null != s ? s : window, m = i.useRef(null), A = i.useCallback(() => {
        null == m.current || p(t, m.current.getBoundingClientRect())
    }, [t]);
    i.useLayoutEffect(() => {
        A()
    });
    let _ = i.useMemo(() => new ResizeObserver(() => {
        A()
    }), [A]);
    return i.useLayoutEffect(() => {
        let e = m.current;
        if (null != e) return _.observe(e), () => _.unobserve(e)
    }, [_]), i.useLayoutEffect(() => {
        let e = () => A(),
            t = () => A();
        return g.addEventListener("scroll", e, !0), g.addEventListener("resize", t), () => {
            g.removeEventListener("scroll", e, !0), g.removeEventListener("resize", t)
        }
    }, [A, g]), i.useLayoutEffect(() => (o._.subscribe(d.jej.MANUAL_IFRAME_RESIZING, A), () => {
        o._.unsubscribe(d.jej.MANUAL_IFRAME_RESIZING, A)
    }), [A]), i.useLayoutEffect(() => () => {
        p(t, null)
    }, [t]), (0, r.jsx)("div", {
        ref: m,
        className: n,
        style: a
    })
}