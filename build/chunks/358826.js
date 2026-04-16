/** chunk id: 358826 params = (module,exports,require) **/
l.d(n, {
    A: () => o
});
var t = l(627968),
    i = l(503698),
    s = l.n(i),
    a = l(397927),
    r = l(372151);

function o(e) {
    let {
        isVisible: n,
        showLoadingSpinner: l,
        className: i
    } = e;
    return (0, t.jsx)("div", {
        className: s()(r.f, n && r.z, i),
        children: l && (0, t.jsx)(a.y$y, {
            type: a.tVU.SPINNING_CIRCLE_SIMPLE,
            animated: !0
        })
    })
}