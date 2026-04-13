/** chunk id: 869968 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(311907),
    r = n(73153);
let s = !1,
    a = !1,
    l = !1;
class o extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return l
    }
    shouldFetchCheckoutRecovery() {
        return !s && !a
    }
}
let c = new o(r.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function(e) {
        a = !0, s = !1, l = e.isTargeted
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function() {
        a = !0, s = !1
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function() {
        s = !0
    },
    LOGOUT: function() {
        s = !1, a = !1, l = !1
    }
})