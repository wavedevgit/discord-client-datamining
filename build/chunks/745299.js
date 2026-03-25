/** chunk id: 745299 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(496431),
    s = n(793574),
    a = n(688810),
    o = n(139286),
    c = n(532794),
    u = n(954571),
    d = n(975571),
    _ = n(927578),
    E = n(234419),
    A = n(635995),
    T = n(915516),
    I = n(788868),
    N = n(652215),
    p = n(985018);
let h = function(e) {
    let {
        dismissCurrentNotice: t,
        subscriptionTier: n
    } = e, {
        analyticsLocations: h
    } = (0, a.Ay)(function(e) {
        switch (e) {
            case I.pe.TIER_0:
                return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
            case I.pe.TIER_2:
                return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
            default:
                throw Error(`Unsupported subscription tier: ${e}`)
        }
    }(n)), m = (0, E.V)(), S = (0, r.A)(null != m && null != m.expires_at ? Date.parse(m.expires_at) : 0), C = null == m || m.subscription_trial?.sku_id !== n || null == m.expires_at || Object.values(S).every(e => 0 === e);
    if ((0, o.A)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.TRIAL_NOTICE,
            properties: {
                trial_id: m?.trial_id
            }
        }, {
            disableTrack: C
        }), C) return null;
    let R = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        g = (0, _.re)({
            intervalType: m.subscription_trial?.interval,
            intervalCount: m.subscription_trial?.interval_count
        }),
        O = d.A.getArticleURL(m.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(A.T0, {
        onClick: () => {
            t(), u.default.track(N.HAw.APP_NOTICE_CLOSED, {
                notice_type: R,
                trial_id: m.trial_id
            })
        },
        children: [(0, i.jsx)(A.In, {
            children: (0, T.GZ)(n, S, g, O)
        }), (0, i.jsx)(A.fY, {
            onClick: () => {
                (0, c.A)({
                    trialId: m.trial_id,
                    subscriptionTier: n,
                    analyticsLocations: h,
                    analyticsObject: {
                        page: N.liQ.IN_APP,
                        section: N.JJy.NOTIFICATION_BAR,
                        object: N.ZSU.BUTTON_CTA
                    }
                }), u.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: R,
                    trial_id: m.trial_id
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