/** chunk id: 732637 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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

function _(e) {
    let t, {
            embedId: n,
            className: a,
            style: r
        } = e,
        _ = (0, s.bG)([o.A], () => o.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT)),
        f = (0, m.A)(),
        E = (0, s.bG)([d.Ay], () => d.Ay.getActivityPanelMode());
    t = null == f || (0, h.A)((0, u.H)(f.location)) || E !== A.Gd.PANEL ? _?.window ?? window : window;
    let C = l.useRef(null),
        x = l.useMemo(() => {
            let e = null;
            return () => {
                null == e && (e = t.requestAnimationFrame(() => {
                    p(n, C.current?.getBoundingClientRect() ?? null), e = null
                }))
            }
        }, [n, t]);
    return l.useEffect(() => (t.addEventListener("resize", x), c._.subscribe(g.jej.REMEASURE_TARGET, x), () => {
        t.removeEventListener("resize", x), c._.unsubscribe(g.jej.REMEASURE_TARGET, x)
    }), [x, t]), l.useLayoutEffect(() => {
        let e = C.current;
        if (null == e) return;
        let t = e.ownerDocument.defaultView;
        if (null == t) return;
        x();
        let i = new t.ResizeObserver(x);
        return i.observe(e), () => {
            i.disconnect(), p(n, null)
        }
    }, [n, x]), (0, i.jsx)("div", {
        ref: C,
        style: r,
        className: a
    })
}