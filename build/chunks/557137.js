/** chunk id: 557137 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(311907),
    s = n(397927),
    o = n(961350),
    c = n(296227),
    d = n(848152);

function u(e) {
    let {
        userId: t,
        headingId: n,
        widget: i,
        disableInteraction: r = !1,
        title: o,
        subtitle: c,
        actionButtons: u = [],
        className: h
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(d.U1, h),
        children: [(0, l.jsxs)("div", {
            className: d.DD,
            children: [(0, l.jsx)(s.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                id: n,
                children: o
            }), null != c && (0, l.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: c
            })]
        }), (0, l.jsx)(m, {
            widget: i,
            actionButtons: u,
            disabledInteraction: r,
            userId: t
        })]
    })
}

function m(e) {
    let {
        widget: t,
        actionButtons: n,
        disabledInteraction: i,
        userId: a
    } = e, s = (0, r.bG)([o.default], () => o.default.getId());
    return i ? null : null != n && n.length > 0 ? (0, l.jsx)("div", {
        className: d.o1,
        children: n
    }) : s !== a ? (0, l.jsx)("div", {
        className: d.o1,
        children: (0, l.jsx)(c.A, {
            widget: t,
            userId: a,
            className: d.AQ
        })
    }) : null
}