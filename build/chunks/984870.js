/** chunk id: 984870 params = (module,exports,require) **/
n.d(e, {
    T: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(728364),
    c = n(264779),
    d = n(597758),
    u = n(780964),
    E = n(840065),
    _ = n(287809),
    T = n(954571),
    A = n(927578),
    I = n(379848),
    N = n(49999),
    R = n(652215),
    p = n(788868),
    h = n(985018),
    C = n(589574);
let m = t => {
    let {
        dismissibleContent: e
    } = t, n = (0, c.Cp)(), m = (0, r.bG)([_.default], () => A.Ay.isPremiumExactly(_.default.getCurrentUser(), p.PremiumTypes.TIER_2)), {
        enabled: g
    } = o.m.useExperiment({
        location: "OutboundPromotionNotice"
    }, {
        autoTrackExposure: !1,
        disable: m
    }), O = l.useCallback(() => {
        T.default.track(R.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, E.openUserSettings)(u.X.GIFT_PANEL), d.Ay.dismissOutboundPromotionNotice()
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
            if (e === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, i.jsxs)(a.$Td, {
                color: a.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(a.PMB, {
                    noticeType: R.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        d.Ay.dismissOutboundPromotionNotice(), null !== n && n(N.i.USER_DISMISS)
                    }
                }), (0, i.jsx)(a.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: C.P
                }), g ? h.intl.string(h.t["5JMiOo"]) : h.intl.string(h.t["Pzh+G2"]), (0, i.jsx)(a.Z_L, {
                    noticeType: R.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        O(), null !== n && n(N.i.TAKE_ACTION)
                    },
                    children: h.intl.string(h.t.jVcuVY)
                })]
            })
        }
    })
}