/** chunk id: 257284 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var r = i(627968);
i(64700);
var n = i(311907),
    a = i(582754),
    s = i(397927),
    l = i(736653),
    o = i(97352),
    c = i(927578),
    d = i(788868),
    m = i(696389);
let u = function(e) {
    let {
        isGift: t = !1,
        priceOptions: i
    } = e, u = (0, n.bG)([o.A], () => o.A.get(d.gD.PREMIUM_GROUP_MONTH)), C = (0, a.qB)((0, l.Ay)());
    if (null == u) return (0, r.jsx)(s.y$y, {
        type: s.y$y.Type.PULSING_ELLIPSIS,
        className: m.xB
    });
    let x = (0, c.sS)(u, i, !1, t),
        T = d.WT.MONTH;
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Text, {
            variant: "heading-xxl/extrabold",
            color: C ? "text-strong" : "always-white",
            tag: "span",
            children: x
        }), (0, r.jsxs)(s.Text, {
            variant: "text-xs/medium",
            tag: "span",
            color: "text-muted",
            children: ["/", (0, c.FJ)(T)]
        })]
    })
}