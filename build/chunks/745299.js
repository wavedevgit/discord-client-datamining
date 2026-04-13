/** chunk id: 745299 params = (module,exports,require) **/
n.d(e, {
    A: () => p
});
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    o = n(139286),
    c = n(532794),
    d = n(954571),
    u = n(975571),
    E = n(927578),
    _ = n(234419),
    T = n(635995),
    A = n(915516),
    I = n(788868),
    N = n(652215),
    R = n(985018);
let p = 21552 == n.j ? function(t) {
    let {
        dismissCurrentNotice: e,
        subscriptionTier: n
    } = t, {
        analyticsLocations: p
    } = (0, a.Ay)(function(t) {
        switch (t) {
            case I.pe.TIER_0:
                return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
            case I.pe.TIER_2:
                return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
            default:
                throw Error(`Unsupported subscription tier: ${t}`)
        }
    }(n)), O = (0, _.V)(), h = (0, r.A)(null != O && null != O.expires_at ? Date.parse(O.expires_at) : 0), C = null == O || O.subscription_trial?.sku_id !== n || null == O.expires_at || Object.values(h).every(t => 0 === t);
    if ((0, o.A)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.TRIAL_NOTICE,
            properties: {
                trial_id: O?.trial_id
            }
        }, {
            disableTrack: C
        }), C) return null;
    let m = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        g = (0, E.re)({
            intervalType: O.subscription_trial?.interval,
            intervalCount: O.subscription_trial?.interval_count
        }),
        S = u.A.getArticleURL(O.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(T.T0, {
        onClick: () => {
            e(), d.default.track(N.HAw.APP_NOTICE_CLOSED, {
                notice_type: m,
                trial_id: O.trial_id
            })
        },
        children: [(0, i.jsx)(T.In, {
            children: (0, A.GZ)(n, h, g, S)
        }), (0, i.jsx)(T.fY, {
            onClick: () => {
                (0, c.A)({
                    trialId: O.trial_id,
                    subscriptionTier: n,
                    analyticsLocations: p,
                    analyticsObject: {
                        page: N.liQ.IN_APP,
                        section: N.JJy.NOTIFICATION_BAR,
                        object: N.ZSU.BUTTON_CTA
                    }
                }), d.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: m,
                    trial_id: O.trial_id
                })
            },
            text: function(t) {
                switch (t) {
                    case I.pe.TIER_0:
                        return R.intl.string(R.t.mCG023);
                    case I.pe.TIER_2:
                        return R.intl.string(R.t.J61px0);
                    default:
                        throw Error(`Unsupported subscription tier: ${t}`)
                }
            }(n)
        })]
    })
} : null