/** chunk id: 854818 params = (module,exports,require) **/
a.d(t, {
    e: () => d
}), a(321073);
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    s = a(397927),
    l = a(496431),
    o = a(985018),
    c = a(472506);
let d = e => {
    let t, a, {
            endDate: r,
            size: d = "md",
            className: u,
            showSeconds: m = !1
        } = e,
        {
            days: p,
            hours: _,
            minutes: h,
            seconds: x
        } = (0, l.A)(r),
        f = (a = [(t = e => `${e.toString().padStart(2,"0")}`)(p), t(_), t(h)], m && a.push(t(x)), a.join(":"));
    return (0, n.jsxs)("div", {
        className: i()(c.kL, u),
        role: "timer",
        children: [f.split("").map((e, t) => ":" === e ? (0, n.jsx)(s.Text, {
            color: "none",
            variant: "md" === d ? "heading-lg/extrabold" : "heading-xxl/extrabold",
            className: c.eC,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t) : (0, n.jsx)(s.Text, {
            color: "always-white",
            variant: "md" === d ? "heading-md/bold" : "heading-xl/bold",
            className: c.ai,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t)), (0, n.jsx)(s.AC4, {
            children: o.intl.format(o.t.j6IyVe, {
                days: p,
                hours: _,
                minutes: h
            })
        })]
    })
}