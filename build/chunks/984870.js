/** chunk id: 984870 params = (module,exports,require) **/
n.d(e, {
    T: () => O
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(264779),
    c = n(597758),
    d = n(780964),
    u = n(858897),
    E = n(287809),
    _ = n(954571),
    T = n(927578),
    A = n(379848),
    I = n(49999),
    N = n(652215),
    R = n(985018),
    p = n(258527);
let O = t => {
    let {
        dismissibleContent: e
    } = t, n = (0, o.Cp)(), O = (0, r.bG)([E.default], () => !T.Ay.isPremium(E.default.getCurrentUser())), h = l.useCallback(() => {
        _.default.track(N.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, u.openUserSettings)(d.X.GIFT_PANEL), c.Ay.dismissOutboundPromotionNotice()
    }, []);
    return null == n ? null : (0, i.jsx)(A.YS, {
        contentType: e,
        newSnowflakeId: n,
        timeRecurringConfig: {
            cooldownDurationMs: 0
        },
        groupName: I.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: t => {
            let {
                visibleContent: e,
                markAsDismissed: n
            } = t;
            if (e === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, i.jsxs)(a.$Td, {
                color: a.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(a.PMB, {
                    noticeType: N.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        c.Ay.dismissOutboundPromotionNotice(), null !== n && n(I.i.USER_DISMISS)
                    }
                }), (0, i.jsx)(a.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: p.P
                }), O ? R.intl.string(R.t["5JMiOo"]) : R.intl.string(R.t["Pzh+G2"]), (0, i.jsx)(a.Z_L, {
                    noticeType: N.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        h(), null !== n && n(I.i.TAKE_ACTION)
                    },
                    children: R.intl.string(R.t.jVcuVY)
                })]
            })
        }
    })
}