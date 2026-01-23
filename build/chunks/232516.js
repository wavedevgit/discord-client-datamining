/** Chunk was on 55926 **/
/** chunk id: 232516, original params: i,e,t (module,exports,require) **/
t.d(e, {
    A: () => c
});
var n = t(627968);
t(64700);
var s = t(937008),
    l = t(672525),
    r = t(802246),
    a = t(788868),
    o = t(751690);
let c = function(i) {
    let {
        onSelectSku: e,
        priceOptions: t,
        giftRecipient: c,
        onWishlistItemClick: d
    } = i, {
        claimableRewards: u
    } = (0, s.Pv)(), m = null != u && u.length > 0;
    return (0, n.jsxs)("div", {
        className: o.H,
        children: [(0, n.jsxs)("div", {
            className: o.u,
            children: [(0, n.jsx)(l.D3, {
                onClick: () => e(a.pe.TIER_2),
                isGift: !0,
                priceOptions: t,
                showPromotionalGiftBanner: m
            }), (0, n.jsx)(l.Ls, {
                onClick: () => e(a.pe.TIER_0),
                isGift: !0,
                priceOptions: t,
                removeTopMargin: !0
            })]
        }), (0, n.jsx)(r.A, {
            giftRecipient: c,
            onWishlistItemClick: d
        })]
    })
}