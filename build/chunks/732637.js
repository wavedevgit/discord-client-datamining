/** Chunk was on 31748 **/
/** chunk id: 732637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(73153),
    o = n(31728),
    s = n(869146),
    c = n(203982),
    u = n(933958),
    d = n(969151),
    f = n(108959),
    p = n(902439),
    g = n(5867),
    m = n(652215);
let _ = (e, t) => {
    a.h.wait(() => {
        (0, o.I_)(e, t)
    })
};

function h(e) {
    let t, {
            embedId: n,
            className: a,
            style: o
        } = e,
        h = (0, i.bG)([s.A], () => s.A.getWindow(m.MLl.CHANNEL_CALL_POPOUT)),
        y = (0, p.A)(),
        A = (0, i.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
    if (null == y || (0, f.A)((0, d.H)(y.location)) || A !== g.Gd.PANEL) {
        var b;
        t = null != (b = null == h ? void 0 : h.window) ? b : window
    } else t = window;
    let E = l.useRef(null),
        v = l.useMemo(() => {
            let e = null;
            return () => {
                null == e && (e = t.requestAnimationFrame(() => {
                    var t, r;
                    _(n, null != (t = null == (r = E.current) ? void 0 : r.getBoundingClientRect()) ? t : null), e = null
                }))
            }
        }, [n, t]);
    return l.useEffect(() => (t.addEventListener("resize", v), c._.subscribe(m.jej.REMEASURE_TARGET, v), () => {
        t.removeEventListener("resize", v), c._.unsubscribe(m.jej.REMEASURE_TARGET, v)
    }), [v, t]), l.useLayoutEffect(() => {
        let e = E.current;
        if (null == e) return;
        let t = e.ownerDocument.defaultView;
        if (null == t) return;
        v();
        let r = new t.ResizeObserver(v);
        return r.observe(e), () => {
            r.disconnect(), _(n, null)
        }
    }, [n, v]), (0, r.jsx)("div", {
        ref: E,
        style: o,
        className: a
    })
}