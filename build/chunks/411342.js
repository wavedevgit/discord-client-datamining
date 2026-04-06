/** chunk id: 411342 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(317097),
    s = n(397927),
    a = n(985018),
    r = n(473107);

function o(e) {
    let {
        locked: t,
        role: n,
        textVariant: o = "text-xs/medium"
    } = e, d = (0, s.rdh)(s.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, i.jsx)("div", {
        className: r.ex,
        children: (0, i.jsxs)("div", {
            className: r.b6,
            children: [(0, i.jsx)("div", {
                className: r.yY,
                style: {
                    backgroundColor: (0, l.Hl)(n.color)
                }
            }), (0, i.jsx)(s.hKd, {
                size: 8,
                horizontal: !0
            }), (0, i.jsxs)(s.Text, {
                variant: o,
                color: "text-default",
                children: [(0, i.jsx)(s.AC4, {
                    children: a.intl.string(a.t.RnyseL)
                }), n.name]
            }), !0 === t && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(s.hKd, {
                    size: 8,
                    horizontal: !0
                }), (0, i.jsx)(s.XAi, {
                    size: "md",
                    color: d
                })]
            })]
        })
    })
}