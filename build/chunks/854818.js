/** chunk id: 854818 params = (module,exports,require) **/
n.d(t, {
    e: () => d
}), n(321073);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(397927),
    s = n(496431),
    c = n(985018),
    o = n(455370);
let d = e => {
    let t, n, {
            endDate: i,
            size: d = "md",
            className: u,
            showSeconds: m = !1
        } = e,
        {
            days: h,
            hours: x,
            minutes: p,
            seconds: f
        } = (0, s.A)(i),
        v = (n = [(t = e => `${e.toString().padStart(2,"0")}`)(h), t(x), t(p)], m && n.push(t(f)), n.join(":"));
    return (0, r.jsxs)("div", {
        className: a()(o.kL, u),
        role: "timer",
        children: [v.split("").map((e, t) => ":" === e ? (0, r.jsx)(l.Text, {
            color: "none",
            variant: "md" === d ? "heading-lg/extrabold" : "heading-xxl/extrabold",
            className: o.eC,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t) : (0, r.jsx)(l.Text, {
            color: "always-white",
            variant: "md" === d ? "heading-md/bold" : "heading-xl/bold",
            className: o.ai,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t)), (0, r.jsx)(l.AC4, {
            children: c.intl.format(c.t.j6IyVe, {
                days: h,
                hours: x,
                minutes: p
            })
        })]
    })
}