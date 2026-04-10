/** chunk id: 557137 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(961350),
    d = n(296227),
    c = n(848152);

function u(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: a = !1,
        title: o,
        subtitle: d,
        actionButtons: u = [],
        className: h
    } = e;
    return (0, r.jsxs)("div", {
        className: i()(c.U1, h),
        children: [(0, r.jsxs)("div", {
            className: c.DD,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-sm/medium",
                color: "text-default",
                id: n,
                children: o
            }), null != d && (0, r.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: d
            })]
        }), (0, r.jsx)(m, {
            widget: l,
            actionButtons: u,
            disabledInteraction: a,
            userId: t
        })]
    })
}

function m(e) {
    let {
        widget: t,
        actionButtons: n,
        disabledInteraction: l,
        userId: i
    } = e, s = (0, a.bG)([o.default], () => o.default.getId());
    return l ? null : null != n && n.length > 0 ? (0, r.jsx)("div", {
        className: c.o1,
        children: n
    }) : s !== i ? (0, r.jsx)("div", {
        className: c.o1,
        children: (0, r.jsx)(d.A, {
            widget: t,
            userId: i,
            className: c.AQ
        })
    }) : null
}