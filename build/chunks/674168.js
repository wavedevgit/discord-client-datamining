/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => E
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
    A = n(652215),
    f = n(49999),
    g = n(788868),
    _ = n(355097),
    m = n(985018),
    x = n(956790);

function E(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: E
    } = e, y = (0, s.bG)([h.default], () => h.default.getCurrentUser()), v = (t = y?.premiumType) === g.PremiumTypes.TIER_2 ? m.intl.string(m.t.jqO5Qn) : null == t ? m.intl.string(m.t.f2qjw5) : m.intl.string(m.t.SblICW), S = p.Ay.canUseCustomCallSounds(y);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: x.ne,
        backgroundClassName: x.u4,
        children: [null != E ? (0, i.jsx)(r.DUT, {
            className: x.VN,
            onClick: () => E?.(f.i.DISMISS),
            "aria-label": m.intl.string(m.t.cpT0Cq),
            children: (0, i.jsx)(r.PGe, {
                size: "xs",
                color: "currentColor",
                className: x.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: x.ex,
            children: [(0, i.jsx)(r.tvc, {
                size: "sm",
                color: "currentColor",
                className: x.ax
            }), (0, i.jsx)(r.Heading, {
                variant: "heading-sm/bold",
                children: m.intl.string(m.t.dTbAxx)
            })]
        }), (0, i.jsx)(l.E, {
            variant: "text-sm/normal",
            children: v
        }), S ? (0, i.jsx)(r.Button, {
            onClick: function() {
                (0, u.openUserSettings)(c.X.SOUNDBOARD_CATEGORY, {
                    section: A.nc_.VOICE,
                    subsection: _.MJ
                }), n?.(), E?.(f.i.PRIMARY)
            },
            text: m.intl.string(m.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(o.A, {
            textOptions: {
                textOverride: m.intl.string(m.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: A.JJy.SOUNDBOARD_SOUND_PICKER,
                object: A.ZSU.BUTTON_CTA
            },
            color: a.$n.Colors.GREEN,
            onSubscribeModalClose: () => E?.(f.i.PRIMARY)
        })]
    })
}