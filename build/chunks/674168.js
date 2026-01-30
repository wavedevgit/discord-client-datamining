/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => A
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
    p = n(287809),
    h = n(927578),
    f = n(652215),
    g = n(49999),
    y = n(788868),
    m = n(355097),
    _ = n(985018),
    b = n(956790);

function A(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: A
    } = e, O = (0, r.bG)([p.default], () => p.default.getCurrentUser()), v = (t = null == O ? void 0 : O.premiumType) === y.PremiumTypes.TIER_2 ? _.intl.string(_.t.jqO5Qn) : null == t ? _.intl.string(_.t.f2qjw5) : _.intl.string(_.t.SblICW), E = h.Ay.canUseCustomCallSounds(O);
    return (0, i.jsxs)(c.A, {
        isShown: !0,
        type: c.i.PREMIUM,
        className: b.ne,
        backgroundClassName: b.u4,
        children: [null != A ? (0, i.jsx)(o.DUT, {
            className: b.VN,
            onClick: () => null == A ? void 0 : A(g.i.DISMISS),
            "aria-label": _.intl.string(_.t.cpT0Cq),
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
                children: _.intl.string(_.t.dTbAxx)
            })]
        }), (0, i.jsx)(s.E, {
            variant: "text-sm/normal",
            children: v
        }), E ? (0, i.jsx)(o.Button, {
            onClick: function() {
                (0, u.openUserSettings)(d.X.SOUNDBOARD_CATEGORY, {
                    section: f.nc_.VOICE,
                    subsection: m.MJ
                }), null == n || n(), null == A || A(g.i.PRIMARY)
            },
            text: _.intl.string(_.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(a.A, {
            textOptions: {
                textOverride: _.intl.string(_.t.pj0XBN)
            },
            subscriptionTier: y.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: f.JJy.SOUNDBOARD_SOUND_PICKER,
                object: f.ZSU.BUTTON_CTA
            },
            color: l.$n.Colors.GREEN,
            onSubscribeModalClose: () => null == A ? void 0 : A(g.i.PRIMARY)
        })]
    })
}