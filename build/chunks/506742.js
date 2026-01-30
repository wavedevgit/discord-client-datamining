/** chunk id: 506742, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => u
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(580630),
    o = n(985018),
    c = n(812640);
let u = e => {
    let {
        price: {
            amount: t,
            currency: n
        },
        className: l,
        variant: u = "heading-md/semibold"
    } = e, d = (0, s.RS)(t, n);
    return (0, r.jsxs)(a.Text, {
        variant: u,
        className: i()(c.v, l),
        children: [(0, r.jsx)(a.AC4, {
            children: o.intl.format(o.t["2CEGln"], {
                price: d
            })
        }), (0, r.jsx)("span", {
            "aria-hidden": !0,
            children: d
        })]
    })
}