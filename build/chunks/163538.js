/** chunk id: 163538, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => s
});
var i = t(311907),
    r = t(295405),
    l = t(166403);

function s() {
    let n = (0, i.bG)([l.A], () => l.A.getPremiumTypeSubscription());
    return (0, i.bG)([r.A], () => n?.paymentSourceId != null ? r.A.getPaymentSource(n.paymentSourceId)?.country : null)
}