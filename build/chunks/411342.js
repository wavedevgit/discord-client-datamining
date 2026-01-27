/** Chunk was on 92917 **/
/** chunk id: 411342, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(317097),
    l = n(397927),
    a = n(985018),
    s = n(364271);

function o(e) {
    let {
        locked: t,
        role: n,
        textVariant: o = "text-xs/medium"
    } = e, c = (0, l.rdh)(l.LU0.colors.INTERACTIVE_TEXT_DEFAULT).hex();
    return (0, r.jsx)("div", {
        className: s.ex,
        children: (0, r.jsxs)("div", {
            className: s.b6,
            children: [(0, r.jsx)("div", {
                className: s.yY,
                style: {
                    backgroundColor: (0, i.Hl)(n.color)
                }
            }), (0, r.jsx)(l.hKd, {
                size: 8,
                horizontal: !0
            }), (0, r.jsxs)(l.Text, {
                variant: o,
                color: "text-default",
                children: [(0, r.jsx)(l.AC4, {
                    children: a.intl.string(a.t.RnyseL)
                }), n.name]
            }), !0 === t && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(l.hKd, {
                    size: 8,
                    horizontal: !0
                }), (0, r.jsx)(l.XAi, {
                    size: "md",
                    color: c
                })]
            })]
        })
    })
}