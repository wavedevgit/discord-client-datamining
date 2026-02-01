/** chunk id: 732637, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(31728),
    o = n(869146),
    c = n(203982),
    u = n(933958),
    d = n(969151),
    h = n(108959),
    p = n(902439),
    f = n(5867),
    m = n(652215);
let g = (e, t) => {
    a.h.wait(() => {
        (0, s.I_)(e, t)
    })
};

function A(e) {
    let t, {
            embedId: n,
            className: a,
            style: s
        } = e,
        A = (0, i.bG)([o.A], () => o.A.getWindow(m.MLl.CHANNEL_CALL_POPOUT)),
        b = (0, p.A)(),
        _ = (0, i.bG)([u.Ay], () => u.Ay.getActivityPanelMode());
    if (null == b || (0, h.A)((0, d.H)(b.location)) || _ !== f.Gd.PANEL) {
        var y;
        t = null != (y = null == A ? void 0 : A.window) ? y : window
    } else t = window;
    let v = r.useRef(null),
        E = r.useMemo(() => {
            let e = null;
            return () => {
                null == e && (e = t.requestAnimationFrame(() => {
                    var t, l;
                    g(n, null != (t = null == (l = v.current) ? void 0 : l.getBoundingClientRect()) ? t : null), e = null
                }))
            }
        }, [n, t]);
    return r.useEffect(() => (t.addEventListener("resize", E), c._.subscribe(m.jej.REMEASURE_TARGET, E), () => {
        t.removeEventListener("resize", E), c._.unsubscribe(m.jej.REMEASURE_TARGET, E)
    }), [E, t]), r.useLayoutEffect(() => {
        let e = v.current;
        if (null == e) return;
        let t = e.ownerDocument.defaultView;
        if (null == t) return;
        E();
        let l = new t.ResizeObserver(E);
        return l.observe(e), () => {
            l.disconnect(), g(n, null)
        }
    }, [n, E]), (0, l.jsx)("div", {
        ref: v,
        style: s,
        className: a
    })
}