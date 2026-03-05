/** chunk id: 39043 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(942381),
    r = n(770178),
    o = n(894858),
    d = n(641324),
    c = n(791498),
    u = n(78837);
let _ = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        layout: _,
        useCollapsedSubtitle: g
    } = t, [m, A] = s.useState(!1), [h, p] = s.useState(!0), x = s.useRef(m);
    s.useEffect(() => o.A.subscribe(e => {
        let {
            navTransition: t
        } = e;
        return t
    }, e => {
        let n = e?.targetAccordionKey === t.key;
        n && !m && (x.current = !0, A(!0), p(!1)), n && m && (o.A.setState({
            navTransition: {
                ...e,
                targetAccordionKey: void 0
            }
        }), p(!0))
    }, {
        equalityFn: a.x,
        fireImmediately: !0
    }), [m, t.key]);
    let E = s.useCallback(e => {
            null == e.target || x.current === m || (x.current = m, m && o.A.setState({
                navTransition: {
                    targetKey: t.key,
                    targetAccordionKey: t.key,
                    animateScroll: !0,
                    scrollBlock: "nearest"
                }
            }))
        }, [m, t.key]),
        T = s.useMemo(() => (0, l.debounce)(E, 50), [E]),
        S = (0, r.w)(T),
        C = n?.(m),
        f = g?.(),
        I = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: S,
        title: C,
        collapsedSubtitle: f,
        isExpanded: m,
        onExpandedChange: e => {
            I(), A(e)
        },
        animate: h,
        children: _.map(e => (0, i.jsx)(d.A, {
            node: e
        }, e.key))
    })
})