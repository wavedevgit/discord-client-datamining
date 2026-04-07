/** chunk id: 984870 params = (module,exports,require) **/
n.d(t, {
    T: () => E
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(264779),
    d = n(597758),
    c = n(780964),
    u = n(858897),
    h = n(287809),
    A = n(954571),
    _ = n(927578),
    m = n(379848),
    p = n(49999),
    g = n(652215),
    f = n(985018),
    x = n(258527);
let E = e => {
    let {
        dismissibleContent: t
    } = e, n = (0, o.Cp)(), E = (0, s.bG)([h.default], () => !_.Ay.isPremium(h.default.getCurrentUser())), I = l.useCallback(() => {
        A.default.track(g.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, u.openUserSettings)(c.X.GIFT_PANEL), d.Ay.dismissOutboundPromotionNotice()
    }, []);
    return null == n ? null : (0, i.jsx)(m.YS, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: {
            cooldownDurationMs: 0
        },
        groupName: p.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: n
            } = e;
            if (t === a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, i.jsxs)(r.$Td, {
                color: r.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(r.PMB, {
                    noticeType: g.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        d.Ay.dismissOutboundPromotionNotice(), null !== n && n(p.i.USER_DISMISS)
                    }
                }), (0, i.jsx)(r.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: x.P
                }), E ? f.intl.string(f.t["5JMiOo"]) : f.intl.string(f.t["Pzh+G2"]), (0, i.jsx)(r.Z_L, {
                    noticeType: g.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        I(), null !== n && n(p.i.TAKE_ACTION)
                    },
                    children: f.intl.string(f.t.jVcuVY)
                })]
            })
        }
    })
}