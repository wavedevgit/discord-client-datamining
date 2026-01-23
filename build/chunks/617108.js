/** Chunk was on web.js **/
/** chunk id: 617108, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(496431),
    s = n(793574),
    o = n(688810),
    l = n(532794),
    c = n(804412),
    u = n(422936),
    d = n(635995),
    f = n(915516),
    p = n(788868),
    _ = n(652215),
    h = n(985018),
    m = n(237082);
let g = function(e) {
    var t;
    let {
        dismissCurrentNotice: n,
        subscriptionTier: g
    } = e, {
        analyticsLocations: E
    } = (0, o.Ay)(s.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), y = (0, u.O)(), b = (0, a.A)(null != y && null != y.expires_at ? Date.parse(y.expires_at) : 0), {
        variant: O,
        showNagbar: v
    } = (0, c.Ay)("PremiumDiscountEndingNotice");
    if (null == y || (null == (t = y.discount) ? void 0 : t.plan_ids.some(e => p.hd[e].skuId !== g)) || null == y.expires_at || Object.values(b).every(e => 0 === e) || !v) return null;
    let A = () => {
        (0, l.A)({
            subscriptionTier: g,
            analyticsLocations: E,
            analyticsObject: {
                page: _.liQ.IN_APP,
                section: _.JJy.NOTIFICATION_BAR,
                object: _.ZSU.BUTTON_CTA
            }
        })
    };
    return O === c.CJ.NAGBAR_REFRESH ? (0, r.jsxs)(d.T0, {
        onClick: n,
        children: [(0, r.jsx)(d.In, {
            children: (0, f.rn)(b, Number(y.discount.amount))
        }), (0, r.jsx)(d.fY, {
            onClick: A,
            text: h.intl.string(h.t.zLXssK)
        })]
    }) : (0, r.jsxs)(i.$Td, {
        color: i.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(i.PMB, {
            noticeType: _.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
            onClick: n
        }), (0, r.jsx)(i.tvc, {
            size: "md",
            color: "currentColor",
            className: m.PC
        }), (0, f.rn)(b, Number(y.discount.amount)), (0, r.jsx)(i.zr9, {
            onClick: A,
            children: h.intl.string(h.t.zLXssK)
        })]
    })
}