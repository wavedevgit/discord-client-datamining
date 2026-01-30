/** chunk id: 97432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(292455),
    s = n(701508),
    o = n(979590),
    c = n(783531),
    d = n(620140),
    u = n(38181),
    p = n(111737),
    h = n(573),
    m = n(401186);
let g = function(e) {
    var t;
    let {
        tabId: n,
        onSelectApplication: g,
        onScroll: _
    } = e, b = l.useRef(null), f = l.useCallback(() => {
        var e;
        null == (e = b.current) || e.scrollTo({
            to: 0
        })
    }, []), x = (0, i.bG)([u.A], () => u.A.getCategories()), v = l.useMemo(() => x.find(e => e.id === n), [x, n]), j = l.useMemo(() => null != v ? (0, d.C)(v) : "", [v]);
    return (0, r.jsxs)(c.A, {
        onScroll: _,
        ref: b,
        children: [(0, r.jsx)(s.A, {
            title: null != (t = null == v ? void 0 : v.name) ? t : "",
            description: j,
            children: (0, r.jsx)(a.A, {})
        }), (0, r.jsx)(o.A, {
            children: null == v ? (0, r.jsx)("div", {
                className: m.U,
                children: (0, r.jsx)(p.A, {
                    className: m.z
                })
            }) : (0, r.jsx)(h.A, {
                categoryId: v.id,
                onSelectApplication: g,
                resetScroll: f
            })
        })]
    })
}