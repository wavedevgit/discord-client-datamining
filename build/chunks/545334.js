/** Chunk was on web.js **/
/** chunk id: 545334, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => c
});
var r = n(311907),
    i = n(166403),
    a = n(927578),
    s = n(422936),
    o = n(234419),
    l = n(788868);

function c(e) {
    let {
        defaultResponse: t,
        onDiscountOffer: n,
        onNonSubscriber: c,
        onTier0TrialOffer: u,
        onTier2TrialOffer: d,
        onTier0TrialPeriod: f,
        onTier2TrialPeriod: p,
        onNonTier2Subscriber: _,
        onTier2Subscriber: h,
        onCustomCriteria: m
    } = e, g = (0, o.V)(), E = (0, s.O)(), y = (0, r.bG)([i.A], () => i.A.getPremiumTypeSubscription()), b = a.Ay.getPremiumTypeFromSubscription(y);
    if (null != m) {
        let e = m();
        if (null != e) return e
    }
    return null != g && l.TP[g.trial_id].skus.includes(l.pe.TIER_0) ? null != u ? u : t : null != g && l.TP[g.trial_id].skus.includes(l.pe.TIER_2) ? null != d ? d : t : null != y && y.hasActiveTrial && b === l.PremiumTypes.TIER_0 ? null != f ? f : t : null != y && y.hasActiveTrial && b === l.PremiumTypes.TIER_2 ? null != p ? p : t : null != E ? null != n ? n : t : null == b ? null != c ? c : t : b === l.PremiumTypes.TIER_0 || b === l.PremiumTypes.TIER_1 ? null != _ ? _ : t : b === l.PremiumTypes.TIER_2 && null != h ? h : t
}