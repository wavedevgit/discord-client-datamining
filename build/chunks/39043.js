/** chunk id: 39043 params = (module,exports,require) **/
n.d(t, {
    A: () => g
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
let g = s.memo(function(e) {
    let {
        node: t
    } = e, {
        useTitle: n,
        layout: g,
        useCollapsedSubtitle: _
    } = t, [x, A] = s.useState(!0), [h, p] = s.useState(() => m(t)), f = s.useRef(h), T = s.useRef(m(t) ? "navigation" : null);
    s.useEffect(() => r.A.subscribe(e => e.requestAccordionOpenKey, e => {
        e === t.key && (f.current ? o.A.notifyAccordionExpanded(t.key) : (T.current = "navigation", A(!1), p(!0)))
    }, {
        equalityFn: (e, t) => e === t,
        fireImmediately: !0
    }), [t.key, h]);
    let E = s.useCallback(e => {
            if (null != e.target && h !== f.current && (f.current = h, f.current)) switch (T.current) {
                case "navigation":
                    A(!0), o.A.notifyAccordionExpanded(t.key);
                    break;
                case "user":
                    o.A.navigate(t.key, {
                        animatePanelScroll: !0,
                        panelScrollBlock: "nearest"
                    })
            }
        }, [h, t.key]),
        S = s.useMemo(() => (0, l.debounce)(E, 50), [E]),
        b = (0, a.w)(S),
        C = n?.(h),
        N = _?.(),
        v = (0, c.q)(t);
    return (0, i.jsx)(u.f, {
        ref: b,
        title: C,
        collapsedSubtitle: N,
        isExpanded: h,
        onExpandedChange: e => {
            T.current = "user", v(), p(e)
        },
        animate: x,
        children: g.map(e => (0, i.jsx)(d.A, {
            node: e
        }, e.key))
    })
})