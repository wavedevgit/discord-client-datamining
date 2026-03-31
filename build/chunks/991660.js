/** chunk id: 991660 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var s = i(627968),
    r = i(64700),
    n = i(503698),
    l = i.n(n),
    a = i(158954),
    c = i(829403);

function o(e) {
    let {
        children: t,
        gradientClassName: i,
        onScroll: n,
        ...o
    } = e, d = r.useRef(null), [_, u] = r.useState(!0), p = r.useCallback(() => {
        d.current?.isScrolledToBottom() === !0 ? u(!1) : u(!0)
    }, [d]), b = r.useCallback(e => {
        p(), null != n && n(e)
    }, [p, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(a.ChK, {
            fade: !0,
            ...o,
            ref: e => {
                null != e && (d.current = e, p())
            },
            onScroll: b,
            children: t
        }), (0, s.jsx)("div", {
            className: l()(c.D, i),
            "data-shown": _
        })]
    })
}