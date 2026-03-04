/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => x
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(571356),
    a = n(421380),
    r = n(397927),
    o = n(465794),
    d = n(212168),
    c = n(780964),
    u = n(840065),
    h = n(287809),
    p = n(927578),
    f = n(652215),
    A = n(49999),
    _ = n(788868),
    g = n(355097),
    m = n(985018),
    E = n(956790);

function x(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: x
    } = e, v = (0, s.bG)([h.default], () => h.default.getCurrentUser()), y = (t = v?.premiumType) === _.PremiumTypes.TIER_2 ? m.intl.string(m.t.jqO5Qn) : null == t ? m.intl.string(m.t.f2qjw5) : m.intl.string(m.t.SblICW), S = p.Ay.canUseCustomCallSounds(v);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: E.ne,
        backgroundClassName: E.u4,
        children: [null != x ? (0, i.jsx)(r.DUT, {
            className: E.VN,
            onClick: () => x?.(A.i.DISMISS),
            "aria-label": m.intl.string(m.t.cpT0Cq),
            children: (0, i.jsx)(r.PGe, {
                size: "xs",
                color: "currentColor",
                className: E.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: E.ex,
            children: [(0, i.jsx)(r.tvc, {
                size: "sm",
                color: "currentColor",
                className: E.ax
            }), (0, i.jsx)(r.Heading, {
                variant: "heading-sm/bold",
                children: m.intl.string(m.t.dTbAxx)
            })]
        }), (0, i.jsx)(l.E, {
            variant: "text-sm/normal",
            children: y
        }), S ? (0, i.jsx)(r.Button, {
            onClick: function() {
                (0, u.openUserSettings)(c.X.SOUNDBOARD_CATEGORY, {
                    section: f.nc_.VOICE,
                    subsection: g.MJ
                }), n?.(), x?.(A.i.PRIMARY)
            },
            text: m.intl.string(m.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(o.A, {
            textOptions: {
                textOverride: m.intl.string(m.t.pj0XBN)
            },
            subscriptionTier: _.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: f.JJy.SOUNDBOARD_SOUND_PICKER,
                object: f.ZSU.BUTTON_CTA
            },
            color: a.$n.Colors.GREEN,
            onSubscribeModalClose: () => x?.(A.i.PRIMARY)
        })]
    })
}