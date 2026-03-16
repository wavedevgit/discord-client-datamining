/** chunk id: 39043 params = (module,exports,require) **/
n.d(t, {
    A: () => m
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

function _(e) {
    return r.A.getField("requestAccordionOpenKey") === e.key
}
let m = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        layout: m,
        useCollapsedSubtitle: g
    } = t, [A, h] = s.useState(!0), [x, p] = s.useState(() => _(t)), T = s.useRef(x), E = s.useRef(_(t) ? "navigation" : null);
    s.useEffect(() => r.A.subscribe(e => e.requestAccordionOpenKey, e => {
        e === t.key && (T.current ? o.A.notifyAccordionExpanded(t.key) : (E.current = "navigation", h(!1), p(!0)))
    }, {
        equalityFn: (e, t) => e === t,
        fireImmediately: !0
    }), [t.key, x]);
    let S = s.useCallback(e => {
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
        C = s.useMemo(() => (0, l.debounce)(S, 50), [S]),
        f = (0, a.w)(C),
        b = n?.(x),
        N = g?.(),
        I = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: f,
        title: b,
        collapsedSubtitle: N,
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