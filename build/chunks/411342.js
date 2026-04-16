/** chunk id: 411342 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var a = n(317097),
    l = n(397927),
    s = n(985018),
    r = n(304003);

function o(e) {
    let {
        locked: t,
        role: n,
        textVariant: o = "text-xs/medium"
    } = e, d = (0, l.rdh)(l.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, i.jsx)("div", {
        className: r.ex,
        children: (0, i.jsxs)("div", {
            className: r.b6,
            children: [(0, i.jsx)("div", {
                className: r.yY,
                style: {
                    backgroundColor: (0, a.Hl)(n.color)
                }
            }), (0, i.jsx)(l.hKd, {
                size: 8,
                horizontal: !0
            }), (0, i.jsxs)(l.Text, {
                variant: o,
                color: "text-default",
                children: [(0, i.jsx)(l.AC4, {
                    children: s.intl.string(s.t.RnyseL)
                }), n.name]
            }), !0 === t && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(l.hKd, {
                    size: 8,
                    horizontal: !0
                }), (0, i.jsx)(l.XAi, {
                    size: "md",
                    color: d
                })]
            })]
        })
    })
}