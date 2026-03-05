/** chunk id: 293477 params = (module,exports,require) **/
a.d(t, {
    B: () => m
});
var n = a(627968),
    r = a(397927),
    i = a(501664),
    s = a(882342),
    l = a(219103),
    c = a(818348),
    o = a(985018),
    d = a(746603);

function u(e) {
    let {
        orbPrice: t,
        isProductDisabled: a,
        hasSufficientOrbs: i
    } = e, s = a ? o.intl.string(o.t.wu4gyV) : o.intl.string(o.t.eFNRzU), c = a || !i;
    return (0, n.jsxs)("div", {
        className: d.eg,
        children: [(0, n.jsx)("div", {
            className: d.zR,
            children: (0, n.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: c ? d.r9 : void 0,
                children: s
            })
        }), (0, n.jsx)(l.x, {
            priceAmount: t.amount,
            priceCurrency: t.currency,
            className: c ? d.r9 : void 0
        })]
    })
}

function m(e) {
    let {
        prices: t,
        isPremiumUser: a,
        discount: r,
        product: o,
        hasSufficientOrbs: m,
        isProductDisabled: p,
        discountOfferAmount: _
    } = e, h = null != _;
    return 0 === t.length ? null : t[0].currency === c.Yr.DISCORD_ORB ? (0, n.jsx)(u, {
        orbPrice: t[0],
        isProductDisabled: p,
        hasSufficientOrbs: m
    }) : (0, n.jsxs)("div", {
        className: d.eg,
        children: [(0, n.jsxs)("div", {
            className: d.pw,
            children: [(0, n.jsx)(i.A, {
                product: o,
                discount: r,
                isPremiumUser: a,
                hideStrikethroughPrice: !a || h,
                nitroIconType: "tooltip",
                nitroIconSize: "xs",
                discountOfferAmount: _
            }), a || h ? null : (0, n.jsx)(s.A, {
                product: o
            })]
        }), t.length > 1 && t[1].currency === c.Yr.DISCORD_ORB && (0, n.jsx)(l.x, {
            priceAmount: t[1].amount,
            priceCurrency: t[1].currency,
            className: p || !m ? d.r9 : void 0
        })]
    })
}