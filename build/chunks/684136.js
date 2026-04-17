/** chunk id: 684136 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i, l = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    r = n(607399),
    u = n(397927),
    o = n(985018),
    c = n(589753),
    d = ((i = d || {}).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid", i);

function A(e) {
    let {
        closeAction: t,
        variant: n = "",
        keybind: i,
        className: a
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(c.kL, a),
        children: [(0, l.jsx)(u.DUT, {
            className: s()(c.b, {
                [c.EH]: "Bold" === n,
                [c.O3]: "Solid" === n
            }),
            onClick: t,
            "aria-label": o.intl.string(o.t.cpT0Cq),
            children: "Solid" === n ? (0, l.jsx)(u.aXh, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            }) : (0, l.jsx)(u.PGe, {
                size: "sm",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), r.Fr ? null : (0, l.jsx)("div", {
            className: c.P,
            "aria-hidden": !0,
            children: i
        })]
    })
}
A.Variants = d