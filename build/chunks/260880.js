/** Chunk was on 65298 **/
/** chunk id: 260880, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(761929),
    o = n(124070);

function c(e) {
    let {
        resizableNode: t,
        minHeight: n,
        onResize: l
    } = e, r = (0, s.A)({
        minDimension: n,
        resizableDomNodeRef: t,
        onElementResize: l,
        orientation: s.R.VERTICAL_TOP,
        usePointerEvents: !0
    });
    return (0, a.jsx)("div", {
        onPointerDown: r,
        className: o.Di
    })
}

function d(e) {
    let {
        children: t,
        className: n,
        initialHeight: r,
        minHeight: s
    } = e, d = l.useRef(null), [u, m] = l.useState(r);
    return (0, a.jsxs)("div", {
        ref: d,
        className: o.kL,
        style: {
            minHeight: s,
            height: u
        },
        children: [(0, a.jsx)(c, {
            resizableNode: d,
            minHeight: s,
            onResize: m
        }), (0, a.jsx)("div", {
            className: i()(o.KZ, n),
            children: t
        })]
    })
}