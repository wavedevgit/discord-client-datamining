/** chunk id: 745299 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(496431),
    a = n(793574),
    r = n(688810),
    o = n(139286),
    d = n(532794),
    c = n(954571),
    u = n(975571),
    h = n(927578),
    A = n(234419),
    _ = n(635995),
    m = n(915516),
    g = n(788868),
    p = n(652215),
    f = n(985018);
let x = function(e) {
    let {
        dismissCurrentNotice: t,
        subscriptionTier: n
    } = e, {
        analyticsLocations: x
    } = (0, r.Ay)(function(e) {
        switch (e) {
            case g.pe.TIER_0:
                return a.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
            case g.pe.TIER_2:
                return a.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
            default:
                throw Error(`Unsupported subscription tier: ${e}`)
        }
    }(n)), E = (0, A.V)(), I = (0, s.A)(null != E && null != E.expires_at ? Date.parse(E.expires_at) : 0), C = null == E || E.subscription_trial?.sku_id !== n || null == E.expires_at || Object.values(I).every(e => 0 === e);
    if ((0, o.A)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.TRIAL_NOTICE,
            properties: {
                trial_id: E?.trial_id
            }
        }, {
            disableTrack: C
        }), C) return null;
    let N = n === g.pe.TIER_2 ? p.kqX.PREMIUM_TIER_2_TRIAL_ENDING : p.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        T = (0, h.re)({
            intervalType: E.subscription_trial?.interval,
            intervalCount: E.subscription_trial?.interval_count
        }),
        S = u.A.getArticleURL(E.trial_id === g.yo ? p.MVz.NITRO_TRIAL_FOR_ALL : p.MVz.PREMIUM_TRIAL);
    return (0, i.jsxs)(_.T0, {
        onClick: () => {
            t(), c.default.track(p.HAw.APP_NOTICE_CLOSED, {
                notice_type: N,
                trial_id: E.trial_id
            })
        },
        children: [(0, i.jsx)(_.In, {
            children: (0, m.GZ)(n, I, T, S)
        }), (0, i.jsx)(_.fY, {
            onClick: () => {
                (0, d.A)({
                    trialId: E.trial_id,
                    subscriptionTier: n,
                    analyticsLocations: x,
                    analyticsObject: {
                        page: p.liQ.IN_APP,
                        section: p.JJy.NOTIFICATION_BAR,
                        object: p.ZSU.BUTTON_CTA
                    }
                }), c.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: N,
                    trial_id: E.trial_id
                })
            },
            text: function(e) {
                switch (e) {
                    case g.pe.TIER_0:
                        return f.intl.string(f.t.mCG023);
                    case g.pe.TIER_2:
                        return f.intl.string(f.t.J61px0);
                    default:
                        throw Error(`Unsupported subscription tier: ${e}`)
                }
            }(n)
        })]
    })
}