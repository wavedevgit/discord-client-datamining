/** chunk id: 813803 params = (module,exports,require) **/
n.d(t, {
    _: () => p
});
var i = n(627968);
n(64700);
var l = n(877624),
    s = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(688810),
    d = n(532794),
    c = n(412260),
    u = n(357186),
    h = n(379848),
    A = n(49999),
    _ = n(652215),
    m = n(985018),
    g = n(381703);
let p = e => {
    let {
        dismissibleContent: t,
        noticeType: n
    } = e, {
        analyticsLocations: p
    } = (0, o.Ay)(), f = (0, s.bG)([c.A], () => {
        let e = c.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
        return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
    });
    return (0, i.jsx)(h.GY, {
        contentType: t,
        latestVersion: (0, u.c)(t),
        groupName: A.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: l
            } = e;
            if (t === a.M.GIFTING_PROMOTION_REMINDER) return null == f ? null : (0, i.jsxs)(r.$Td, {
                color: r.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(r.PMB, {
                    onClick: () => l(A.i.USER_DISMISS),
                    noticeType: n
                }), (0, i.jsx)(r.okO, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: g.ez
                }), f.body, (0, i.jsx)(r.Z_L, {
                    onClick: () => {
                        (0, d.A)({
                            isGift: !0,
                            initialPlanId: null,
                            analyticsLocations: p,
                            analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                            analyticsObject: {
                                page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
                            }
                        })
                    },
                    noticeType: n,
                    children: m.intl.string(m.t.RzWDqY)
                })]
            })
        }
    })
}