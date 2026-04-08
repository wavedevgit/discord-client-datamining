/** chunk id: 617108 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var l = n(496431),
    r = n(793574),
    s = n(688810),
    a = n(532794),
    o = n(954571),
    c = n(422936),
    d = n(635995),
    u = n(915516),
    _ = n(788868),
    E = n(652215),
    T = n(985018);
let A = 21552 == n.j ? function(t) {
    let {
        dismissCurrentNotice: e,
        subscriptionTier: n
    } = t, {
        analyticsLocations: A
    } = (0, s.Ay)(r.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), I = (0, c.O)(), N = (0, l.A)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
    return null == I || I.discount?.plan_ids.some(t => _.hd[t].skuId !== n) || null == I.expires_at || Object.values(N).every(t => 0 === t) ? null : (0, i.jsxs)(d.T0, {
        onClick: () => {
            e(), o.default.track(E.HAw.APP_NOTICE_CLOSED, {
                notice_type: E.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING
            })
        },
        children: [(0, i.jsx)(d.In, {
            children: (0, u.rn)(N, Number(I.discount.amount))
        }), (0, i.jsx)(d.fY, {
            onClick: () => {
                (0, a.A)({
                    subscriptionTier: n,
                    analyticsLocations: A,
                    analyticsObject: {
                        page: E.liQ.IN_APP,
                        section: E.JJy.NOTIFICATION_BAR,
                        object: E.ZSU.BUTTON_CTA
                    }
                })
            },
            text: T.intl.string(T.t.zLXssK)
        })]
    })
} : null