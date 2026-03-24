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
    o = r(258470);

function d(e) {
    let {
        product: t,
        isPremiumUser: r,
        discount: i,
        className: d,
        discountOfferAmount: u,
        hideStrikethroughPrice: m = !1,
        nitroIconType: p,
        nitroIconSize: f = "md"
    } = e, h = (0, a.WD)(t, {
        isPremiumUser: r,
        discount: i
    });
    if (null == h) return null;
    let {
        defaultPrice: x,
        showDefaultPriceOnly: v
    } = h;
    if (v) return (0, n.jsx)("div", {
        className: s()(o.kG, d),
        children: (0, n.jsx)(c.x, {
            priceAmount: x.amount,
            priceCurrency: x.currency
        })
    });
    let {
        showNitroPrice: g,
        originalPrice: _,
        finalPrice: A
    } = h;
    return (0, n.jsxs)("div", {
        className: s()(o.kG, d),
        children: [m ? null : (0, n.jsx)(l.a, {
            price: _,
            className: o.q9
        }), (0, n.jsx)(c.x, {
            priceAmount: A.amount,
            priceCurrency: A.currency,
            discount: i,
            className: s()({
                [o.q9]: null == u
            }),
            nitroIconType: g ? p : void 0,
            nitroIconSize: f,
            discountOfferAmount: u
        })]
    })
}