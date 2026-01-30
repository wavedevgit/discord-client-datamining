/** chunk id: 490581, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = null,
    l = null;

function c(e) {
    let {
        client: t
    } = e;
    s = t
}

function u() {
    s = null
}

function d(e) {
    let {
        component: t
    } = e;
    l = t
}
class f extends(r = i.Ay.Store) {
    get client() {
        return s
    }
    get cashAppPayComponent() {
        return l
    }
}
o(f, "displayName", "AdyenStore");
let p = new f(a.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: c,
    ADYEN_TEARDOWN_CLIENT: u,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d
})