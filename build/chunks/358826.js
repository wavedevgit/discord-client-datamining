/** chunk id: 358826 params = (module,exports,require) **/
t.d(l, {
    A: () => o
});
var n = t(627968),
    i = t(503698),
    s = t.n(i),
    a = t(397927),
    r = t(372151);

function o(e) {
    let {
        isVisible: l,
        showLoadingSpinner: t,
        className: i
    } = e;
    return (0, n.jsx)("div", {
        className: s()(r.f, l && r.z, i),
        children: t && (0, n.jsx)(a.y$y, {
            type: a.tVU.SPINNING_CIRCLE_SIMPLE,
            animated: !0
        })
    })
}