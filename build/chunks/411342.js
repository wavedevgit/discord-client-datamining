/** chunk id: 411342 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(317097),
    a = n(397927),
    l = n(985018),
    s = n(427774);

function o(e) {
    let {
        locked: t,
        role: n,
        textVariant: o = "text-xs/medium"
    } = e, d = (0, a.rdh)(a.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, i.jsx)("div", {
        className: s.ex,
        children: (0, i.jsxs)("div", {
            className: s.b6,
            children: [(0, i.jsx)("div", {
                className: s.yY,
                style: {
                    backgroundColor: (0, r.Hl)(n.color)
                }
            }), (0, i.jsx)(a.hKd, {
                size: 8,
                horizontal: !0
            }), (0, i.jsxs)(a.Text, {
                variant: o,
                color: "text-default",
                children: [(0, i.jsx)(a.AC4, {
                    children: l.intl.string(l.t.RnyseL)
                }), n.name]
            }), !0 === t && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(a.hKd, {
                    size: 8,
                    horizontal: !0
                }), (0, i.jsx)(a.XAi, {
                    size: "md",
                    color: d
                })]
            })]
        })
    })
}