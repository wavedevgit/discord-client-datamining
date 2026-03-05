/** chunk id: 347606 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(172218),
    o = n(775602),
    d = n(963935),
    c = n(894858),
    u = n(397274),
    _ = n(607590);

function g(e) {
    let {
        node: t,
        children: n
    } = e, l = s.useRef(!1), [g, m] = s.useState(!1), A = (0, r.K)(e => {
        l.current = e, e && m(!1)
    }, .5), h = s.useCallback(async e => {
        null == A.current || null == e || e.targetKey !== t.key || null != e.targetAccordionKey || (e.animateScroll && !o.A.useReducedMotion || t.type === d.Z6.CATEGORY || m(!0), l.current && m(!1), c.A.setState({
            disableSidebarCategoryAutoSelect: !0
        }), u.A.clearInitialScrollListener(), await u.A.scrollIntoView(A.current, {
            animate: e.animateScroll,
            block: e.scrollBlock
        }), u.A.setInitialScrollListener(() => {
            c.A.setState({
                disableSidebarCategoryAutoSelect: !1
            })
        }), c.A.setState({
            navTransition: void 0
        }))
    }, [t.key, t.type, A]);
    return s.useEffect(() => {
        let e = c.A.subscribe(e => {
            let {
                navTransition: t
            } = e;
            return t
        }, h, {
            equalityFn: (e, t) => e === t,
            fireImmediately: !0
        });
        return () => {
            e(), u.A.clearInitialScrollListener()
        }
    }, [h]), (0, i.jsx)("div", {
        ref: A,
        "data-debug-key": t.key,
        className: a()(_.k, g && _.j),
        children: n
    })
}