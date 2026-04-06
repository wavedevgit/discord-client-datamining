/** chunk id: 163538 params = (module,exports,require) **/
n.d(e, {
    A: () => a
});
var i = n(311907),
    r = n(295405),
    l = n(166403);

function a() {
    let t = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription());
    return (0, i.bG)([r.A], () => t?.paymentSourceId != null ? r.A.getPaymentSource(t.paymentSourceId)?.country : null)
}