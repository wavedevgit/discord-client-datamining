/** Chunk was on web.js **/
/** chunk id: 881677, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(417597),
    o = n(459793),
    s = n(590180),
    l = n(937008),
    c = n(156312),
    u = n(166532),
    d = n(49420),
    f = n(534479),
    p = n(652215);

function _(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        blockedPayments: _,
        hasFetchedSkus: h,
        paymentSources: m,
        hasFetchedPaymentSources: g,
        application: E,
        skusById: y,
        selectedSkuId: b
    } = (0, c.P5)(), {
        isGift: O
    } = (0, l.Pv)(), [v, A] = i.useState(!0), [I, S] = (0, a.yK)([s.A], () => [s.A.isFetchingCategories, s.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        h && g && e && A(I)
    }, [h, g, E, I]), i.useEffect(() => {
        if (v || _ || null == b) return;
        let e = y[b];
        O && ((null == e ? void 0 : e.productLine) === p.EZt.COLLECTIBLES || (null == e ? void 0 : e.productLine) === p.EZt.APPLICATION || (null == e ? void 0 : e.productLine) === p.EZt.SOCIAL_LAYER_GAME_ITEM) ? t(u.pn.GIFT_CUSTOMIZATION) : 0 === Object.keys(m).length ? t(u.pn.ADD_PAYMENT_STEPS) : t(u.pn.REVIEW)
    }, [v, _, t, m, O, y, b]), v) ? (0, r.jsx)(f.A, {}) : _ ? (0, r.jsx)(o.oO, {
        onClose: n
    }) : null != S ? (0, r.jsx)(d.A, {
        onClose: n
    }) : null
}