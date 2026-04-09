/** chunk id: 835572 params = (module,exports,require) **/
i.d(t, {
    A: () => E
});
var r = i(627968),
    l = i(64700),
    n = i(688810),
    s = i(713517),
    u = i(532794),
    o = i(976860),
    a = i(607123),
    d = i(594832),
    c = i(662349),
    I = i(474090),
    h = i(657331),
    g = i(798048),
    S = i(652215),
    m = i(788868),
    A = i(538189);
let f = new Set([g.Y.MEDIUM, g.Y.LARGE, g.Y.FLEX]);

function E(e) {
    let {
        item: t,
        profileOwner: i,
        wishlistId: E,
        isOwner: C,
        cardSize: L = g.Y.MEDIUM,
        showOverlayButton: p = !0,
        source: _ = d.uS.WISHLIST,
        giftingOrigin: v = m.vQ.USER_PROFILE_WISHLIST,
        onWishlistItemClick: M,
        analyticsLocations: x,
        isDragging: O = !1,
        dragHandle: R
    } = e, {
        analyticsLocations: k
    } = (0, n.Ay)(...x ?? []), U = l.useRef(null), {
        isHoveringOrFocusing: y
    } = (0, s.A)(U), P = C && (0, I.ki)(i, m.WN[t.skuId]), {
        label: T,
        icon: w
    } = (0, c.h)({
        sku: t.sku,
        wishlistOwner: i,
        isOwned: P,
        location: "PremiumWishlistItemCard"
    }), j = l.useCallback(() => {
        C ? ((0, h.closeUserProfileModal)(), (0, o.pX)(S.BVt.APPLICATION_STORE)) : (M?.(), (0, u.A)({
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: v,
            subscriptionTier: t.skuId,
            analyticsLocations: k
        }))
    }, [C, i, v, t.skuId, k, M]), b = y && !O && f.has(L), N = l.useCallback(() => (0, r.jsx)("div", {
        className: A.MO,
        children: (0, r.jsx)(a.JY, {
            eventTargetRef: U,
            assetClassName: b ? A.iR : void 0
        })
    }), [b]);
    return (0, r.jsx)(g.A, {
        item: t,
        wishlistId: E,
        isOwner: C,
        cardSize: L,
        showOverlayButton: p,
        cardRef: U,
        accessibleLabel: t.sku.name,
        onCardClick: j,
        buttonCTALabel: T,
        buttonIcon: w,
        isOwned: P,
        renderItemPreview: N,
        dragHandle: R,
        giftingOrigin: v,
        source: _
    })
}