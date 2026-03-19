/** chunk id: 869968 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(311907),
    a = n(73153);
let l = !1,
    r = !1,
    s = !1;
class o extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return s
    }
    shouldFetchCheckoutRecovery() {
        return !l && !r
    }
}
let c = new o(a.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function(e) {
        r = !0, l = !1, s = e.isTargeted
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function() {
        r = !0, l = !1
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function() {
        l = !0
    },
    LOGOUT: function() {
        l = !1, r = !1, s = !1
    }
})