/** chunk id: 156601 params = (module,exports,require) **/
i.d(t, {
    A: () => x
});
var r = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    s = i(311907),
    l = i(582754),
    o = i(397927),
    c = i(736653),
    d = i(97352),
    m = i(927578),
    u = i(788868),
    C = i(696389);
let x = function(e) {
    let {
        subscriptionTier: t,
        interval: i = u.WT.MONTH,
        className: n,
        isGift: x = !1,
        variant: T,
        priceOptions: p,
        isApplicationHome: g,
        enablePremiumBrandRefresh: I
    } = e, _ = (0, s.bG)([d.A], () => d.A.isLoadedForSKUs([t])), h = (0, l.qB)((0, c.Ay)());
    if (!_) return (0, r.jsx)(o.y$y, {
        type: o.y$y.Type.PULSING_ELLIPSIS,
        className: C.xB
    });
    let f = d.A.getForSkuAndInterval((0, m.mH)(t), i),
        A = null != f ? (0, m.sS)(f, p, !1, x) : null;
    if (I) {
        let e = i === u.WT.YEAR;
        return (0, r.jsxs)("div", {
            children: [(0, r.jsx)(o.Text, {
                variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                color: e ? "text-muted" : h ? "text-strong" : "always-white",
                tag: "span",
                children: (0, r.jsx)("span", {
                    children: A
                })
            }), (0, r.jsxs)(o.Text, {
                variant: "text-xs/medium",
                tag: "span",
                color: "text-muted",
                children: ["/", (0, m.FJ)(i)]
            })]
        })
    }
    return (0, r.jsx)(o.Heading, {
        color: g ? "none" : "always-white",
        variant: T ?? "heading-md/medium",
        className: a()(C.SW, n),
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", {
                className: g ? void 0 : C.q9,
                children: A
            }), " / ", (0, m.FJ)(i)]
        })
    })
}