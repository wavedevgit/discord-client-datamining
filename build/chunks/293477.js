/** chunk id: 293477 params = (module,exports,require) **/
n.d(t, {
    B: () => m
});
var r = n(627968),
    a = n(397927),
    i = n(501664),
    l = n(882342),
    s = n(219103),
    c = n(818348),
    o = n(985018),
    d = n(969061);

function u(e) {
    let {
        orbPrice: t,
        isProductDisabled: n,
        hasSufficientOrbs: i
    } = e, l = n ? o.intl.string(o.t.wu4gyV) : o.intl.string(o.t.eFNRzU), c = n || !i;
    return (0, r.jsxs)("div", {
        className: d.eg,
        children: [(0, r.jsx)("div", {
            className: d.zR,
            children: (0, r.jsx)(a.Text, {
                variant: "text-xs/normal",
                className: c ? d.r9 : void 0,
                children: l
            })
        }), (0, r.jsx)(s.x, {
            priceAmount: t.amount,
            priceCurrency: t.currency,
            className: c ? d.r9 : void 0
        })]
    })
}

function m(e) {
    let {
        prices: t,
        isPremiumUser: n,
        discount: a,
        product: o,
        hasSufficientOrbs: m,
        isProductDisabled: h,
        discountOfferAmount: x
    } = e, p = null != x;
    return 0 === t.length ? null : t[0].currency === c.Yr.DISCORD_ORB ? (0, r.jsx)(u, {
        orbPrice: t[0],
        isProductDisabled: h,
        hasSufficientOrbs: m
    }) : (0, r.jsxs)("div", {
        className: d.eg,
        children: [(0, r.jsxs)("div", {
            className: d.pw,
            children: [(0, r.jsx)(i.A, {
                product: o,
                discount: a,
                isPremiumUser: n,
                hideStrikethroughPrice: !n || p,
                nitroIconType: "tooltip",
                nitroIconSize: "xs",
                discountOfferAmount: x
            }), n || p ? null : (0, r.jsx)(l.A, {
                product: o
            })]
        }), t.length > 1 && t[1].currency === c.Yr.DISCORD_ORB && (0, r.jsx)(s.x, {
            priceAmount: t[1].amount,
            priceCurrency: t[1].currency,
            className: h || !m ? d.r9 : void 0
        })]
    })
}