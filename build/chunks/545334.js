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
        onTier2TrialPeriod: m,
        onNonTier2Subscriber: g,
        onTier2Subscriber: A,
        onCustomCriteria: h
    } = e, x = (0, r.V)(), p = (0, a.O)(), T = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()), E = l.Ay.getPremiumTypeFromSubscription(T);
    if (null != h) {
        let e = h();
        if (null != e) return e
    }
    return null != x && o.TP[x.trial_id].skus.includes(o.pe.TIER_0) ? c ?? t : null != x && o.TP[x.trial_id].skus.includes(o.pe.TIER_2) ? u ?? t : null != T && T.hasActiveTrial && E === o.PremiumTypes.TIER_0 ? _ ?? t : null != T && T.hasActiveTrial && E === o.PremiumTypes.TIER_2 ? m ?? t : null != p ? n ?? t : null == E ? d ?? t : E === o.PremiumTypes.TIER_0 || E === o.PremiumTypes.TIER_1 ? g ?? t : E === o.PremiumTypes.TIER_2 ? A ?? t : t
}