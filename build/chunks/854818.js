/** chunk id: 854818, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => u
}), n(321073), n(747238);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(496431),
    o = n(985018),
    c = n(487604);
let u = e => {
    let t, n, {
            endDate: l,
            size: u = "md",
            className: d,
            showSeconds: m = !1
        } = e,
        {
            days: p,
            hours: f,
            minutes: x,
            seconds: v
        } = (0, s.A)(l),
        h = (n = [(t = e => "".concat(e.toString().padStart(2, "0")))(p), t(f), t(x)], m && n.push(t(v)), n.join(":"));
    return (0, r.jsxs)("div", {
        className: i()(c.kL, d),
        role: "timer",
        children: [h.split("").map((e, t) => ":" === e ? (0, r.jsx)(a.Text, {
            color: "none",
            variant: "md" === u ? "heading-lg/extrabold" : "heading-xxl/extrabold",
            className: c.eC,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t) : (0, r.jsx)(a.Text, {
            color: "always-white",
            variant: "md" === u ? "heading-md/bold" : "heading-xl/bold",
            className: c.ai,
            "aria-hidden": !0,
            tag: "div",
            children: e
        }, t)), (0, r.jsx)(a.AC4, {
            children: o.intl.format(o.t.j6IyVe, {
                days: p,
                hours: f,
                minutes: x
            })
        })]
    })
}