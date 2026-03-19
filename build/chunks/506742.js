/** chunk id: 506742 params = (module,exports,require) **/
n.d(t, {
    a: () => d
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(397927),
    s = n(580630),
    o = n(985018),
    c = n(332822);
let d = e => {
    let {
        price: {
            amount: t,
            currency: n
        },
        className: a,
        variant: d = "heading-md/semibold"
    } = e, u = (0, s.RS)(t, n);
    return (0, r.jsxs)(l.Text, {
        variant: d,
        className: i()(c.v, a),
        children: [(0, r.jsx)(l.AC4, {
            children: o.intl.format(o.t["2CEGln"], {
                price: u
            })
        }), (0, r.jsx)("span", {
            "aria-hidden": !0,
            children: u
        })]
    })
}