/** chunk id: 684136, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(607399),
    s = n(397927),
    l = n(985018),
    c = n(462674),
    u = function(e) {
        return e.DEFAULT = "", e.BOLD = "Bold", e.SOLID = "Solid", e
    }(u || {});

function d(e) {
    let {
        closeAction: t,
        variant: n = "",
        keybind: i,
        className: u
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, u),
        children: [(0, r.jsx)(s.DUT, {
            className: a()(c.b, {
                [c.EH]: "Bold" === n,
                [c.O3]: "Solid" === n
            }),
            onClick: t,
            "aria-label": l.intl.string(l.t.cpT0Cq),
            children: "Solid" === n ? (0, r.jsx)(s.aXh, {
                size: "md",
                color: "currentColor",
                "aria-hidden": !0
            }) : (0, r.jsx)(s.PGe, {
                size: "sm",
                color: "currentColor",
                "aria-hidden": !0
            })
        }), o.Fr ? null : (0, r.jsx)("div", {
            className: c.P,
            "aria-hidden": !0,
            children: i
        })]
    })
}
d.Variants = u