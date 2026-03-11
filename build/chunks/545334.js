/** chunk id: 545334 params = (module,exports,require) **/
n.d(t, {
    G: () => d
});
var i = n(311907),
    s = n(166403),
    l = n(927578),
    a = n(422936),
    r = n(234419),
    o = n(788868);

function d(e) {
    let {
        defaultResponse: t,
        onDiscountOffer: n,
        onNonSubscriber: d,
        onTier0TrialOffer: c,
        onTier2TrialOffer: u,
        onTier0TrialPeriod: _,
        onTier2TrialPeriod: g,
        onNonTier2Subscriber: A,
        onTier2Subscriber: m,
        onCustomCriteria: h
    } = e, p = (0, r.V)(), x = (0, a.O)(), E = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()), T = l.Ay.getPremiumTypeFromSubscription(E);
    if (null != h) {
        let e = h();
        if (null != e) return e
    }
    return null != p && o.TP[p.trial_id].skus.includes(o.pe.TIER_0) ? c ?? t : null != p && o.TP[p.trial_id].skus.includes(o.pe.TIER_2) ? u ?? t : null != E && E.hasActiveTrial && T === o.PremiumTypes.TIER_0 ? _ ?? t : null != E && E.hasActiveTrial && T === o.PremiumTypes.TIER_2 ? g ?? t : null != x ? n ?? t : null == T ? d ?? t : T === o.PremiumTypes.TIER_0 || T === o.PremiumTypes.TIER_1 ? A ?? t : T === o.PremiumTypes.TIER_2 ? m ?? t : t
}