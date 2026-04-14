/** chunk id: 358826 params = (module,exports,require) **/
n.d(l, {
    A: () => o
});
var t = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(372151);

function o(e) {
    let {
        isVisible: l,
        showLoadingSpinner: n,
        className: i
    } = e;
    return (0, t.jsx)("div", {
        className: s()(r.f, l && r.z, i),
        children: n && (0, t.jsx)(a.y$y, {
            type: a.tVU.SPINNING_CIRCLE_SIMPLE,
            animated: !0
        })
    })
}