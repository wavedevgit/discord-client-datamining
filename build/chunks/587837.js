/** chunk id: 587837, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(761929),
    s = n(423765);

function a(e) {
    let {
        resizableNode: t,
        onResize: n,
        onResizeEnd: a,
        minHeight: o,
        maxHeight: c
    } = e, [u, d] = l.useState(null);
    l.useEffect(() => {
        var e, n;
        d(null != (e = null == (n = t.current) ? void 0 : n.offsetHeight) ? e : null)
    }, [t]);
    let p = (0, i.A)({
        initialElementDimension: u,
        minDimension: o,
        maxDimension: c,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: a,
        orientation: i.R.VERTICAL_BOTTOM
    });
    return (0, r.jsx)("div", {
        onMouseDown: p,
        className: s.D
    })
}