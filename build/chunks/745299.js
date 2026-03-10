/** chunk id: 745299 params = (module,exports,require) **/
n.d(t, {
    A: () => R
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
    N = n(652215),
    p = n(985018);
let R = function(e) {
    let {
        dismissCurrentNotice: t,
        subscriptionTier: n
    } = e, {
        analyticsLocations: R
    } = (0, a.Ay)(function(e) {
        switch (e) {
            case I.pe.TIER_0:
                return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
            case I.pe.TIER_2:
                return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
            default:
                throw Error(`Unsupported subscription tier: ${e}`)
        }
    }(n)), S = (0, E.V)(), m = (0, r.A)(null != S && null != S.expires_at ? Date.parse(S.expires_at) : 0), h = null == S || S.subscription_trial?.sku_id !== n || null == S.expires_at || Object.values(m).every(e => 0 === e);
    if ((0, o.A)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.TRIAL_NOTICE,
            properties: {
                trial_id: S?.trial_id
            }
        }, {
            disableTrack: h
        }), h) return null;
    let g = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        C = (0, _.re)({
            intervalType: S.subscription_trial?.interval,
            intervalCount: S.subscription_trial?.interval_count
        }),
        O = u.A.getArticleURL(S.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(T.T0, {
        onClick: () => {
            t(), d.default.track(N.HAw.APP_NOTICE_CLOSED, {
                notice_type: g,
                trial_id: S.trial_id
            })
        },
        children: [(0, i.jsx)(T.In, {
            children: (0, A.GZ)(n, m, C, O)
        }), (0, i.jsx)(T.fY, {
            onClick: () => {
                (0, c.A)({
                    trialId: S.trial_id,
                    subscriptionTier: n,
                    analyticsLocations: R,
                    analyticsObject: {
                        page: N.liQ.IN_APP,
                        section: N.JJy.NOTIFICATION_BAR,
                        object: N.ZSU.BUTTON_CTA
                    }
                }), d.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g,
                    trial_id: S.trial_id
                })
            },
            text: function(e) {
                switch (e) {
                    case I.pe.TIER_0:
                        return p.intl.string(p.t.mCG023);
                    case I.pe.TIER_2:
                        return p.intl.string(p.t.J61px0);
                    default:
                        throw Error(`Unsupported subscription tier: ${e}`)
                }
            }(n)
        })]
    })
}