/** chunk id: 232516 params = (module,exports,require) **/
t.d(i, {
    A: () => c
});
var r = t(627968);
t(64700);
var n = t(937008),
    a = t(672525),
    s = t(802246),
    l = t(788868),
    o = t(595151);
let c = function(e) {
    let {
        onSelectSku: i,
        priceOptions: t,
        giftRecipient: c,
        onWishlistItemClick: d
    } = e, {
        claimableRewards: _
    } = (0, n.Pv)(), u = null != _ && _.length > 0;
    return (0, r.jsxs)("div", {
        className: o.H,
        children: [(0, r.jsxs)("div", {
            className: o.u,
            children: [(0, r.jsx)(a.D3, {
                onClick: () => i(l.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: u
            }), (0, r.jsx)(a.Ls, {
                onClick: () => i(l.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0
            })]
        }), (0, r.jsx)(s.s, {
            giftRecipient: c,
            onWishlistItemClick: d
        })]
    })
}