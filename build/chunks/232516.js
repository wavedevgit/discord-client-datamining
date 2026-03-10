/** chunk id: 232516 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968);
i(64700);
var r = i(937008),
    s = i(310250),
    a = i(672525),
    l = i(802246),
    o = i(788868),
    d = i(751690);
let c = function(e) {
    let {
        onSelectSku: t,
        priceOptions: i,
        giftRecipient: c,
        onWishlistItemClick: u
    } = e, {
        claimableRewards: _
    } = (0, r.Pv)(), m = null != _ && _.length > 0, f = (0, s.T)("Select Gift Option");
    return (0, n.jsxs)("div", {
        className: d.H,
        children: [(0, n.jsxs)("div", {
            className: d.u,
            children: [(0, n.jsx)(a.D3, {
                onClick: () => t(o.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: m
            }), (0, n.jsx)(a.Ls, {
                onClick: () => t(o.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0
            })]
        }), f ? (0, n.jsx)(l.s, {
            giftRecipient: c,
            onWishlistItemClick: u
        }) : (0, n.jsx)(l.A, {
            giftRecipient: c,
            onWishlistItemClick: u
        })]
    })
}