/** chunk id: 697122, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => d
});
var l = n(627968),
    r = n(503698),
    i = n.n(r),
    a = n(990078),
    s = n(397927),
    o = n(396787),
    c = n(985018),
    u = n(876872);

function d(e) {
    let {
        channel: t,
        children: n,
        className: r,
        editable: d,
        location: h
    } = e;
    return d ? (0, l.jsx)(a.m, {
        position: "bottom",
        text: c.intl.string(c.t["0qPSMV"]),
        children: (0, l.jsxs)(s.DUT, {
            className: i()(u.e, r),
            onClick: () => (0, o.jv)(t.id, h),
            children: [n, (0, l.jsx)("div", {
                className: u.Z,
                children: (0, l.jsx)(s.R2l, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })
    }) : (0, l.jsx)("div", {
        className: r,
        children: n
    })
}