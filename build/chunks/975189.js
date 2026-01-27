/** Chunk was on web.js **/
/** chunk id: 975189, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    v: () => T
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(417597),
    l = n(73153),
    c = n(775602),
    u = n(590180),
    d = n(306710),
    f = n(524246),
    p = n(14368),
    _ = n(61750),
    h = n(937008),
    m = n(156312),
    g = n(972607),
    E = n(482132),
    y = n(921925),
    b = n(758836),
    O = n(788868),
    v = n(985018);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}

function S(e) {
    let {
        handleClose: t,
        analyticsLocations: n
    } = e, {
        skusById: a,
        selectedSkuId: l,
        application: c,
        paymentError: d,
        purchaseError: f,
        purchasePreviewError: p,
        appliedUserDiscounts: h
    } = (0, m.P5)(), g = (0, s.bG)([u.A], () => u.A.getProduct(l)), O = i.useRef(!1);
    o()(null != l, "Expected selectedSkuId"), o()(null != c, "Expected application");
    let A = a[l];
    o()(null != A, "Expected sku");
    let I = null != d || null != f || null != p,
        S = h.length > 0 ? v.intl.formatToPlainString(v.t.VuV3Td, {
            discountOfferAmount: h[0].discount.amount
        }) : void 0;
    return (i.useEffect(() => {
        null == g || I || O.current || (O.current = !0, (0, _.A)({
            product: g,
            overrideTitle: S,
            analyticsLocations: n,
            onCloseCallback: t,
            purchaseType: b.gs.FIAT
        }))
    }, [g, n, t, I, S]), I) ? (0, r.jsx)(E.dZ, {
        children: (0, r.jsx)(y.A, {})
    }) : null
}

function T(e) {
    let {
        isGift: t,
        giftCode: n,
        selectedGiftStyle: a,
        hasSentMessage: o,
        giftRecipient: _,
        giftMessageError: E,
        isSendingMessage: y,
        giftingOrigin: b
    } = (0, h.Pv)(), v = (0, s.bG)([c.A], () => c.A.useReducedMotion), A = i.useRef(null), {
        selectedSkuId: T
    } = (0, m.P5)(), C = (0, s.bG)([u.A], () => u.A.getProduct(T)), {
        confettiColors: N
    } = (0, d.A)(null == C ? void 0 : C.styles);
    return i.useEffect(() => {
        t && null != _ && null != T && (b === O.vQ.USER_PROFILE_WISHLIST || b === O.vQ.DM_CHANNEL_WISHLIST) && l.h.dispatch({
            type: "WISHLIST_GIFT_SENT",
            skuId: T,
            recipientId: _.id
        })
    }, [t, _, T, b]), t ? (0, r.jsxs)("div", {
        ref: A,
        children: [(0, r.jsx)(g.A, {
            giftCode: n,
            onClose: e.handleClose,
            selectedGiftStyle: a,
            hasSentMessage: o,
            giftRecipient: _,
            giftMessageError: E,
            isSendingMessage: y
        }), !e.hideConfetti && !v && (0, r.jsx)(f.A, {
            confettiTarget: A.current,
            confettiCanvas: e.confettiCanvas,
            sprites: (0, p.rA)(null == C ? void 0 : C.categorySkuId),
            colors: null == N ? void 0 : N.map(e => e.toHexString())
        })]
    }) : (0, r.jsx)(S, I({}, e))
}