/** chunk id: 39043 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(770178),
    a = n(894858),
    o = n(272053),
    d = n(641324),
    c = n(791498),
    u = n(78837);

function m(e) {
    return a.A.getField("requestAccordionOpenKey") === e.key
}
let g = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        layout: g,
        useCollapsedSubtitle: _
    } = t, [x, h] = s.useState(!0), [A, p] = s.useState(() => m(t)), T = s.useRef(A), f = s.useRef(m(t) ? "navigation" : null);
    s.useEffect(() => a.A.subscribe(e => e.requestAccordionOpenKey, e => {
        e === t.key && (T.current ? o.A.notifyAccordionExpanded(t.key) : (f.current = "navigation", h(!1), p(!0)))
    }, {
        equalityFn: (e, t) => e === t,
        fireImmediately: !0
    }), [t.key, A]);
    let S = s.useCallback(e => {
            if (null != e.target && A !== T.current && (T.current = A, T.current)) switch (f.current) {
                case "navigation":
                    h(!0), o.A.notifyAccordionExpanded(t.key);
                    break;
                case "user":
                    o.A.navigate(t.key, {
                        animatePanelScroll: !0,
                        panelScrollBlock: "nearest"
                    })
            }
        }, [A, t.key]),
        E = s.useMemo(() => (0, l.debounce)(S, 50), [S]),
        b = (0, r.w)(E),
        C = n?.(A),
        v = _?.(),
        N = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: b,
        title: C,
        collapsedSubtitle: v,
        isExpanded: A,
        onExpandedChange: e => {
            f.current = "user", N(), p(e)
        },
        animate: x,
        children: g.map(e => (0, i.jsx)(d.A, {
            node: e
        }, e.key))
    })
})