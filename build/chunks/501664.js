/** chunk id: 501664 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => d
});
var n = r(627968);
r(64700);
var i = r(503698),
    s = r.n(i),
    a = r(993408),
    l = r(506742),
    c = r(219103),
    o = r(137935);

function d(e) {
    let {
        product: t,
        isPremiumUser: r,
        discount: i,
        className: d,
        discountOfferAmount: u,
        hideStrikethroughPrice: m = !1,
        nitroIconType: p,
        nitroIconSize: h = "md"
    } = e, f = (0, a.WD)(t, {
        isPremiumUser: r,
        discount: i
    });
    if (null == f) return null;
    let {
        defaultPrice: x,
        showDefaultPriceOnly: v
    } = f;
    if (v) return (0, n.jsx)("div", {
        className: s()(o.kG, d),
        children: (0, n.jsx)(c.x, {
            priceAmount: x.amount,
            priceCurrency: x.currency
        })
    });
    let {
        showNitroPrice: _,
        originalPrice: g,
        finalPrice: A
    } = f;
    return (0, n.jsxs)("div", {
        className: s()(o.kG, d),
        children: [m ? null : (0, n.jsx)(l.a, {
            price: g,
            className: o.q9
        }), (0, n.jsx)(c.x, {
            priceAmount: A.amount,
            priceCurrency: A.currency,
            discount: i,
            className: s()({
                [o.q9]: null == u
            }),
            nitroIconType: _ ? p : void 0,
            nitroIconSize: h,
            discountOfferAmount: u
        })]
    })
}