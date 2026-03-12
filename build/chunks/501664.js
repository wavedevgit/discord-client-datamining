/** chunk id: 501664 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    l = n(993408),
    s = n(506742),
    c = n(219103),
    o = n(163620);

function d(e) {
    let {
        product: t,
        isPremiumUser: n,
        discount: i,
        className: d,
        discountOfferAmount: u,
        hideStrikethroughPrice: m = !1,
        nitroIconType: h,
        nitroIconSize: x = "md"
    } = e, p = (0, l.WD)(t, {
        isPremiumUser: n,
        discount: i
    });
    if (null == p) return null;
    let {
        defaultPrice: f,
        showDefaultPriceOnly: v
    } = p;
    if (v) return (0, r.jsx)("div", {
        className: a()(o.kG, d),
        children: (0, r.jsx)(c.x, {
            priceAmount: f.amount,
            priceCurrency: f.currency
        })
    });
    let {
        showNitroPrice: _,
        originalPrice: g,
        finalPrice: A
    } = p;
    return (0, r.jsxs)("div", {
        className: a()(o.kG, d),
        children: [m ? null : (0, r.jsx)(s.a, {
            price: g,
            className: o.q9
        }), (0, r.jsx)(c.x, {
            priceAmount: A.amount,
            priceCurrency: A.currency,
            discount: i,
            className: a()({
                [o.q9]: null == u
            }),
            nitroIconType: _ ? h : void 0,
            nitroIconSize: x,
            discountOfferAmount: u
        })]
    })
}