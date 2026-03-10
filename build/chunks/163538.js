/** chunk id: 163538 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(311907),
    l = n(295405),
    r = n(166403);

function a() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription());
    return (0, i.bG)([l.A], () => e?.paymentSourceId != null ? l.A.getPaymentSource(e.paymentSourceId)?.country : null)
}