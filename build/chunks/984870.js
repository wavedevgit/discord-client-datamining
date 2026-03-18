/** chunk id: 984870 params = (module,exports,require) **/
"use strict";
n.d(e, {
    T: () => m
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(554146),
    a = n(397927),
    o = n(728364),
    c = n(264779),
    u = n(597758),
    d = n(780964),
    E = n(840065),
    _ = n(287809),
    T = n(954571),
    A = n(927578),
    I = n(379848),
    N = n(49999),
    p = n(652215),
    R = n(788868),
    g = n(985018),
    h = n(210320);
let m = t => {
    let {
        dismissibleContent: e
    } = t, n = (0, c.Cp)(), m = (0, s.bG)([_.default], () => A.Ay.isPremiumExactly(_.default.getCurrentUser(), R.PremiumTypes.TIER_2)), {
        enabled: O
    } = o.m.useExperiment({
        location: "OutboundPromotionNotice"
    }, {
        autoTrackExposure: !1,
        disable: m
    }), C = r.useCallback(() => {
        T.default.track(p.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, E.openUserSettings)(d.X.GIFT_PANEL), u.Ay.dismissOutboundPromotionNotice()
    }, []);
    return null == n ? null : (0, i.jsx)(I.YS, {
        contentType: e,
        newSnowflakeId: n,
        timeRecurringConfig: {
            cooldownDurationMs: 0
        },
        groupName: N.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: t => {
            let {
                visibleContent: e,
                markAsDismissed: n
            } = t;
            if (e === l.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, i.jsxs)(a.$Td, {
                color: a.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(a.PMB, {
                    noticeType: p.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        u.Ay.dismissOutboundPromotionNotice(), null !== n && n(N.i.USER_DISMISS)
                    }
                }), (0, i.jsx)(a.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: h.P
                }), O ? g.intl.string(g.t["5JMiOo"]) : g.intl.string(g.t["Pzh+G2"]), (0, i.jsx)(a.Z_L, {
                    noticeType: p.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        C(), null !== n && n(N.i.TAKE_ACTION)
                    },
                    children: g.intl.string(g.t.jVcuVY)
                })]
            })
        }
    })
}