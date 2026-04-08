/** chunk id: 293477 params = (module,exports,require) **/
a.d(t, {
    B: () => m
});
var n = a(627968),
    r = a(397927),
    i = a(501664),
    s = a(882342),
    l = a(219103),
    o = a(818348),
    c = a(985018),
    d = a(937755);

function u(e) {
    let {
        orbPrice: t,
        isProductDisabled: a,
        hasSufficientOrbs: i
    } = e, s = a ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU), o = a || !i;
    return (0, n.jsxs)("div", {
        className: d.eg,
        children: [(0, n.jsx)("div", {
            className: d.zR,
            children: (0, n.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: o ? d.r9 : void 0,
                children: s
            })
        }), (0, n.jsx)(l.x, {
            priceAmount: t.amount,
            priceCurrency: t.currency,
            className: o ? d.r9 : void 0
        })]
    })
}

function m(e) {
    let {
        prices: t,
        isPremiumUser: a,
        discount: r,
        product: c,
        hasSufficientOrbs: m,
        onTrackClick: p,
        isProductDisabled: _,
        discountOfferAmount: h
    } = e, x = null != h;
    return 0 === t.length ? null : t[0].currency === o.Yr.DISCORD_ORB ? (0, n.jsx)(u, {
        orbPrice: t[0],
        isProductDisabled: _,
        hasSufficientOrbs: m
    }) : (0, n.jsxs)("div", {
        className: d.eg,
        children: [(0, n.jsxs)("div", {
            className: d.pw,
            children: [(0, n.jsx)(i.A, {
                product: c,
                discount: r,
                isPremiumUser: a,
                hideStrikethroughPrice: !a || x,
                nitroIconType: "tooltip",
                nitroIconSize: "xs",
                discountOfferAmount: h
            }), a || x ? null : (0, n.jsx)(s.A, {
                product: c,
                onTrackClick: p
            })]
        }), t.length > 1 && t[1].currency === o.Yr.DISCORD_ORB && (0, n.jsx)(l.x, {
            priceAmount: t[1].amount,
            priceCurrency: t[1].currency,
            className: _ || !m ? d.r9 : void 0
        })]
    })
}