/** chunk id: 984870 params = (module,exports,require) **/
n.d(t, {
    T: () => C
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(728364),
    c = n(264779),
    u = n(597758),
    d = n(780964),
    _ = n(840065),
    E = n(287809),
    A = n(954571),
    T = n(927578),
    I = n(379848),
    N = n(49999),
    p = n(652215),
    h = n(788868),
    m = n(985018),
    S = n(210320);
let C = e => {
    let {
        dismissibleContent: t
    } = e, n = (0, c.Cp)(), C = (0, r.bG)([E.default], () => T.Ay.isPremiumExactly(E.default.getCurrentUser(), h.PremiumTypes.TIER_2)), {
        enabled: R
    } = o.m.useExperiment({
        location: "OutboundPromotionNotice"
    }, {
        autoTrackExposure: !1,
        disable: C
    }), g = l.useCallback(() => {
        A.default.track(p.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, _.openUserSettings)(d.X.GIFT_PANEL), u.Ay.dismissOutboundPromotionNotice()
    }, []);
    return null == n ? null : (0, i.jsx)(I.YS, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: {
            cooldownDurationMs: 0
        },
        groupName: N.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: n
            } = e;
            if (t === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, i.jsxs)(a.$Td, {
                color: a.Hv$.PREMIUM_TIER_2,
                children: [(0, i.jsx)(a.PMB, {
                    noticeType: p.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        u.Ay.dismissOutboundPromotionNotice(), null !== n && n(N.i.USER_DISMISS)
                    }
                }), (0, i.jsx)(a.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: S.P
                }), R ? m.intl.string(m.t["5JMiOo"]) : m.intl.string(m.t["Pzh+G2"]), (0, i.jsx)(a.Z_L, {
                    noticeType: p.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        g(), null !== n && n(N.i.TAKE_ACTION)
                    },
                    children: m.intl.string(m.t.jVcuVY)
                })]
            })
        }
    })
}