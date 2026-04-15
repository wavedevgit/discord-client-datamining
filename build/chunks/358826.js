/** chunk id: 358826 params = (module,exports,require) **/
l.d(n, {
    A: () => o
});
var i = l(627968),
    t = l(503698),
    s = l.n(t),
    a = l(397927),
    r = l(372151);

function o(e) {
    let {
        isVisible: n,
        showLoadingSpinner: l,
        className: t
    } = e;
    return (0, i.jsx)("div", {
        className: s()(r.f, n && r.z, t),
        children: l && (0, i.jsx)(a.y$y, {
            type: a.tVU.SPINNING_CIRCLE_SIMPLE,
            animated: !0
        })
    })
}