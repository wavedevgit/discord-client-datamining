/** chunk id: 854818 params = (module,exports,require) **/
n.d(t, {
    e: () => d
}), n(321073);
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(397927),
    l = n(496431),
    o = n(985018),
    c = n(472506);
let d = e => {
    let t, n, {
            endDate: a,
            size: d = "md",
            className: u,
            showSeconds: m = !1
        } = e,
        {
            days: p,
            hours: h,
            minutes: x,
            seconds: f
        } = (0, l.A)(a),
        v = (n = [(t = e => `${e.toString().padStart(2,"0")}`)(p), t(h), t(x)], m && n.push(t(f)), n.join(":"));
    return (0, r.jsxs)("div", {
        className: i()(c.kL, u),
        role: "timer",
        children: [v.split("").map((e, t) => ":" === e ? (0, r.jsx)(s.Text, {
            color: "none",
            variant: "md" === d ? "heading-lg/extrabold" : "heading-xxl/extrabold",
            className: c.eC,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t) : (0, r.jsx)(s.Text, {
            color: "always-white",
            variant: "md" === d ? "heading-md/bold" : "heading-xl/bold",
            className: c.ai,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t)), (0, r.jsx)(s.AC4, {
            children: o.intl.format(o.t.j6IyVe, {
                days: p,
                hours: h,
                minutes: x
            })
        })]
    })
}