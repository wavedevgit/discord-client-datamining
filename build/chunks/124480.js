/** chunk id: 124480 params = (module,exports,require) **/
t.d(a, {
    A: () => _
});
var n = t(627968);
t(64700);
var i = t(503698),
    c = t.n(i),
    s = t(397927),
    l = t(147925),
    r = t(408548);

function _(e) {
    let {
        options: a,
        onClick: t,
        className: i,
        hideCaret: _
    } = e;
    return (0, n.jsx)("div", {
        className: c()(r.zr, i),
        children: a.map((e, a) => (0, n.jsxs)(s.DUT, {
            onClick: () => t(e),
            className: c()(r.uK, e.className),
            children: [(0, n.jsx)(s.Text, {
                className: r.Qq,
                color: "none",
                variant: "text-md/normal",
                children: e.label
            }), !_?.(e) && (0, n.jsx)(l.A, {
                className: r.OW,
                direction: l.A.Directions.RIGHT
            })]
        }, a))
    })
}