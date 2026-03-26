/** chunk id: 257284 params = (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968);
r(64700);
var i = r(311907),
    a = r(582754),
    s = r(397927),
    l = r(736653),
    o = r(97352),
    c = r(927578),
    d = r(788868),
    m = r(620138);
let u = function(e) {
    let {
        isGift: t = !1,
        priceOptions: r
    } = e, u = (0, i.bG)([o.A], () => o.A.get(d.gD.PREMIUM_GROUP_MONTH)), T = (0, a.qB)((0, l.Ay)());
    if (null == u) return (0, n.jsx)(s.y$y, {
        type: s.y$y.Type.PULSING_ELLIPSIS,
        className: m.xB
    });
    let g = (0, c.sS)(u, r, !1, t),
        I = d.WT.MONTH;
    return (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.Text, {
            variant: "heading-xxl/extrabold",
            color: T ? "text-strong" : "always-white",
            tag: "span",
            children: g
        }), (0, n.jsxs)(s.Text, {
            variant: "text-xs/medium",
            tag: "span",
            color: "text-muted",
            children: ["/", (0, c.FJ)(I)]
        })]
    })
}