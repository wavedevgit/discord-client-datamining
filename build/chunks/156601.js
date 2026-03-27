/** chunk id: 156601 params = (module,exports,require) **/
r.d(t, {
    A: () => g
});
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(311907),
    l = r(582754),
    o = r(397927),
    c = r(736653),
    d = r(97352),
    m = r(927578),
    u = r(788868),
    T = r(588263);
let g = function(e) {
    let {
        subscriptionTier: t,
        interval: r = u.WT.MONTH,
        className: i,
        isGift: g = !1,
        variant: I,
        priceOptions: x,
        isApplicationHome: p,
        enablePremiumBrandRefresh: _
    } = e, f = (0, s.bG)([d.A], () => d.A.isLoadedForSKUs([t])), A = (0, l.qB)((0, c.Ay)());
    if (!f) return (0, n.jsx)(o.y$y, {
        type: o.y$y.Type.PULSING_ELLIPSIS,
        className: T.xB
    });
    let h = d.A.getForSkuAndInterval((0, m.mH)(t), r),
        N = null != h ? (0, m.sS)(h, x, !1, g) : null;
    if (_) {
        let e = r === u.WT.YEAR;
        return (0, n.jsxs)("div", {
            children: [(0, n.jsx)(o.Text, {
                variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                color: e ? "text-muted" : A ? "text-strong" : "always-white",
                tag: "span",
                children: (0, n.jsx)("span", {
                    children: N
                })
            }), (0, n.jsxs)(o.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, m.FJ)(r)]
            })]
        })
    }
    return (0, n.jsx)(o.Heading, {
        color: p ? "none" : "always-white",
        variant: I ?? "heading-md/medium",
        className: a()(T.SW, i),
        children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("span", {
                className: p ? void 0 : T.q9,
                children: N
            }), " / ", (0, m.FJ)(r)]
        })
    })
}