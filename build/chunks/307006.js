/** chunk id: 307006, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r, i = n(311907),
    a = n(73153),
    o = n(160745);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = null,
    c = !1,
    u = null;

function d(e) {
    let {
        connected: t
    } = e;
    c = t
}

function f() {
    c = !1
}

function p() {
    c = !1
}

function _(e) {
    let {
        products: t,
        storeFront: n
    } = e;
    l = t, u = n
}

function h(e) {
    let {
        storeFront: t
    } = e;
    u = t
}
class m extends(r = i.Ay.Store) {
    isGenericIapConnected() {
        return c
    }
    hasGenericSubscription() {
        return null != l && l.some(e => e.identifier === o.Yq.GENERIC_SUBSCRIPTION)
    }
    getProducts() {
        return l
    }
    getStoreFront() {
        return u
    }
}
s(m, "displayName", "GenericIAPStore");
let g = new m(a.h, {
    IAP_LOAD_GENERIC_PRODUCTS: _,
    GENERIC_IAP_INIT_CONNECTION: d,
    GENERIC_IAP_INIT_CONNECTION_FAILED: f,
    GENERIC_IAP_END_CONNECTION: p,
    GENERIC_IAP_SET_STORE_FRONT: h
})