/** chunk id: 684136 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i, l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(607399),
    o = n(397927),
    u = n(985018),
    d = n(589753),
    c = ((i = c || {}).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid", i);

function A(e) {
    let {
        closeAction: t,
        variant: n = "",
        keybind: i,
        className: a
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(d.kL, a),
        children: [(0, l.jsx)(o.DUT, {
            className: r()(d.b, {
                [d.EH]: "Bold" === n,
                [d.O3]: "Solid" === n
            }),
            onClick: t,
            "aria-label": u.intl.string(u.t.cpT0Cq),
            children: "Solid" === n ? (0, l.jsx)(o.aXh, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            }) : (0, l.jsx)(o.PGe, {
                size: "sm",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), s.Fr ? null : (0, l.jsx)("div", {
            className: d.P,
            "aria-hidden": !0,
            children: i
        })]
    })
}
A.Variants = c