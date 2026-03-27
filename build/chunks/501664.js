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
    o = r(219103),
    c = r(137935);

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
    } = e, x = (0, a.WD)(t, {
        isPremiumUser: r,
        discount: i
    });
    if (null == x) return null;
    let {
        defaultPrice: f,
        showDefaultPriceOnly: v
    } = x;
    if (v) return (0, n.jsx)("div", {
        className: s()(c.kG, d),
        children: (0, n.jsx)(o.x, {
            priceAmount: f.amount,
            priceCurrency: f.currency
        })
    });
    let {
        showNitroPrice: g,
        originalPrice: _,
        finalPrice: A
    } = x;
    return (0, n.jsxs)("div", {
        className: s()(c.kG, d),
        children: [m ? null : (0, n.jsx)(l.a, {
            price: _,
            className: c.q9
        }), (0, n.jsx)(o.x, {
            priceAmount: A.amount,
            priceCurrency: A.currency,
            discount: i,
            className: s()({
                [c.q9]: null == u
            }),
            nitroIconType: g ? p : void 0,
            nitroIconSize: h,
            discountOfferAmount: u
        })]
    })
}