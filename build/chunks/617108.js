/** chunk id: 617108 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(496431),
    s = n(793574),
    a = n(688810),
    r = n(532794),
    o = n(954571),
    c = n(422936),
    d = n(635995),
    u = n(915516),
    h = n(788868),
    A = n(652215),
    _ = n(985018);
let m = function(e) {
    let {
        dismissCurrentNotice: t,
        subscriptionTier: n
    } = e, {
        analyticsLocations: m
    } = (0, a.Ay)(s.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), g = (0, c.O)(), p = (0, l.A)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0);
    return null == g || g.discount?.plan_ids.some(e => h.hd[e].skuId !== n) || null == g.expires_at || Object.values(p).every(e => 0 === e) ? null : (0, i.jsxs)(d.T0, {
        onClick: () => {
            t(), o.default.track(A.HAw.APP_NOTICE_CLOSED, {
                notice_type: A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING
            })
        },
        children: [(0, i.jsx)(d.In, {
            children: (0, u.rn)(p, Number(g.discount.amount))
        }), (0, i.jsx)(d.fY, {
            onClick: () => {
                (0, r.A)({
                    subscriptionTier: n,
                    analyticsLocations: m,
                    analyticsObject: {
                        page: A.liQ.IN_APP,
                        section: A.JJy.NOTIFICATION_BAR,
                        object: A.ZSU.BUTTON_CTA
                    }
                })
            },
            text: _.intl.string(_.t.zLXssK)
        })]
    })
}