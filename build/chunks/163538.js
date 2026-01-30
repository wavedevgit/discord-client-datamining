/** chunk id: 163538, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => a
});
var i = t(311907),
    l = t(295405),
    r = t(166403);

function a() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription());
    return (0, i.bG)([l.A], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? null == (n = l.A.getPaymentSource(e.paymentSourceId)) ? void 0 : n.country : null
    })
}