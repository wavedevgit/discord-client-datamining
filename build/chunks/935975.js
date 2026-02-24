/** chunk id: 935975, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(397927),
    a = n(994322),
    o = n(584111);

function u(e) {
    let {
        onClick: t,
        keybind: n,
        className: l,
        IconComponent: u
    } = e, d = (0, a.F)();
    return (0, i.jsxs)("div", {
        className: r()(o.UD, l),
        children: [(0, i.jsx)(s.DUT, {
            className: o.x6,
            onClick: t,
            "aria-hidden": !0,
            children: (0, i.jsx)(u, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), null != n && d ? (0, i.jsx)(s.Text, {
            className: o.P,
            "aria-hidden": !0,
            variant: "text-xxs/bold",
            color: "interactive-text-default",
            children: n
        }) : null]
    })
}