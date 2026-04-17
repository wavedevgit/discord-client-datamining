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
    u = r(927578),
    m = r(788868),
    x = r(378874);
let g = function(e) {
    let {
        subscriptionTier: t,
        interval: r = m.WT.MONTH,
        className: i,
        isGift: g = !1,
        variant: T,
        priceOptions: p,
        isApplicationHome: I,
        enablePremiumBrandRefresh: h
    } = e, f = (0, s.bG)([d.A], () => d.A.isLoadedForSKUs([t])), j = (0, l.qB)((0, c.Ay)());
    if (!f) return (0, n.jsx)(o.y$y, {
        type: o.y$y.Type.PULSING_ELLIPSIS,
        className: x.xB
    });
    let A = d.A.getForSkuAndInterval((0, u.mH)(t), r),
        v = null != A ? (0, u.sS)(A, p, !1, g) : null;
    if (h) {
        let e = r === m.WT.YEAR;
        return (0, n.jsxs)("div", {
            children: [(0, n.jsx)(o.Text, {
                variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                color: e ? "text-muted" : j ? "text-strong" : "always-white",
                tag: "span",
                children: (0, n.jsx)("span", {
                    children: v
                })
            }), (0, n.jsxs)(o.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, u.FJ)(r)]
            })]
        })
    }
    return (0, n.jsx)(o.Heading, {
        color: I ? "none" : "always-white",
        variant: T ?? "heading-md/medium",
        className: a()(x.SW, i),
        children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("span", {
                className: I ? void 0 : x.q9,
                children: v
            }), " / ", (0, u.FJ)(r)]
        })
    })
}