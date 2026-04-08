/** chunk id: 935975 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(397927),
    l = n(224521);

function o(e) {
    let {
        onClick: t,
        keybind: n,
        className: a,
        IconComponent: o
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(l.UD, a),
        children: [(0, i.jsx)(s.DUT, {
            className: l.x6,
            onClick: t,
            "aria-hidden": !0,
            children: (0, i.jsx)(o, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), null != n ? (0, i.jsx)(s.Text, {
            className: l.P,
            "aria-hidden": !0,
            variant: "text-xxs/bold",
            color: "interactive-text-default",
            children: n
        }) : null]
    })
}