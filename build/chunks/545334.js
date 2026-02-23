/** chunk id: 545334, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => c
});
var i = n(311907),
    s = n(166403),
    a = n(927578),
    r = n(422936),
    l = n(234419),
    o = n(788868);

function c(e) {
    let {
        defaultResponse: t,
        onDiscountOffer: n,
        onNonSubscriber: c,
        onTier0TrialOffer: d,
        onTier2TrialOffer: u,
        onTier0TrialPeriod: _,
        onTier2TrialPeriod: m,
        onNonTier2Subscriber: A,
        onTier2Subscriber: g,
        onCustomCriteria: h
    } = e, x = (0, l.V)(), p = (0, r.O)(), E = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()), C = a.Ay.getPremiumTypeFromSubscription(E);
    if (null != h) {
        let e = h();
        if (null != e) return e
    }
    return null != x && o.TP[x.trial_id].skus.includes(o.pe.TIER_0) ? d ?? t : null != x && o.TP[x.trial_id].skus.includes(o.pe.TIER_2) ? u ?? t : null != E && E.hasActiveTrial && C === o.PremiumTypes.TIER_0 ? _ ?? t : null != E && E.hasActiveTrial && C === o.PremiumTypes.TIER_2 ? m ?? t : null != p ? n ?? t : null == C ? c ?? t : C === o.PremiumTypes.TIER_0 || C === o.PremiumTypes.TIER_1 ? A ?? t : C === o.PremiumTypes.TIER_2 ? g ?? t : t
}