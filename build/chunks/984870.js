/** Chunk was on 73734 **/
/** chunk id: 984870, original params: e,t,n (module,exports,require) **/
n.d(t, {
    T: () => P
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(554146),
    o = n(397927),
    s = n(728364),
    c = n(264779),
    u = n(597758),
    E = n(780964),
    d = n(840065),
    _ = n(287809),
    A = n(954571),
    T = n(927578),
    I = n(379848),
    O = n(49999),
    N = n(652215),
    p = n(788868),
    R = n(985018),
    S = n(210320);
let P = e => {
    let {
        dismissibleContent: t
    } = e, n = (0, c.Cp)(), P = (0, l.bG)([_.default], () => T.Ay.isPremiumExactly(_.default.getCurrentUser(), p.PremiumTypes.TIER_2)), {
        enabled: y
    } = s.m.useExperiment({
        location: "OutboundPromotionNotice"
    }, {
        autoTrackExposure: !1,
        disable: P
    }), m = i.useCallback(() => {
        A.default.track(N.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, d.openUserSettings)(E.X.GIFT_PANEL, {
            section: N.nc_.INVENTORY
        }), u.Ay.dismissOutboundPromotionNotice()
    }, []);
    return null == n ? null : (0, r.jsx)(I.YS, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: {
            cooldownDurationMs: 0
        },
        groupName: O.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: n
            } = e;
            if (t === a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, r.jsxs)(o.$Td, {
                color: o.Hv$.PREMIUM_TIER_2,
                children: [(0, r.jsx)(o.PMB, {
                    noticeType: N.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        u.Ay.dismissOutboundPromotionNotice(), null !== n && n(O.i.USER_DISMISS)
                    }
                }), (0, r.jsx)(o.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: S.P
                }), y ? R.intl.string(R.t["5JMiOo"]) : R.intl.string(R.t["Pzh+G2"]), (0, r.jsx)(o.Z_L, {
                    noticeType: N.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        m(), null !== n && n(O.i.TAKE_ACTION)
                    },
                    children: R.intl.string(R.t.jVcuVY)
                })]
            })
        }
    })
}