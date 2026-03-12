/** chunk id: 933392 params = (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073);
var i = n(311907),
    s = n(73153),
    l = n(380098);
let r = [];

function a(e) {
    let {
        payment: t
    } = e, n = l.A.createFromServer(t), i = r.findIndex(e => e.id === t.id); - 1 === i ? (r.push(n), r.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : r[i] = n, r = [...r]
}
class o extends i.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return r.find(t => t.id === e)
    }
    getPayments() {
        return r
    }
}
let d = new o(s.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
        let {
            payments: t
        } = e;
        for (let e of t) {
            let t = l.A.createFromServer(e),
                n = r.findIndex(t => t.id === e.id); - 1 !== n ? r[n] = t : r.push(t)
        }
        r.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), r = [...r]
    },
    PAYMENT_UPDATE: a,
    BILLING_PAYMENT_FETCH_SUCCESS: a,
    LOGOUT: function() {
        r = []
    }
})