/** chunk id: 124480 params = (module,exports,require) **/
a.d(l, {
    A: () => u
});
var t = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    r = a(397927),
    d = a(147925),
    s = a(431837);

function u(e) {
    let {
        options: l,
        onClick: a,
        className: n,
        hideCaret: u
    } = e;
    return (0, t.jsx)("div", {
        className: i()(s.zr, n),
        children: l.map((e, l) => (0, t.jsxs)(r.DUT, {
            onClick: () => a(e),
            className: i()(s.uK, e.className),
            children: [(0, t.jsx)(r.Text, {
                className: s.Qq,
                color: "none",
                variant: "text-md/normal",
                children: e.label
            }), !u?.(e) && (0, t.jsx)(d.A, {
                className: s.OW,
                direction: d.A.Directions.RIGHT
            })]
        }, l))
    })
}