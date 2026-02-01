/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => O
});
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(571356),
    l = n(421380),
    o = n(397927),
    a = n(465794),
    c = n(212168),
    d = n(780964),
    u = n(840065),
    h = n(287809),
    p = n(927578),
    f = n(652215),
    g = n(49999),
    y = n(788868),
    A = n(355097),
    m = n(985018),
    b = n(956790);

function O(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: O
    } = e, _ = (0, r.bG)([h.default], () => h.default.getCurrentUser()), v = (t = null == _ ? void 0 : _.premiumType) === y.PremiumTypes.TIER_2 ? m.intl.string(m.t.jqO5Qn) : null == t ? m.intl.string(m.t.f2qjw5) : m.intl.string(m.t.SblICW), E = p.Ay.canUseCustomCallSounds(_);
    return (0, i.jsxs)(c.A, {
        isShown: !0,
        type: c.i.PREMIUM,
        className: b.ne,
        backgroundClassName: b.u4,
        children: [null != O ? (0, i.jsx)(o.DUT, {
            className: b.VN,
            onClick: () => null == O ? void 0 : O(g.i.DISMISS),
            "aria-label": m.intl.string(m.t.cpT0Cq),
            children: (0, i.jsx)(o.PGe, {
                size: "xs",
                color: "currentColor",
                className: b.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: b.ex,
            children: [(0, i.jsx)(o.tvc, {
                size: "sm",
                color: "currentColor",
                className: b.ax
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-sm/bold",
                children: m.intl.string(m.t.dTbAxx)
            })]
        }), (0, i.jsx)(s.E, {
            variant: "text-sm/normal",
            children: v
        }), E ? (0, i.jsx)(o.Button, {
            onClick: function() {
                (0, u.openUserSettings)(d.X.SOUNDBOARD_CATEGORY, {
                    section: f.nc_.VOICE,
                    subsection: A.MJ
                }), null == n || n(), null == O || O(g.i.PRIMARY)
            },
            text: m.intl.string(m.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(a.A, {
            textOptions: {
                textOverride: m.intl.string(m.t.pj0XBN)
            },
            subscriptionTier: y.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: f.JJy.SOUNDBOARD_SOUND_PICKER,
                object: f.ZSU.BUTTON_CTA
            },
            color: l.$n.Colors.GREEN,
            onSubscribeModalClose: () => null == O ? void 0 : O(g.i.PRIMARY)
        })]
    })
}