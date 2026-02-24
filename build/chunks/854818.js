/** chunk id: 854818, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => d
}), n(321073);
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(397927),
    l = n(496431),
    c = n(985018),
    o = n(455370);
let d = e => {
    let t, n, {
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
        g = (n = [(t = e => `${e.toString().padStart(2,"0")}`)(p), t(_), t(h)], m && n.push(t(x)), n.join(":"));
    return (0, a.jsxs)("div", {
        className: i()(o.kL, u),
        role: "timer",
        children: [g.split("").map((e, t) => ":" === e ? (0, a.jsx)(s.Text, {
            color: "none",
            variant: "md" === d ? "heading-lg/extrabold" : "heading-xxl/extrabold",
            className: o.eC,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t) : (0, a.jsx)(s.Text, {
            color: "always-white",
            variant: "md" === d ? "heading-md/bold" : "heading-xl/bold",
            className: o.ai,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t)), (0, a.jsx)(s.AC4, {
            children: c.intl.format(c.t.j6IyVe, {
                days: p,
                hours: _,
                minutes: h
            })
        })]
    })
}