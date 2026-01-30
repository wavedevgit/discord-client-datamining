/** chunk id: 576456, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(985018),
    c = n(647586);

function u(e) {
    let {
        className: t,
        onJump: n
    } = e, [i, u] = l.useState(!1);
    return (0, r.jsx)(a.DUT, {
        className: s()(c.n, t),
        onClick: e => {
            u(!0), n(e)
        },
        children: i ? (0, r.jsx)(a.y$y, {
            type: a.y$y.Type.PULSING_ELLIPSIS
        }) : (0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            className: c.Q,
            children: o.intl.string(o.t.k5WiPf)
        })
    })
}