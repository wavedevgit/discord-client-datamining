/** chunk id: 935975, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(397927),
    s = n(994322),
    o = n(584111);

function u(e) {
    let {
        onClick: t,
        keybind: n,
        className: r,
        IconComponent: u
    } = e, c = (0, s.F)();
    return (0, i.jsxs)("div", {
        className: l()(o.UD, r),
        children: [(0, i.jsx)(a.DUT, {
            className: o.x6,
            onClick: t,
            "aria-hidden": !0,
            children: (0, i.jsx)(u, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), null != n && c ? (0, i.jsx)(a.Text, {
            className: o.P,
            "aria-hidden": !0,
            variant: "text-xxs/bold",
            color: "interactive-text-default",
            children: n
        }) : null]
    })
}