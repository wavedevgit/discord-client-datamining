/** chunk id: 745299 params = (module,exports,require) **/
n.d(t, {
    A: () => m
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
    _ = n(927578),
    E = n(234419),
    T = n(635995),
    A = n(915516),
    I = n(788868),
    p = n(652215),
    N = n(985018);
let m = function(e) {
    let {
        dismissCurrentNotice: t,
        subscriptionTier: n
    } = e, {
        analyticsLocations: m
    } = (0, a.Ay)(function(e) {
        switch (e) {
            case I.pe.TIER_0:
                return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
            case I.pe.TIER_2:
                return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
            default:
                throw Error(`Unsupported subscription tier: ${e}`)
        }
    }(n)), R = (0, E.V)(), S = (0, r.A)(null != R && null != R.expires_at ? Date.parse(R.expires_at) : 0), h = null == R || R.subscription_trial?.sku_id !== n || null == R.expires_at || Object.values(S).every(e => 0 === e);
    if ((0, o.A)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.TRIAL_NOTICE,
            properties: {
                trial_id: R?.trial_id
            }
        }, {
            disableTrack: h
        }), h) return null;
    let g = n === I.pe.TIER_2 ? p.kqX.PREMIUM_TIER_2_TRIAL_ENDING : p.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        C = (0, _.re)({
            intervalType: R.subscription_trial?.interval,
            intervalCount: R.subscription_trial?.interval_count
        }),
        O = u.A.getArticleURL(R.trial_id === I.yo ? p.MVz.NITRO_TRIAL_FOR_ALL : p.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(T.T0, {
        onClick: () => {
            t(), d.default.track(p.HAw.APP_NOTICE_CLOSED, {
                notice_type: g,
                trial_id: R.trial_id
            })
        },
        children: [(0, i.jsx)(T.In, {
            children: (0, A.GZ)(n, S, C, O)
        }), (0, i.jsx)(T.fY, {
            onClick: () => {
                (0, c.A)({
                    trialId: R.trial_id,
                    subscriptionTier: n,
                    analyticsLocations: m,
                    analyticsObject: {
                        page: p.liQ.IN_APP,
                        section: p.JJy.NOTIFICATION_BAR,
                        object: p.ZSU.BUTTON_CTA
                    }
                }), d.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g,
                    trial_id: R.trial_id
                })
            },
            text: function(e) {
                switch (e) {
                    case I.pe.TIER_0:
                        return N.intl.string(N.t.mCG023);
                    case I.pe.TIER_2:
                        return N.intl.string(N.t.J61px0);
                    default:
                        throw Error(`Unsupported subscription tier: ${e}`)
                }
            }(n)
        })]
    })
}