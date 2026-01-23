/** Chunk was on web.js **/
/** chunk id: 984870, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    l = n(728364),
    c = n(264779),
    u = n(597758),
    d = n(780964),
    f = n(840065),
    p = n(287809),
    _ = n(954571),
    h = n(927578),
    m = n(379848),
    g = n(49999),
    E = n(652215),
    y = n(788868),
    b = n(985018),
    O = n(210320);
let v = e => {
    let {
        dismissibleContent: t
    } = e, n = (0, c.Cp)(), v = (0, a.bG)([p.default], () => h.Ay.isPremiumExactly(p.default.getCurrentUser(), y.PremiumTypes.TIER_2)), {
        enabled: A
    } = l.m.useExperiment({
        location: "OutboundPromotionNotice"
    }, {
        autoTrackExposure: !1,
        disable: v
    }), I = i.useCallback(() => {
        _.default.track(E.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, f.openUserSettings)(d.X.GIFT_PANEL, {
            section: E.nc_.INVENTORY
        }), u.Ay.dismissOutboundPromotionNotice()
    }, []);
    if (null == n) return null;
    let S = e => (0, r.jsxs)(o.$Td, {
        color: o.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(o.PMB, {
            noticeType: E.kqX.OUTBOUND_PROMOTION,
            onClick: () => {
                u.Ay.dismissOutboundPromotionNotice(), null !== e && e(g.i.USER_DISMISS)
            }
        }), (0, r.jsx)(o.tvc, {
            size: "md",
            color: "currentColor",
            className: O.P
        }), A ? b.intl.string(b.t["5JMiOo"]) : b.intl.string(b.t["Pzh+G2"]), (0, r.jsx)(o.Z_L, {
            noticeType: E.kqX.OUTBOUND_PROMOTION,
            onClick: () => {
                I(), null !== e && e(g.i.TAKE_ACTION)
            },
            children: b.intl.string(b.t.jVcuVY)
        })]
    });
    return (0, r.jsx)(m.YS, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: {
            cooldownDurationMs: 0
        },
        groupName: g.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: n
            } = e;
            if (t === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return S(n)
        }
    })
}