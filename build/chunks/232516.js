/** chunk id: 232516 params = (module,exports,require) **/
t.d(i, {
    A: () => c
});
var n = t(627968);
t(64700);
var r = t(937008),
    s = t(310250),
    a = t(672525),
    l = t(802246),
    o = t(788868),
    d = t(751690);
let c = function(e) {
    let {
        onSelectSku: i,
        priceOptions: t,
        giftRecipient: c,
        onWishlistItemClick: _
    } = e, {
        claimableRewards: u
    } = (0, r.Pv)(), m = null != u && u.length > 0, p = (0, s.T)("Select Gift Option");
    return (0, n.jsxs)("div", {
        className: d.H,
        children: [(0, n.jsxs)("div", {
            className: d.u,
            children: [(0, n.jsx)(a.D3, {
                onClick: () => i(o.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: m
            }), (0, n.jsx)(a.Ls, {
                onClick: () => i(o.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0
            })]
        }), p ? (0, n.jsx)(l.s, {
            giftRecipient: c,
            onWishlistItemClick: _
        }) : (0, n.jsx)(l.A, {
            giftRecipient: c,
            onWishlistItemClick: _
        })]
    })
}