/** Chunk was on 93140 **/
/** chunk id: 626262, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(554146),
    o = n(617108),
    a = n(745299),
    s = n(816733),
    c = n(927578),
    u = n(160761),
    E = n(49999),
    d = n(652215),
    _ = n(788868);
let A = e => {
    let {
        dismissibleContent: t,
        noticeType: n
    } = e, A = i.useMemo(() => {
        switch (n) {
            case d.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                let e = s.A.getAlmostExpiringTrialOffers([_.pe.TIER_2]);
                return {
                    cooldownDurationMs: (0, c.e1)(e[0])
                };
            case d.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                let t = s.A.getAlmostExpiringDiscountOffers([_.pe.TIER_2]);
                return {
                    cooldownDurationMs: (0, c.e1)(t[0])
                };
            default:
                return {
                    cooldownDurationMs: 1 / 0
                }
        }
    }, [n]), [T, I] = (0, u.Bo)(t, A, E.m.NOTICE_BAR);
    if (null == T) return null;
    if (T === l.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === d.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(a.A, {
            dismissCurrentNotice: () => I(E.i.USER_DISMISS),
            subscriptionTier: _.pe.TIER_2
        });
        if (n === d.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(o.A, {
            dismissCurrentNotice: () => I(E.i.USER_DISMISS),
            subscriptionTier: _.pe.TIER_2
        })
    }
}