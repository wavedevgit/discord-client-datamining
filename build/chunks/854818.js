/** chunk id: 854818 params = (module,exports,require) **/
"use strict";
r.d(t, {
    e: () => d
}), r(321073);
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(397927),
    l = r(496431),
    o = r(985018),
    c = r(20649);
let d = e => {
    let t, r, {
            endDate: i,
            size: d = "md",
            className: u,
            showSeconds: m = !1
        } = e,
        {
            days: p,
            hours: h,
            minutes: x,
            seconds: f
        } = (0, l.A)(i),
        v = (r = [(t = e => `${e.toString().padStart(2,"0")}`)(p), t(h), t(x)], m && r.push(t(f)), r.join(":"));
    return (0, n.jsxs)("div", {
        className: s()(c.kL, u),
        role: "timer",
        children: [v.split("").map((e, t) => ":" === e ? (0, n.jsx)(a.Text, {
            color: "none",
            variant: "md" === d ? "heading-lg/extrabold" : "heading-xxl/extrabold",
            className: c.eC,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t) : (0, n.jsx)(a.Text, {
            color: "always-white",
            variant: "md" === d ? "heading-md/bold" : "heading-xl/bold",
            className: c.ai,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t)), (0, n.jsx)(a.AC4, {
            children: o.intl.format(o.t.j6IyVe, {
                days: p,
                hours: h,
                minutes: x
            })
        })]
    })
}