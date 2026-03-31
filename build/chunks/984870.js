/** chunk id: 984870 params = (module,exports,require) **/
n.d(t, {
    T: () => C
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(728364),
    c = n(264779),
    d = n(597758),
    u = n(780964),
    h = n(840065),
    A = n(287809),
    _ = n(954571),
    m = n(927578),
    g = n(379848),
    p = n(49999),
    f = n(652215),
    x = n(788868),
    E = n(985018),
    I = n(258527);
let C = e => {
    let {
        dismissibleContent: t
    } = e, n = (0, c.Cp)(), C = (0, s.bG)([A.default], () => m.Ay.isPremiumExactly(A.default.getCurrentUser(), x.PremiumTypes.TIER_2)), {
        enabled: N
    } = o.m.useExperiment({
        location: "OutboundPromotionNotice"
    }, {
        autoTrackExposure: !1,
        disable: C
    }), T = l.useCallback(() => {
        _.default.track(f.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, h.openUserSettings)(u.X.GIFT_PANEL), d.Ay.dismissOutboundPromotionNotice()
    }, []);
    return null == n ? null : (0, i.jsx)(g.YS, {
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
                    noticeType: f.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        d.Ay.dismissOutboundPromotionNotice(), null !== n && n(p.i.USER_DISMISS)
                    }
                }), (0, i.jsx)(r.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: I.P
                }), N ? E.intl.string(E.t["5JMiOo"]) : E.intl.string(E.t["Pzh+G2"]), (0, i.jsx)(r.Z_L, {
                    noticeType: f.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        T(), null !== n && n(p.i.TAKE_ACTION)
                    },
                    children: E.intl.string(E.t.jVcuVY)
                })]
            })
        }
    })
}