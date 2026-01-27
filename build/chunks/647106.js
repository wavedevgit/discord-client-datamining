/** Chunk was on web.js **/
/** chunk id: 647106, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048);
var r = n(439372),
    i = n(961350),
    a = n(287809),
    o = n(917136),
    s = n(976910),
    l = n(652215);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let u = !1;
class d extends r.A {
    handlePossibleCredentialFetch() {
        if (!(u || __OVERLAY__) && i.default.getLoginStatus() === l.aUe.NONE) {
            if (s.A.hasFetchedCredentials()) {
                u = !0;
                return
            }
            void 0 !== a.default.getCurrentUser() && (u = !0, (0, o.JQ)())
        }
    }
    handleLogout() {
        u = !1
    }
    constructor(...e) {
        super(...e), c(this, "actions", {
            POST_CONNECTION_OPEN: this.handlePossibleCredentialFetch,
            LOGIN_RESET: this.handleLogout,
            LOGOUT: this.handleLogout
        }), c(this, "stores", new Map().set(i.default, this.handlePossibleCredentialFetch).set(a.default, this.handlePossibleCredentialFetch).set(s.A, this.handlePossibleCredentialFetch))
    }
}
let f = new d