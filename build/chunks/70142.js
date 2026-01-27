/** Chunk was on web.js **/
/** chunk id: 70142, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.d(t, {
    A: () => I
}), n(65821);
var a, o = n(311907),
    s = n(562465),
    l = n(73153),
    c = n(723702),
    u = n(652215);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let f = null,
    p = null,
    _ = null;

function h(e) {
    let {
        client: t
    } = e;
    f = t
}

function m(e) {
    let {
        paypalClient: t
    } = e;
    p = t
}

function g(e) {
    let {
        venmoClient: t
    } = e;
    _ = t
}

function E(e) {
    let {
        paymentSourceType: t,
        state: n,
        path: i,
        query: a
    } = e;
    if (t !== u.hes.PAYPAL || n !== r) return;
    let o = window.popupBridge.onComplete;
    "function" == typeof o && o(null, {
        path: i,
        queryItems: a
    })
}

function y(e) {
    let {
        paymentSourceType: t,
        state: n
    } = e;
    t === u.hes.PAYPAL && (r = n)
}

function b() {
    p = null
}

function O() {
    _ = null
}(0, c.isDesktop)() && (window.popupBridge = {
    getReturnUrlPrefix: () => {
        if (null == r) throw Error("popupBridgeState is unset");
        return (0, s.TP)() + u.Rsh.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(u.kM_.BRAINTREE, r)
    },
    open: e => {
        i = e, window.open(e), A.emitChange()
    }
});
class v extends(a = o.Ay.Store) {
    getClient() {
        return f
    }
    getPayPalClient() {
        return p
    }
    getVenmoClient() {
        return _
    }
    getLastURL() {
        return i
    }
}
d(v, "displayName", "BraintreeStore");
let A = new v(l.h, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: h,
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: m,
        BILLING_POPUP_BRIDGE_CALLBACK: E,
        BILLING_POPUP_BRIDGE_STATE_UPDATE: y,
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: b,
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: g,
        BRAINTREE_TEARDOWN_VENMO_CLIENT: O
    }),
    I = A