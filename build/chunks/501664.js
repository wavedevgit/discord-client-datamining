/** chunk id: 501664 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    s = a(993408),
    l = a(506742),
    o = a(219103),
    c = a(137935);

function d(e) {
    let {
        product: t,
        isPremiumUser: a,
        discount: r,
        className: d,
        discountOfferAmount: u,
        hideStrikethroughPrice: m = !1,
        nitroIconType: p,
        nitroIconSize: _ = "md"
    } = e, h = (0, s.WD)(t, {
        isPremiumUser: a,
        discount: r
    });
    if (null == h) return null;
    let {
        defaultPrice: x,
        showDefaultPriceOnly: f
    } = h;
    if (f) return (0, n.jsx)("div", {
        className: i()(c.kG, d),
        children: (0, n.jsx)(o.x, {
            priceAmount: x.amount,
            priceCurrency: x.currency
        })
    });
    let {
        showNitroPrice: g,
        originalPrice: v,
        finalPrice: A
    } = h;
    return (0, n.jsxs)("div", {
        className: i()(c.kG, d),
        children: [m ? null : (0, n.jsx)(l.a, {
            price: v,
            className: c.q9
        }), (0, n.jsx)(o.x, {
            priceAmount: A.amount,
            priceCurrency: A.currency,
            discount: r,
            className: i()({
                [c.q9]: null == u
            }),
            nitroIconType: g ? p : void 0,
            nitroIconSize: _,
            discountOfferAmount: u
        })]
    })
}