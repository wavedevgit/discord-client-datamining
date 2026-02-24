/** chunk id: 732637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(73153),
    r = n(31728),
    o = n(869146),
    c = n(203982),
    d = n(933958),
    u = n(969151),
    h = n(108959),
    m = n(902439),
    A = n(5867),
    g = n(652215);
let p = (e, t) => {
    a.h.wait(() => {
        (0, r.I_)(e, t)
    })
};

function f(e) {
    let t, {
            embedId: n,
            className: a,
            style: r
        } = e,
        f = (0, s.bG)([o.A], () => o.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        _ = (0, m.A)(),
        E = (0, s.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == _ || (0, h.A)((0, u.H)(_.location)) || E !== A.Gd.PANEL ? f?.window ?? window : window;
    let x = l.useRef(null),
        C = l.useMemo(() => {
            let e = null;
            return () => {
                null == e && (e = t.requestAnimationFrame(() => {
                    p(n, x.current?.getBoundingClientRect() ?? null), e = null
                }))
            }
        }, [n, t]);
    return l.useEffect(() => (t.addEventListener("resize", C), c._.subscribe(g.jej.REMEASURE_TARGET, C), () => {
        t.removeEventListener("resize", C), c._.unsubscribe(g.jej.REMEASURE_TARGET, C)
    }), [C, t]), l.useLayoutEffect(() => {
        let e = x.current;
        if (null == e) return;
        let t = e.ownerDocument.defaultView;
        if (null == t) return;
        C();
        let i = new t.ResizeObserver(C);
        return i.observe(e), () => {
            i.disconnect(), p(n, null)
        }
    }, [n, C]), (0, i.jsx)("div", {
        ref: x,
        style: r,
        className: a
    })
}