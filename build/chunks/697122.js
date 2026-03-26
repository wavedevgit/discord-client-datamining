/** chunk id: 697122 params = (module,exports,require) **/
n.d(t, {
    Q: () => u
});
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(397927),
    o = n(396787),
    c = n(985018),
    d = n(131661);

function u(e) {
    let {
        channel: t,
        children: n,
        className: l,
        editable: u,
        location: h
    } = e;
    return u ? (0, i.jsx)(a.m, {
        position: "bottom",
        text: c.intl.string(c.t["0qPSMV"]),
        children: (0, i.jsxs)(r.DUT, {
            className: s()(d.e, l),
            onClick: () => (0, o.jv)(t.id, h),
            children: [n, (0, i.jsx)("div", {
                className: d.Z,
                children: (0, i.jsx)(r.R2l, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })
    }) : (0, i.jsx)("div", {
        className: l,
        children: n
    })
}