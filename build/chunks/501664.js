/** chunk id: 501664 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(993408),
    l = n(506742),
    c = n(219103),
    o = n(469215);

function d(e) {
    let {
        product: t,
        isPremiumUser: n,
        discount: r,
        className: d,
        discountOfferAmount: u,
        hideStrikethroughPrice: m = !1,
        nitroIconType: _,
        nitroIconSize: p = "md"
    } = e, h = (0, s.WD)(t, {
        isPremiumUser: n,
        discount: r
    });
    if (null == h) return null;
    let {
        defaultPrice: x,
        showDefaultPriceOnly: f
    } = h;
    if (f) return (0, a.jsx)("div", {
        className: i()(o.kG, d),
        children: (0, a.jsx)(c.x, {
            priceAmount: x.amount,
            priceCurrency: x.currency
        })
    });
    let {
        showNitroPrice: g,
        originalPrice: v,
        finalPrice: A
    } = h;
    return (0, a.jsxs)("div", {
        className: i()(o.kG, d),
        children: [m ? null : (0, a.jsx)(l.a, {
            price: v,
            className: o.q9
        }), (0, a.jsx)(c.x, {
            priceAmount: A.amount,
            priceCurrency: A.currency,
            discount: r,
            className: i()({
                [o.q9]: null == u
            }),
            nitroIconType: g ? _ : void 0,
            nitroIconSize: p,
            discountOfferAmount: u
        })]
    })
}