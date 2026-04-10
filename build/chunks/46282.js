/** chunk id: 46282 params = (module,exports,require) **/
n.d(e, {
    y: () => T
});
var i = n(627968),
    l = n(877624),
    r = n(311907),
    s = n(397927),
    a = n(688810),
    o = n(532794),
    c = n(412260),
    d = n(49999),
    u = n(652215),
    E = n(985018),
    _ = n(381703);
let T = t => {
    let {
        markAsDismissed: e
    } = t, {
        analyticsLocations: n
    } = (0, a.Ay)(), T = (0, r.bG)([c.A], () => {
        let t = c.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
        return null == t || "giftReminderNagbar" !== t.properties.properties.oneofKind ? null : t.properties.properties.giftReminderNagbar
    });
    return null == T ? null : (0, i.jsxs)(s.$Td, {
        color: s.Hv$.PREMIUM_TIER_2,
        children: [(0, i.jsx)(s.PMB, {
            onClick: () => e(d.i.USER_DISMISS),
            noticeType: u.kqX.GIFTING_PROMOTION_REMINDER
        }), (0, i.jsx)(s.okO, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: _.ez
        }), T.body, (0, i.jsx)(s.Z_L, {
            onClick: () => {
                (0, o.A)({
                    isGift: !0,
                    initialPlanId: null,
                    analyticsLocations: n,
                    analyticsLocation: u.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                    analyticsObject: {
                        page: u.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
                    }
                })
            },
            noticeType: u.kqX.GIFTING_PROMOTION_REMINDER,
            children: E.intl.string(E.t.RzWDqY)
        })]
    })
}