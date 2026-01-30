/** chunk id: 957785, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    c = n(594832),
    u = n(183555),
    d = n(524380),
    h = n(733557);
let p = l.forwardRef(function(e, t) {
    var n, l, i;
    let {
        onCardClick: p,
        tooltipConfig: g,
        shouldScalePreview: f = !0,
        renderPreview: m,
        moreCount: b,
        isSingleCard: A = !1,
        wishlistId: y,
        wishlistItem: O,
        cardSize: _ = d.Y.MEDIUM
    } = e, {
        skuId: j,
        skuProductLine: x
    } = O, {
        trackUserProfileWishlistAction: v
    } = (0, u.NJ)(), E = f ? h.ho : h.C8, C = A ? h.pr : h.Nr, S = null != b && b > 0, I = (0, r.jsxs)(o.DUT, {
        onClick: () => {
            p(), v({
                action: S ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                skuId: S ? null : j,
                wishlistId: y,
                productLines: new Set([x])
            })
        },
        className: s()(C, {
            [h.ax]: _ === d.Y.SMALL
        }),
        "aria-label": null != (n = g.title) ? n : "",
        innerRef: t,
        children: [(0, r.jsx)("div", {
            className: E,
            children: m()
        }), S && (0, r.jsx)("div", {
            className: h.sv,
            children: (0, r.jsxs)(o.Text, {
                variant: "text-xs/medium",
                color: "always-white",
                children: ["+", b]
            })
        })]
    });
    return (0, r.jsx)(a.un, {
        asContainer: !0,
        asset: null == (i = g.renderIcon) ? void 0 : i.call(g, O),
        assetSize: c.Q8,
        title: g.title,
        body: null != (l = g.body) ? l : "",
        children: I
    })
})