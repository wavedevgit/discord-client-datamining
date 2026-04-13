/** chunk id: 626262 params = (module,exports,require) **/
n.d(e, {
    $: () => h,
    D: () => C
});
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    o = n(135099),
    c = n(380786),
    d = n(916768),
    u = n(617108),
    E = n(745299),
    _ = n(816733),
    T = n(927578),
    A = n(160761),
    I = n(49999),
    N = n(652215),
    R = n(788868),
    p = n(985018),
    O = n(873494);

function C(t) {
    switch (t) {
        case N.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let e = _.A.getAlmostExpiringTrialOffersForReminder([R.pe.TIER_2]);
            return {
                cooldownDurationMs: (0, T.e1)(e[0])
            };
        case N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = _.A.getAlmostExpiringDiscountOffersForReminder([R.pe.TIER_2]);
            return {
                cooldownDurationMs: (0, T.e1)(n[0])
            };
        case N.kqX.RIOT_MIGRATION:
        case N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return {
                cooldownDurationMs: 6048e5
            };
        default:
            return {
                cooldownDurationMs: 1 / 0
            }
    }
}
let h = t => {
    let {
        dismissibleContent: e,
        noticeType: n
    } = t, r = l.useMemo(() => C(n), [n]), _ = s()().add(5, "days").toDate(), [T, h] = (0, A.Bo)(e, r, I.m.NOTICE_BAR);
    if (null == T) return null;
    switch (T) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === N.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, i.jsx)(E.A, {
                dismissCurrentNotice: () => {
                    h(I.i.USER_DISMISS), (0, d.w)(_)
                },
                subscriptionTier: R.pe.TIER_2
            });
            if (n === N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, i.jsx)(u.A, {
                dismissCurrentNotice: () => {
                    h(I.i.USER_DISMISS), (0, d.w)(_)
                },
                subscriptionTier: R.pe.TIER_2
            });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(o.A, {
                markAsDismissed: h,
                applicationName: p.intl.string(O.default["1S6oAo"])
            });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(c.A, {
                markAsDismissed: () => h(I.i.USER_DISMISS)
            })
    }
}