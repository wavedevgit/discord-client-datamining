/** chunk id: 557137 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(311907),
    r = n(397927),
    o = n(961350),
    d = n(296227),
    c = n(848152);

function u(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: s = !1,
        title: o,
        subtitle: d,
        actionButtons: u = [],
        className: m
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.U1, m),
        children: [(0, i.jsxs)("div", {
            className: c.DD,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                id: n,
                children: o
            }), null != d && (0, i.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: d
            })]
        }), (0, i.jsx)(g, {
            widget: l,
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
        disabledInteraction: l,
        userId: a
    } = e, r = (0, s.bG)([o.default], () => o.default.getId());
    return l ? null : null != n && n.length > 0 ? (0, i.jsx)("div", {
        className: c.o1,
        children: n
    }) : r !== a ? (0, i.jsx)("div", {
        className: c.o1,
        children: (0, i.jsx)(d.A, {
            widget: t,
            userId: a,
            className: c.AQ
        })
    }) : null
}