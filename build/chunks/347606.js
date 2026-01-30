/** chunk id: 347606, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(942381),
    o = n(172218),
    c = n(775602),
    d = n(963935),
    u = n(894858),
    _ = n(270952);

function p(e) {
    let {
        node: t,
        children: n
    } = e, l = i.useRef(!1), [p, m] = i.useState(!1), g = (0, o.K)(e => {
        l.current = e, e && m(!1)
    }, .5), A = i.useRef(null), f = i.useCallback(() => {
        null != A.current && (cancelAnimationFrame(A.current), A.current = null)
    }, []);
    return i.useEffect(() => {
        let e = u.A.subscribe(e => {
            let {
                navTransition: t
            } = e;
            return t
        }, e => {
            if (f(), null == e || e.targetKey !== t.key || null != e.targetAccordionKey) return;
            let n = e.animateScroll && !c.A.useReducedMotion;
            n || t.type === d.Z6.CATEGORY || m(!0), A.current = requestAnimationFrame(() => {
                var t, r;
                let i = null != (t = e.scrollBlock) ? t : "start";
                null == (r = g.current) || r.scrollIntoView({
                    behavior: n ? "smooth" : "auto",
                    block: i
                }), u.A.setState({
                    navTransition: void 0
                }), l.current && m(!1)
            })
        }, {
            equalityFn: a.x,
            fireImmediately: !0
        });
        return () => {
            e(), f()
        }
    }, [f, t.key, t.type, g]), (0, r.jsx)("div", {
        ref: g,
        "data-debug-key": t.key,
        className: s()(_.k, p && _.j),
        children: n
    })
}