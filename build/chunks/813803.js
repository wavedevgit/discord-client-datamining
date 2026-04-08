/** chunk id: 813803 params = (module,exports,require) **/
n.d(e, {
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
    d = n(412260),
    u = n(357186),
    _ = n(379848),
    E = n(49999),
    T = n(652215),
    A = n(985018),
    I = n(571655);
let N = t => {
    let {
        dismissibleContent: e,
        noticeType: n
    } = t, {
        analyticsLocations: N
    } = (0, o.Ay)(), R = (0, r.bG)([d.A], () => {
        let t = d.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
        return null == t || "giftReminderNagbar" !== t.properties.properties.oneofKind ? null : t.properties.properties.giftReminderNagbar
    });
    return (0, i.jsx)(_.GY, {
        contentType: e,
        latestVersion: (0, u.c)(e),
        groupName: E.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: t => {
            let {
                visibleContent: e,
                markAsDismissed: l
            } = t;
            if (e === s.M.GIFTING_PROMOTION_REMINDER) return null == R ? null : (0, i.jsxs)(a.$Td, {
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
                }), R.body, (0, i.jsx)(a.Z_L, {
                    onClick: () => {
                        (0, c.A)({
                            isGift: !0,
                            initialPlanId: null,
                            analyticsLocations: N,
                            analyticsLocation: T.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                            analyticsObject: {
                                page: T.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
                            }
                        })
                    },
                    noticeType: n,
                    children: A.intl.string(A.t.RzWDqY)
                })]
            })
        }
    })
}