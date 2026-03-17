/** chunk id: 501664 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(993408),
    s = n(506742),
    o = n(219103),
    c = n(258470);

function d(e) {
    let {
        product: t,
        isPremiumUser: n,
        discount: a,
        className: d,
        discountOfferAmount: u,
        hideStrikethroughPrice: m = !1,
        nitroIconType: h,
        nitroIconSize: p = "md"
    } = e, f = (0, l.WD)(t, {
        isPremiumUser: n,
        discount: a
    });
    if (null == f) return null;
    let {
        defaultPrice: x,
        showDefaultPriceOnly: _
    } = f;
    if (_) return (0, r.jsx)("div", {
        className: i()(c.kG, d),
        children: (0, r.jsx)(o.x, {
            priceAmount: x.amount,
            priceCurrency: x.currency
        })
    });
    let {
        showNitroPrice: v,
        originalPrice: A,
        finalPrice: g
    } = f;
    return (0, r.jsxs)("div", {
        className: i()(c.kG, d),
        children: [m ? null : (0, r.jsx)(s.a, {
            price: A,
            className: c.q9
        }), (0, r.jsx)(o.x, {
            priceAmount: g.amount,
            priceCurrency: g.currency,
            discount: a,
            className: i()({
                [c.q9]: null == u
            }),
            nitroIconType: v ? h : void 0,
            nitroIconSize: p,
            discountOfferAmount: u
        })]
    })
}