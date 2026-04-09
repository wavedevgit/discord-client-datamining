/** chunk id: 684136 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i, s = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(607399),
    d = n(397927),
    o = n(985018),
    h = n(494697),
    u = ((i = u || {}).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid", i);

function c(e) {
    let {
        closeAction: t,
        variant: n = "",
        keybind: i,
        className: r
    } = e;
    return (0, s.jsxs)("div", {
        className: l()(h.kL, r),
        children: [(0, s.jsx)(d.DUT, {
            className: l()(h.b, {
                [h.EH]: "Bold" === n,
                [h.O3]: "Solid" === n
            }),
            onClick: t,
            "aria-label": o.intl.string(o.t.cpT0Cq),
            children: "Solid" === n ? (0, s.jsx)(d.aXh, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            }) : (0, s.jsx)(d.PGe, {
                size: "sm",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), a.Fr ? null : (0, s.jsx)("div", {
            className: h.P,
            "aria-hidden": !0,
            children: i
        })]
    })
}
c.Variants = u