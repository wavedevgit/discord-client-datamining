/** chunk id: 257284 params = (module,exports,require) **/
r.d(t, {
    A: () => m
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
    u = r(378874);
let m = function(e) {
    let {
        isGift: t = !1,
        priceOptions: r
    } = e, m = (0, i.bG)([o.A], () => o.A.get(d.gD.PREMIUM_GROUP_MONTH)), x = (0, a.qB)((0, l.Ay)());
    if (null == m) return (0, n.jsx)(s.y$y, {
        type: s.y$y.Type.PULSING_ELLIPSIS,
        className: u.xB
    });
    let g = (0, c.sS)(m, r, !1, t),
        T = d.WT.MONTH;
    return (0, n.jsxs)("div", {
        children: [(0, n.jsx)(s.Text, {
            variant: "heading-xxl/extrabold",
            color: x ? "text-strong" : "always-white",
            tag: "span",
            children: g
        }), (0, n.jsxs)(s.Text, {
            variant: "text-xs/medium",
            tag: "span",
            color: "text-muted",
            children: ["/", (0, c.FJ)(T)]
        })]
    })
}