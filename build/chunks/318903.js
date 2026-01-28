/** Chunk was on 5606 **/
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
        node: p
    } = e, {
        destinationKey: _
    } = p, m = null == (t = p.useSubtitle) ? void 0 : t.call(p), {
        accessibleDirectory: g
    } = (0, l._)(), f = g.entry(_), b = (null == f ? void 0 : f.parentPanelKey) != null ? g.get(f.parentPanelKey) : void 0, h = null == (n = p.useTitle) ? void 0 : n.call(p), A = null == b || null == (d = b.useTitle) ? void 0 : d.call(b);
    if (null == b) return null;
    let E = (null == (u = b.parent) ? void 0 : u.type) === s.Z6.SIDEBAR_ITEM ? b.parent.icon : void 0;
    return (0, r.jsx)(o.U, {
        title: null != h ? h : A,
        description: m,
        leadingElement: null != E && (0, r.jsx)("div", {
            className: c.z,
            children: (0, r.jsx)(E, {
                color: "currentColor"
            })
        }),
        primaryTrailingElement: (0, r.jsx)(i.uhT, {}),
        onClick: () => a.A.setState({
            requestedTargetKey: _
        })
    })
}