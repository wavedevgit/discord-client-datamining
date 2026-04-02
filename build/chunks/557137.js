/** chunk id: 557137 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(397927),
    o = n(961350),
    c = n(296227),
    d = n(848152);

function u(e) {
    let {
        userId: t,
        headingId: n,
        widget: a,
        disableInteraction: s = !1,
        title: o,
        subtitle: c,
        actionButtons: u = [],
        className: m
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(d.U1, m),
        children: [(0, i.jsxs)("div", {
            className: d.DD,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                id: n,
                children: o
            }), null != c && (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: c
            })]
        }), (0, i.jsx)(g, {
            widget: a,
            actionButtons: u,
            disabledInteraction: s,
            userId: t
        })]
    })
}

function g(e) {
    let {
        widget: t,
        actionButtons: n,
        disabledInteraction: a,
        userId: l
    } = e, r = (0, s.bG)([o.default], () => o.default.getId());
    return a ? null : null != n && n.length > 0 ? (0, i.jsx)("div", {
        className: d.o1,
        children: n
    }) : r !== l ? (0, i.jsx)("div", {
        className: d.o1,
        children: (0, i.jsx)(c.A, {
            widget: t,
            userId: l,
            className: d.AQ
        })
    }) : null
}