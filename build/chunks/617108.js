/** chunk id: 617108 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(496431),
    s = n(793574),
    l = n(688810),
    a = n(532794),
    o = n(954571),
    c = n(422936),
    u = n(635995),
    d = n(915516),
    E = n(788868),
    _ = n(652215),
    T = n(985018);
let A = 21552 == n.j ? function(t) {
    let {
        dismissCurrentNotice: e,
        subscriptionTier: n
    } = t, {
        analyticsLocations: A
    } = (0, l.Ay)(s.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), I = (0, c.O)(), N = (0, r.A)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
    return null == I || I.discount?.plan_ids.some(t => E.hd[t].skuId !== n) || null == I.expires_at || Object.values(N).every(t => 0 === t) ? null : (0, i.jsxs)(u.T0, {
        onClick: () => {
            e(), o.default.track(_.HAw.APP_NOTICE_CLOSED, {
                notice_type: _.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING
            })
        },
        children: [(0, i.jsx)(u.In, {
            children: (0, d.rn)(N, Number(I.discount.amount))
        }), (0, i.jsx)(u.fY, {
            onClick: () => {
                (0, a.A)({
                    subscriptionTier: n,
                    analyticsLocations: A,
                    analyticsObject: {
                        page: _.liQ.IN_APP,
                        section: _.JJy.NOTIFICATION_BAR,
                        object: _.ZSU.BUTTON_CTA
                    }
                })
            },
            text: T.intl.string(T.t.zLXssK)
        })]
    })
} : null