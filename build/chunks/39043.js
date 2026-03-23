/** chunk id: 39043 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(770178),
    r = n(894858),
    o = n(272053),
    d = n(641324),
    c = n(791498),
    u = n(78837);

function m(e) {
    return r.A.getField("requestAccordionOpenKey") === e.key
}
let _ = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        layout: _,
        useCollapsedSubtitle: g
    } = t, [A, x] = s.useState(!0), [p, h] = s.useState(() => m(t)), T = s.useRef(p), E = s.useRef(m(t) ? "navigation" : null);
    s.useEffect(() => r.A.subscribe(e => e.requestAccordionOpenKey, e => {
        e === t.key && (T.current ? o.A.notifyAccordionExpanded(t.key) : (E.current = "navigation", x(!1), h(!0)))
    }, {
        equalityFn: (e, t) => e === t,
        fireImmediately: !0
    }), [t.key, p]);
    let f = s.useCallback(e => {
            if (null != e.target && p !== T.current && (T.current = p, T.current)) switch (E.current) {
                case "navigation":
                    x(!0), o.A.notifyAccordionExpanded(t.key);
                    break;
                case "user":
                    o.A.navigate(t.key, {
                        animatePanelScroll: !0,
                        panelScrollBlock: "nearest"
                    })
            }
        }, [p, t.key]),
        S = s.useMemo(() => (0, l.debounce)(f, 50), [f]),
        C = (0, a.w)(S),
        b = n?.(p),
        N = g?.(),
        I = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: C,
        title: b,
        collapsedSubtitle: N,
        isExpanded: p,
        onExpandedChange: e => {
            E.current = "user", I(), h(e)
        },
        animate: A,
        children: _.map(e => (0, i.jsx)(d.A, {
            node: e
        }, e.key))
    })
})