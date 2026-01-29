/** Chunk was on 2827 **/
/** chunk id: 318903, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(158954),
    l = n(199966),
    s = n(963935),
    a = n(894858),
    o = n(590089),
    c = n(191563);

function d(e) {
    var t, n, d, u;
    let {
        node: _
    } = e, {
        destinationKey: p
    } = _, m = null == (t = _.useSubtitle) ? void 0 : t.call(_), {
        accessibleDirectory: g
    } = (0, l._)(), A = g.entry(p), f = (null == A ? void 0 : A.parentPanelKey) != null ? g.get(A.parentPanelKey) : void 0, b = null == (n = _.useTitle) ? void 0 : n.call(_), h = null == f || null == (d = f.useTitle) ? void 0 : d.call(f);
    if (null == f) return null;
    let E = (null == (u = f.parent) ? void 0 : u.type) === s.Z6.SIDEBAR_ITEM ? f.parent.icon : void 0;
    return (0, r.jsx)(o.U, {
        title: null != b ? b : h,
        description: m,
        leadingElement: null != E && (0, r.jsx)("div", {
            className: c.z,
            children: (0, r.jsx)(E, {
                color: "currentColor"
            })
        }),
        primaryTrailingElement: (0, r.jsx)(i.uhT, {}),
        onClick: () => a.A.setState({
            requestedTargetKey: p
        })
    })
}