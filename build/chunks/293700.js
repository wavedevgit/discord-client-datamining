/** chunk id: 293700, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g,
    C: () => c
});
var r, i = n(311907),
    a = n(73153),
    o = n(136857),
    s = n(142120);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var c = function(e) {
    return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.PENDING = 1] = "PENDING", e[e.SUCCESS = 2] = "SUCCESS", e[e.ERROR = 3] = "ERROR", e
}({});
let u = 0,
    d = null,
    f = null;

function p(e) {
    let {
        error: t
    } = e, n = t instanceof o.Ay ? t : new o.Ay(t);
    s.A.isConnected() && n.code === o.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (u = 1)
}

function _(e) {
    u = 2, d = e.purchaseTokenHash, f = e.expiresAt
}

function h() {
    u = 0, d = null, f = null
}
class m extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A)
    }
    get purchaseTokenAuthState() {
        return u
    }
    get purchaseTokenHash() {
        return d
    }
    get expiresAt() {
        return f
    }
}
l(m, "displayName", "PurchaseTokenAuthStore");
let g = new m(a.h, {
    SKU_PURCHASE_FAIL: p,
    PREMIUM_PAYMENT_SUBSCRIBE_FAIL: p,
    USER_PAYMENT_CLIENT_ADD: _,
    BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: h,
    BILLING_SUBSCRIPTION_UPDATE_START: h,
    PAYMENT_AUTHENTICATION_CLEAR_ERROR: h,
    PREMIUM_PAYMENT_ERROR_CLEAR: h,
    PREMIUM_PAYMENT_MODAL_CLOSE: h,
    PREMIUM_PAYMENT_MODAL_OPEN: h,
    PREMIUM_PAYMENT_SUBSCRIBE_START: h,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: h,
    PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
    SKU_PURCHASE_MODAL_CLOSE: h,
    SKU_PURCHASE_MODAL_OPEN: h,
    SKU_PURCHASE_START: h,
    SKU_PURCHASE_SUCCESS: h
})