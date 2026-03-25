/** chunk id: 813803 params = (module,exports,require) **/
n.d(t, {
    _: () => N
});
var i = n(627968);
n(64700);
var l = n(877624),
    r = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(688810),
    c = n(532794),
    u = n(412260),
    d = n(357186),
    _ = n(379848),
    E = n(49999),
    A = n(652215),
    T = n(985018),
    I = n(237082);
let N = e => {
    let {
        dismissibleContent: t,
        noticeType: n
    } = e, {
        analyticsLocations: N
    } = (0, o.Ay)(), p = (0, r.bG)([u.A], () => {
        let e = u.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
        return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    });
    return (0, i.jsx)(_.GY, {
        contentType: t,
        latestVersion: (0, d.c)(t),
        groupName: E.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: l
            } = e;
            if (t === s.M.GIFTING_PROMOTION_REMINDER) return null == p ? null : (0, i.jsxs)(a.$Td, {
                color: a.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(a.PMB, {
                    onClick: () => l(E.i.USER_DISMISS),
                    noticeType: n
                }), (0, i.jsx)(a.okO, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: I.ez
                }), p.body, (0, i.jsx)(a.Z_L, {
                    onClick: () => {
                        (0, c.A)({
                            isGift: !0,
                            initialPlanId: null,
                            analyticsLocations: N,
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