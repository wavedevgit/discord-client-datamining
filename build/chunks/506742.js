/** chunk id: 506742 params = (module,exports,require) **/
a.d(t, {
    a: () => d
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    s = a(397927),
    l = a(580630),
    c = a(985018),
    o = a(332822);
let d = e => {
    let {
        price: {
            amount: t,
            currency: a
        },
        className: r,
        variant: d = "heading-md/semibold"
    } = e, u = (0, l.RS)(t, a);
    return (0, n.jsxs)(s.Text, {
        variant: d,
        className: i()(o.v, r),
        children: [(0, n.jsx)(s.AC4, {
            children: c.intl.format(c.t["2CEGln"], {
                price: u
            })
        }), (0, n.jsx)("span", {
            "aria-hidden": !0,
            children: u
        })]
    })
}