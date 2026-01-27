/** Chunk was on 60667 **/
/** chunk id: 545334, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => c
});
var r = n(311907),
    i = n(166403),
    l = n(927578),
    s = n(422936),
    a = n(234419),
    o = n(788868);

function c(e) {
    let {
        defaultResponse: t,
        onDiscountOffer: n,
        onNonSubscriber: c,
        onTier0TrialOffer: d,
        onTier2TrialOffer: u,
        onTier0TrialPeriod: _,
        onTier2TrialPeriod: p,
        onNonTier2Subscriber: m,
        onTier2Subscriber: g,
        onCustomCriteria: A
    } = e, f = (0, a.V)(), h = (0, s.O)(), b = (0, r.bG)([i.A], () => i.A.getPremiumTypeSubscription()), E = l.Ay.getPremiumTypeFromSubscription(b);
    if (null != A) {
        let e = A();
        if (null != e) return e
    }
    return null != f && o.TP[f.trial_id].skus.includes(o.pe.TIER_0) ? null != d ? d : t : null != f && o.TP[f.trial_id].skus.includes(o.pe.TIER_2) ? null != u ? u : t : null != b && b.hasActiveTrial && E === o.PremiumTypes.TIER_0 ? null != _ ? _ : t : null != b && b.hasActiveTrial && E === o.PremiumTypes.TIER_2 ? null != p ? p : t : null != h ? null != n ? n : t : null == E ? null != c ? c : t : E === o.PremiumTypes.TIER_0 || E === o.PremiumTypes.TIER_1 ? null != m ? m : t : E === o.PremiumTypes.TIER_2 && null != g ? g : t
}