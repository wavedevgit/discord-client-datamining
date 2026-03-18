/** chunk id: 745299 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => R
});
var i = n(627968);
n(64700);
var r = n(110259),
    s = n(496431),
    l = n(793574),
    a = n(688810),
    o = n(139286),
    c = n(532794),
    u = n(954571),
    d = n(975571),
    E = n(927578),
    _ = n(234419),
    T = n(635995),
    A = n(915516),
    I = n(788868),
    N = n(652215),
    p = n(985018);
let R = 21552 == n.j ? function(t) {
    let {
        dismissCurrentNotice: e,
        subscriptionTier: n
    } = t, {
        analyticsLocations: R
    } = (0, a.Ay)(function(t) {
        switch (t) {
            case I.pe.TIER_0:
                return l.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
            case I.pe.TIER_2:
                return l.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
            default:
                throw Error(`Unsupported subscription tier: ${t}`)
        }
    }(n)), g = (0, _.V)(), h = (0, s.A)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0), m = null == g || g.subscription_trial?.sku_id !== n || null == g.expires_at || Object.values(h).every(t => 0 === t);
    if ((0, o.A)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.TRIAL_NOTICE,
            properties: {
                trial_id: g?.trial_id
            }
        }, {
            disableTrack: m
        }), m) return null;
    let O = n === I.pe.TIER_2 ? N.kqX.PREMIUM_TIER_2_TRIAL_ENDING : N.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        C = (0, E.re)({
            intervalType: g.subscription_trial?.interval,
            intervalCount: g.subscription_trial?.interval_count
        }),
        S = d.A.getArticleURL(g.trial_id === I.yo ? N.MVz.NITRO_TRIAL_FOR_ALL : N.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(T.T0, {
        onClick: () => {
            e(), u.default.track(N.HAw.APP_NOTICE_CLOSED, {
                notice_type: O,
                trial_id: g.trial_id
            })
        },
        children: [(0, i.jsx)(T.In, {
            children: (0, A.GZ)(n, h, C, S)
        }), (0, i.jsx)(T.fY, {
            onClick: () => {
                (0, c.A)({
                    trialId: g.trial_id,
                    subscriptionTier: n,
                    analyticsLocations: R,
                    analyticsObject: {
                        page: N.liQ.IN_APP,
                        section: N.JJy.NOTIFICATION_BAR,
                        object: N.ZSU.BUTTON_CTA
                    }
                }), u.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: O,
                    trial_id: g.trial_id
                })
            },
            text: function(t) {
                switch (t) {
                    case I.pe.TIER_0:
                        return p.intl.string(p.t.mCG023);
                    case I.pe.TIER_2:
                        return p.intl.string(p.t.J61px0);
                    default:
                        throw Error(`Unsupported subscription tier: ${t}`)
                }
            }(n)
        })]
    })
} : null