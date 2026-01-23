/** Chunk was on 97492 **/
/** chunk id: 697122, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => d
});
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    s = n(990078),
    a = n(397927),
    o = n(396787),
    c = n(985018),
    u = n(876872);

function d(e) {
    let {
        channel: t,
        children: n,
        className: l,
        editable: d,
        location: p
    } = e;
    return d ? (0, r.jsx)(s.m, {
        position: "bottom",
        text: c.intl.string(c.t["0qPSMV"]),
        children: (0, r.jsxs)(a.DUT, {
            className: i()(u.e, l),
            onClick: () => (0, o.jv)(t.id, p),
            children: [n, (0, r.jsx)("div", {
                className: u.Z,
                children: (0, r.jsx)(a.R2l, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        })
    }) : (0, r.jsx)("div", {
        className: l,
        children: n
    })
}