/** Chunk was on web.js **/
/** chunk id: 462309, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => O
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(397927),
    l = n(242874),
    c = n(75825),
    u = n(499369),
    d = n(490744),
    f = n(45938),
    p = n(937008),
    _ = n(156312),
    h = n(166532),
    m = n(652215),
    g = n(788868),
    E = n(818348),
    y = n(629865);

function b(e, t) {
    return e in t
}

function O(e) {
    let {
        renderHeader: t,
        handleClose: n
    } = e, {
        selectedSkuId: a,
        step: O,
        selectedPlan: v,
        purchaseState: A,
        purchaseType: I,
        selectedSku: S,
        enablePremiumBrandRefresh: T,
        isDisplayingWowMomentConfirmation: C,
        isPremiumGroupPurchase: N,
        isEligibleForTrial: w,
        isEligibleForDiscount: R
    } = (0, _.P5)(), {
        isGift: P,
        selectedGiftStyle: D,
        giftRecipient: L
    } = (0, p.Pv)(), x = (null == S ? void 0 : S.productLine) === m.EZt.COLLECTIBLES, M = (null == S ? void 0 : S.productLine) === m.EZt.SOCIAL_LAYER_GAME_ITEM, j = P && (0, f.Ik)(L) && O === h.pn.CONFIRM && null != D && !x && !M, k = null != t && null != O, U = [h.pn.SKU_SELECT, h.pn.SELECT_FREE_SKU], G = null != O && !U.includes(O) && null != a;
    return i.useMemo(() => {
        if (null == O) return;
        let e = null;
        return j ? e = (0, r.jsxs)("div", {
            className: y.kL,
            children: [(0, r.jsx)(c.A, {
                defaultAnimationState: l.oA.LOOP,
                giftStyle: D,
                className: y.qq
            }), (0, r.jsx)(s.s_y, {
                onClick: n,
                className: y.b,
                "data-migration-pending": !0
            })]
        }) : k ? e = t(null != v ? v : null, n, O) : I === E.VV.ONE_TIME ? e = (0, r.jsx)(d.fs, {
            step: O,
            onClose: n
        }) : G && (o()(b(a, g.WN), "invalid sku id: ".concat(a)), e = (0, r.jsx)(u.A, {
            currentStep: null != O ? O : void 0,
            purchaseState: A,
            premiumType: g.WN[a],
            onClose: n,
            showTrialBadge: w,
            showDiscountBadge: R,
            isGift: P,
            giftRecipient: L,
            isEligibleForTrial: w,
            enablePremiumBrandRefresh: T,
            isDisplayingWowMomentConfirmation: C,
            isPremiumGroupPurchase: N
        })), e
    }, [D, n, A, t, v, a, O, w, R, j, G, k, I, P, L, T, C, N])
}