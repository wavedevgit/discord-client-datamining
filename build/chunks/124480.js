/** chunk id: 124480, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => o
});
var n = a(627968);
a(64700);
var c = a(503698),
    i = a.n(c),
    l = a(397927),
    r = a(147925),
    s = a(317498);

function o(e) {
    let {
        options: t,
        onClick: a,
        className: c,
        hideCaret: o
    } = e;
    return (0, n.jsx)("div", {
        className: i()(s.zr, c),
        children: t.map((e, t) => (0, n.jsxs)(l.DUT, {
            onClick: () => a(e),
            className: i()(s.uK, e.className),
            children: [(0, n.jsx)(l.Text, {
                className: s.Qq,
                color: "none",
                variant: "text-md/normal",
                children: e.label
            }), !(null == o ? void 0 : o(e)) && (0, n.jsx)(r.A, {
                className: s.OW,
                direction: r.A.Directions.RIGHT
            })]
        }, t))
    })
}