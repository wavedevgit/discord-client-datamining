/** chunk id: 39043 params = (module,exports,require) **/
n.d(t, {
    A: () => m
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

function _(e) {
    return a.A.getField("requestAccordionOpenKey") === e.key
}
let m = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        layout: m,
        useCollapsedSubtitle: g
    } = t, [A, h] = s.useState(!0), [x, p] = s.useState(() => _(t)), T = s.useRef(x), E = s.useRef(_(t) ? "navigation" : null);
    s.useEffect(() => a.A.subscribe(e => e.requestAccordionOpenKey, e => {
        e === t.key && (T.current ? o.A.notifyAccordionExpanded(t.key) : (E.current = "navigation", h(!1), p(!0)))
    }, {
        equalityFn: (e, t) => e === t,
        fireImmediately: !0
    }), [t.key, x]);
    let C = s.useCallback(e => {
            if (null != e.target && x !== T.current && (T.current = x, T.current)) switch (E.current) {
                case "navigation":
                    h(!0), o.A.notifyAccordionExpanded(t.key);
                    break;
                case "user":
                    o.A.navigate(t.key, {
                        animatePanelScroll: !0,
                        panelScrollBlock: "nearest"
                    })
            }
        }, [x, t.key]),
        S = s.useMemo(() => (0, l.debounce)(C, 50), [C]),
        f = (0, r.w)(S),
        N = n?.(x),
        b = g?.(),
        I = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: f,
        title: N,
        collapsedSubtitle: b,
        isExpanded: x,
        onExpandedChange: e => {
            E.current = "user", I(), p(e)
        },
        animate: A,
        children: m.map(e => (0, i.jsx)(d.A, {
            node: e
        }, e.key))
    })
})