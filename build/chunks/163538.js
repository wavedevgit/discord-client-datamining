/** chunk id: 163538 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(311907),
    r = n(295405),
    l = n(166403);

function a() {
    let e = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription());
    return (0, i.bG)([r.A], () => e?.paymentSourceId != null ? r.A.getPaymentSource(e.paymentSourceId)?.country : null)
}