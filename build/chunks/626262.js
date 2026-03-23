/** chunk id: 626262 params = (module,exports,require) **/
"use strict";
n.d(e, {
    $: () => N
});
var i = n(627968),
    r = n(64700),
    s = n(989349),
    l = n.n(s),
    a = n(554146),
    o = n(916768),
    c = n(617108),
    u = n(745299),
    d = n(816733),
    E = n(927578),
    _ = n(160761),
    T = n(49999),
    A = n(652215),
    I = n(788868);
let N = t => {
    let {
        dismissibleContent: e,
        noticeType: n
    } = t, s = r.useMemo(() => {
        switch (n) {
            case A.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                let t = d.A.getAlmostExpiringTrialOffersForReminder([I.pe.TIER_2]);
                return {
                    cooldownDurationMs: (0, E.e1)(t[0])
                };
            case A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                let e = d.A.getAlmostExpiringDiscountOffersForReminder([I.pe.TIER_2]);
                return {
                    cooldownDurationMs: (0, E.e1)(e[0])
                };
            default:
                return {
                    cooldownDurationMs: 1 / 0
                }
        }
    }, [n]), N = l()().add(5, "days").toDate(), [p, R] = (0, _.Bo)(e, s, T.m.NOTICE_BAR);
    if (null == p) return null;
    if (p === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === A.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, i.jsx)(u.A, {
            dismissCurrentNotice: () => {
                R(T.i.USER_DISMISS), (0, o.w)(N)
            },
            subscriptionTier: I.pe.TIER_2
        });
        if (n === A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, i.jsx)(c.A, {
            dismissCurrentNotice: () => {
                R(T.i.USER_DISMISS), (0, o.w)(N)
            },
            subscriptionTier: I.pe.TIER_2
        })
    }
}