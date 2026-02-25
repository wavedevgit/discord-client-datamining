/** chunk id: 232516, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(627968);
i(64700);
var s = i(937008),
    l = i(310250),
    r = i(672525),
    o = i(802246),
    a = i(788868),
    d = i(329632);
let u = function(e) {
    let {
        onSelectSku: t,
        priceOptions: i,
        giftRecipient: u,
        onWishlistItemClick: c
    } = e, {
        claimableRewards: m
    } = (0, s.Pv)(), _ = null != m && m.length > 0, f = (0, l.T)("Select Gift Option");
    return (0, n.jsxs)("div", {
        className: d.H,
        children: [(0, n.jsxs)("div", {
            className: d.u,
            children: [(0, n.jsx)(r.D3, {
                onClick: () => t(a.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: _
            }), (0, n.jsx)(r.Ls, {
                onClick: () => t(a.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0
            })]
        }), f ? (0, n.jsx)(o.s, {
            giftRecipient: u,
            onWishlistItemClick: c
        }) : (0, n.jsx)(o.A, {
            giftRecipient: u,
            onWishlistItemClick: c
        })]
    })
}