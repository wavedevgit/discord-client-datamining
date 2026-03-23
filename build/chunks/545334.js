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
        onTier0TrialPeriod: m,
        onTier2TrialPeriod: _,
        onNonTier2Subscriber: g,
        onTier2Subscriber: A,
        onCustomCriteria: x
    } = e, p = (0, r.V)(), h = (0, a.O)(), f = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()), T = l.Ay.getPremiumTypeFromSubscription(f);
    if (null != x) {
        let e = x();
        if (null != e) return e
    }
    return null != p && o.TP[p.trial_id].skus.includes(o.pe.TIER_0) ? c ?? t : null != p && o.TP[p.trial_id].skus.includes(o.pe.TIER_2) ? u ?? t : null != f && f.hasActiveTrial && T === o.PremiumTypes.TIER_0 ? m ?? t : null != f && f.hasActiveTrial && T === o.PremiumTypes.TIER_2 ? _ ?? t : null != h ? n ?? t : null == T ? d ?? t : T === o.PremiumTypes.TIER_0 || T === o.PremiumTypes.TIER_1 ? g ?? t : T === o.PremiumTypes.TIER_2 ? A ?? t : t
}