/** chunk id: 260880 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(761929),
    o = n(866308);

function d(e) {
    let {
        resizableNode: t,
        minHeight: n,
        onResize: i
    } = e, l = (0, r.A)({
        minDimension: n,
        resizableDomNodeRef: t,
        onElementResize: i,
        orientation: r.R.VERTICAL_TOP,
        usePointerEvents: !0
    });
    return (0, a.jsx)("div", {
        onPointerDown: l,
        className: o.Di
    })
}

function c(e) {
    let {
        children: t,
        className: n,
        initialHeight: l,
        minHeight: r
    } = e, c = i.useRef(null), [u, m] = i.useState(l);
    return (0, a.jsxs)("div", {
        ref: c,
        className: o.kL,
        style: {
            minHeight: r,
            height: u
        },
        children: [(0, a.jsx)(d, {
            resizableNode: c,
            minHeight: r,
            onResize: m
        }), (0, a.jsx)("div", {
            className: s()(o.KZ, n),
            children: t
        })]
    })
}