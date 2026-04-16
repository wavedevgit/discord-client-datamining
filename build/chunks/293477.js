/** chunk id: 293477 params = (module,exports,require) **/
n.d(t, {
    B: () => m
});
var a = n(627968),
    r = n(397927),
    i = n(501664),
    s = n(882342),
    l = n(219103),
    o = n(818348),
    c = n(985018),
    d = n(752274);

function u(e) {
    let {
        orbPrice: t,
        isProductDisabled: n,
        hasSufficientOrbs: i
    } = e, s = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU), o = n || !i;
    return (0, a.jsxs)("div", {
        className: d.eg,
        children: [(0, a.jsx)("div", {
            className: d.zR,
            children: (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                className: o ? d.r9 : void 0,
                children: s
            })
        }), (0, a.jsx)(l.x, {
            priceAmount: t.amount,
            priceCurrency: t.currency,
            className: o ? d.r9 : void 0
        })]
    })
}

function m(e) {
    let {
        prices: t,
        isPremiumUser: n,
        discount: r,
        product: c,
        hasSufficientOrbs: m,
        onTrackClick: p,
        isProductDisabled: _,
        discountOfferAmount: h
    } = e, x = null != h;
    return 0 === t.length ? null : t[0].currency === o.Yr.DISCORD_ORB ? (0, a.jsx)(u, {
        orbPrice: t[0],
        isProductDisabled: _,
        hasSufficientOrbs: m
    }) : (0, a.jsxs)("div", {
        className: d.eg,
        children: [(0, a.jsxs)("div", {
            className: d.pw,
            children: [(0, a.jsx)(i.A, {
                product: c,
                discount: r,
                isPremiumUser: n,
                hideStrikethroughPrice: !n || x,
                nitroIconType: "tooltip",
                nitroIconSize: "xs",
                discountOfferAmount: h
            }), n || x ? null : (0, a.jsx)(s.A, {
                product: c,
                onTrackClick: p
            })]
        }), t.length > 1 && t[1].currency === o.Yr.DISCORD_ORB && (0, a.jsx)(l.x, {
            priceAmount: t[1].amount,
            priceCurrency: t[1].currency,
            className: _ || !m ? d.r9 : void 0
        })]
    })
}