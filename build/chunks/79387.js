/** chunk id: 79387, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.d(t, {
    A: () => Y,
    B: () => p
}), n(896048);
var a, o = n(311907),
    s = n(73153),
    l = n(652215);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let p = "no_payment_source",
    _ = null,
    h = null,
    m = null,
    g = null,
    E = null,
    y = {},
    b = null,
    O = !1,
    v = null,
    A = !1,
    I = !1,
    S = !1,
    T = !1,
    C = null,
    N = new Set;

function w(e) {
    null != r && null != b ? r(b) : null != i && i(e), r = null, i = null
}

function R(e) {
    w(), _ = e.skuId, m = e.applicationId, I = e.isIAP, g = e.analyticsLocation, C = e.context, T = e.isGift, S = !0, A = !1, r = e.resolve, i = e.reject, v = null, b = null, E = e.promotionId
}

function P(e) {
    let {
        error: t
    } = e;
    S = !1, C = null, w(t)
}

function D(e) {
    let {
        skuId: t
    } = e;
    N.add(t)
}

function L(e) {
    let {
        skuId: t,
        paymentSourceId: n,
        price: r
    } = e;
    y = f(u({}, y), {
        [t]: f(u({}, y[t]), {
            [null != n ? n : p]: r
        })
    }), N.delete(t)
}

function x(e) {
    let {
        skuId: t
    } = e;
    N.delete(t)
}

function M() {
    O = !0
}

function j(e) {
    let {
        entitlements: t,
        giftCode: n
    } = e;
    O = !1, b = t, h = n
}

function k(e) {
    let {
        giftCode: t
    } = e;
    if (0 !== t.uses || t.sku_id !== _) return !1;
    h = t.code
}

function U(e) {
    let {
        error: t
    } = e;
    O = !1, v = t
}

function G() {
    A = !0
}

function V() {
    v = null
}

function F(e) {
    T = e.isGift
}

function B(e) {
    let {
        locked: t
    } = e;
    if (!t || null == C) return !1;
    S = !1, C = null, w()
}
class H extends(a = o.Ay.Store) {
    getPricesForSku(e) {
        return y[e]
    }
    isOpen() {
        let e = __OVERLAY__ ? l.BRT.OVERLAY : l.BRT.APP;
        return C === e && S
    }
    get isPurchasingSKU() {
        return O
    }
    get forceConfirmationStepOnMount() {
        return A
    }
    get error() {
        return v
    }
    get skuId() {
        return _
    }
    get applicationId() {
        return m
    }
    get analyticsLocation() {
        return g
    }
    get promotionId() {
        return E
    }
    get isIAP() {
        return I
    }
    get giftCode() {
        return h
    }
    get isGift() {
        return T
    }
    isFetchingSKU(e) {
        return N.has(e)
    }
}
c(H, "displayName", "SKUPaymentModalStore");
let Y = new H(s.h, {
    SKU_PURCHASE_MODAL_OPEN: R,
    SKU_PURCHASE_MODAL_CLOSE: P,
    SKU_PURCHASE_PREVIEW_FETCH: D,
    SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: L,
    SKU_PURCHASE_PREVIEW_FETCH_FAILURE: x,
    SKU_PURCHASE_START: M,
    SKU_PURCHASE_SUCCESS: j,
    SKU_PURCHASE_FAIL: U,
    SKU_PURCHASE_SHOW_CONFIRMATION_STEP: G,
    SKU_PURCHASE_CLEAR_ERROR: V,
    SKU_PURCHASE_UPDATE_IS_GIFT: F,
    OVERLAY_SET_INPUT_LOCKED: B,
    GIFT_CODE_CREATE: k
})