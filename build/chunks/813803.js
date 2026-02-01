/** chunk id: 813803, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => O
});
var r = n(627968);
n(64700);
var i = n(877624),
    l = n(311907),
    a = n(554146),
    o = n(397927),
    s = n(688810),
    c = n(532794),
    u = n(412260),
    E = n(357186),
    d = n(379848),
    _ = n(49999),
    A = n(652215),
    T = n(985018),
    I = n(237082);
let O = e => {
    let {
        dismissibleContent: t,
        noticeType: n
    } = e, {
        analyticsLocations: O
    } = (0, s.Ay)(), N = (0, l.bG)([u.A], () => {
        let e = u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR);
        return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    });
    return (0, r.jsx)(d.GY, {
        contentType: t,
        latestVersion: (0, E.c)(t),
        groupName: _.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: i
            } = e;
            if (t === a.M.GIFTING_PROMOTION_REMINDER) return null == N ? null : (0, r.jsxs)(o.$Td, {
                color: o.Hv$.PREMIUM_TIER_2,
                children: [(0, r.jsx)(o.PMB, {
                    onClick: () => i(_.i.USER_DISMISS),
                    noticeType: n
                }), (0, r.jsx)(o.okO, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: I.ez
                }), N.body, (0, r.jsx)(o.Z_L, {
                    onClick: () => {
                        (0, c.A)({
                            isGift: !0,
                            initialPlanId: null,
                            analyticsLocations: O,
                            analyticsLocation: A.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                            analyticsObject: {
                                page: A.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
                            }
                        })
                    },
                    noticeType: n,
                    children: T.intl.string(T.t.RzWDqY)
                })]
            })
        }
    })
}