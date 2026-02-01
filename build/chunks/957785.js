/** chunk id: 957785, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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
    p = n(733557);
let h = l.forwardRef(function(e, t) {
    var n, l, i;
    let {
        onCardClick: h,
        tooltipConfig: g,
        shouldScalePreview: f = !0,
        renderPreview: m,
        moreCount: b,
        isSingleCard: A = !1,
        wishlistId: y,
        wishlistItem: O,
        cardSize: j = d.Y.MEDIUM
    } = e, {
        skuId: x,
        skuProductLine: _
    } = O, {
        trackUserProfileWishlistAction: v
    } = (0, u.NJ)(), E = f ? p.ho : p.C8, C = A ? p.pr : p.Nr, S = null != b && b > 0, I = (0, r.jsxs)(o.DUT, {
        onClick: () => {
            h(), v({
                action: S ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                skuId: S ? null : x,
                wishlistId: y,
                productLines: new Set([_])
            })
        },
        className: s()(C, {
            [p.ax]: j === d.Y.SMALL
        }),
        "aria-label": null != (n = g.title) ? n : "",
        innerRef: t,
        children: [(0, r.jsx)("div", {
            className: E,
            children: m()
        }), S && (0, r.jsx)("div", {
            className: p.sv,
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