/** chunk id: 506742, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => d
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(397927),
    l = n(580630),
    c = n(985018),
    o = n(812640);
let d = e => {
    let {
        price: {
            amount: t,
            currency: n
        },
        className: r,
        variant: d = "heading-md/semibold"
    } = e, u = (0, l.RS)(t, n);
    return (0, a.jsxs)(s.Text, {
        variant: d,
        className: i()(o.v, r),
        children: [(0, a.jsx)(s.AC4, {
            children: c.intl.format(c.t["2CEGln"], {
                price: u
            })
        }), (0, a.jsx)("span", {
            "aria-hidden": !0,
            children: u
        })]
    })
}