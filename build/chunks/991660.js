/** chunk id: 991660 params = (module,exports,require) **/
l.d(e, {
    A: () => c
});
var n = l(627968),
    s = l(64700),
    r = l(503698),
    a = l.n(r),
    i = l(158954),
    o = l(15339);

function c(t) {
    let {
        children: e,
        gradientClassName: l,
        onScroll: r,
        ...c
    } = t, d = s.useRef(null), [u, x] = s.useState(!0), _ = s.useCallback(() => {
        d.current?.isScrolledToBottom() === !0 ? x(!1) : x(!0)
    }, [d]), h = s.useCallback(t => {
        _(), null != r && r(t)
    }, [_, r]);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.ChK, {
            fade: !0,
            ...c,
            ref: t => {
                null != t && (d.current = t, _())
            },
            onScroll: h,
            children: e
        }), (0, n.jsx)("div", {
            className: a()(o.D, l),
            "data-shown": u
        })]
    })
}