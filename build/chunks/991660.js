/** chunk id: 991660, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(158954),
    u = i(48302);

function o(t) {
    let {
        children: e,
        gradientClassName: i,
        ...s
    } = t, o = l.useRef(null), [c, d] = l.useState(!0), p = () => {
        o.current?.isScrolledToBottom() === !0 ? d(!1) : d(!0)
    };
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.ChK, {
            fade: !0,
            ...s,
            ref: t => {
                null != t && (o.current = t, p())
            },
            onScroll: p,
            children: e
        }), (0, n.jsx)("div", {
            className: r()(u.D, i),
            "data-shown": c
        })]
    })
}