/** Chunk was on 44384 **/
/** chunk id: 626262, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    o = n.n(l),
    a = n(554146),
    s = n(916768),
    c = n(617108),
    u = n(745299),
    E = n(816733),
    d = n(927578),
    _ = n(160761),
    A = n(49999),
    T = n(652215),
    I = n(788868);
let O = e => {
    let {
        dismissibleContent: t,
        noticeType: n
    } = e, l = i.useMemo(() => {
        switch (n) {
            case T.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                let e = E.A.getAlmostExpiringTrialOffers([I.pe.TIER_2]);
                return {
                    cooldownDurationMs: (0, d.e1)(e[0])
                };
            case T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                let t = E.A.getAlmostExpiringDiscountOffers([I.pe.TIER_2]);
                return {
                    cooldownDurationMs: (0, d.e1)(t[0])
                };
            default:
                return {
                    cooldownDurationMs: 1 / 0
                }
        }
    }, [n]), O = o()().add(5, "days").toDate(), [N, p] = (0, _.Bo)(t, l, A.m.NOTICE_BAR);
    if (null == N) return null;
    if (N === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === T.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(u.A, {
            dismissCurrentNotice: () => {
                p(A.i.USER_DISMISS), (0, s.w)(O)
            },
            subscriptionTier: I.pe.TIER_2
        });
        if (n === T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(c.A, {
            dismissCurrentNotice: () => {
                p(A.i.USER_DISMISS), (0, s.w)(O)
            },
            subscriptionTier: I.pe.TIER_2
        })
    }
}