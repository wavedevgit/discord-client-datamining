/** Chunk was on 91075 **/
/** chunk id: 232516, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var r = i(937008),
    a = i(672525),
    l = i(802246),
    s = i(788868),
    o = i(751690);
let d = function(e) {
    let {
        onSelectSku: t,
        priceOptions: i,
        giftRecipient: d,
        onWishlistItemClick: u
    } = e, {
        claimableRewards: c
    } = (0, r.Pv)(), m = null != c && c.length > 0;
    return (0, n.jsxs)("div", {
        className: o.H,
        children: [(0, n.jsxs)("div", {
            className: o.u,
            children: [(0, n.jsx)(a.D3, {
                onClick: () => t(s.pe.TIER_2),
                isGift: !0,
                priceOptions: i,
                showPromotionalGiftBanner: m
            }), (0, n.jsx)(a.Ls, {
                onClick: () => t(s.pe.TIER_0),
                isGift: !0,
                priceOptions: i,
                removeTopMargin: !0
            })]
        }), (0, n.jsx)(l.A, {
            giftRecipient: d,
            onWishlistItemClick: u
        })]
    })
}