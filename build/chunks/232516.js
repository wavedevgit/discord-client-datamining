/** Chunk was on 91075 **/
/** chunk id: 232516, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => d
});
var r = i(627968);
i(64700);
var n = i(937008),
    a = i(672525),
    l = i(802246),
    s = i(788868),
    o = i(751690);
let d = function(e) {
    let {
        onSelectSku: t,
        priceOptions: i,
        giftRecipient: d,
        onWishlistItemClick: c
    } = e, {
        claimableRewards: u
    } = (0, n.Pv)(), m = null != u && u.length > 0;
    return (0, r.jsxs)("div", {
        className: o.H,
        children: [(0, r.jsxs)("div", {
            className: o.u,
            children: [(0, r.jsx)(a.D3, {
                onClick: () => t(s.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: m
            }), (0, r.jsx)(a.Ls, {
                onClick: () => t(s.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0
            })]
        }), (0, r.jsx)(l.A, {
            giftRecipient: d,
            onWishlistItemClick: c
        })]
    })
}