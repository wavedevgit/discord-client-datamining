/** chunk id: 156601 params = (module,exports,require) **/
r.d(t, {
    A: () => g
});
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    s = r(311907),
    l = r(582754),
    o = r(397927),
    c = r(736653),
    d = r(97352),
    u = r(927578),
    m = r(788868),
    x = r(588263);
let g = function(e) {
    let {
        subscriptionTier: t,
        interval: r = m.WT.MONTH,
        className: n,
        isGift: g = !1,
        variant: T,
        priceOptions: p,
        isApplicationHome: h,
        enablePremiumBrandRefresh: I
    } = e, f = (0, s.bG)([d.A], () => d.A.isLoadedForSKUs([t])), j = (0, l.qB)((0, c.Ay)());
    if (!f) return (0, i.jsx)(o.y$y, {
        type: o.y$y.Type.PULSING_ELLIPSIS,
        className: x.xB
    });
    let A = d.A.getForSkuAndInterval((0, u.mH)(t), r),
        v = null != A ? (0, u.sS)(A, p, !1, g) : null;
    if (I) {
        let e = r === m.WT.YEAR;
        return (0, i.jsxs)("div", {
            children: [(0, i.jsx)(o.Text, {
                variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                color: e ? "text-muted" : j ? "text-strong" : "always-white",
                tag: "span",
                children: (0, i.jsx)("span", {
                    children: v
                })
            }), (0, i.jsxs)(o.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, u.FJ)(r)]
            })]
        })
    }
    return (0, i.jsx)(o.Heading, {
        color: h ? "none" : "always-white",
        variant: T ?? "heading-md/medium",
        className: a()(x.SW, n),
        children: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", {
                className: h ? void 0 : x.q9,
                children: v
            }), " / ", (0, u.FJ)(r)]
        })
    })
}