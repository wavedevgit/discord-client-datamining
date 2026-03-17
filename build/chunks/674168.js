/** chunk id: 674168 params = (module,exports,require) **/
n.d(t, {
    m: () => f
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(571356),
    s = n(421380),
    l = n(397927),
    o = n(465794),
    d = n(212168),
    _ = n(780964),
    c = n(840065),
    u = n(287809),
    A = n(927578),
    E = n(652215),
    I = n(49999),
    g = n(788868),
    h = n(355097),
    C = n(985018),
    p = n(956790);

function f(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: f
    } = e, m = (0, r.bG)([u.default], () => u.default.getCurrentUser()), S = (t = m?.premiumType) === g.PremiumTypes.TIER_2 ? C.intl.string(C.t.jqO5Qn) : null == t ? C.intl.string(C.t.f2qjw5) : C.intl.string(C.t.SblICW), T = A.Ay.canUseCustomCallSounds(m);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: p.ne,
        backgroundClassName: p.u4,
        children: [null != f ? (0, i.jsx)(l.DUT, {
            className: p.VN,
            onClick: () => f?.(I.i.DISMISS),
            "aria-label": C.intl.string(C.t.cpT0Cq),
            children: (0, i.jsx)(l.PGe, {
                size: "xs",
                color: "currentColor",
                className: p.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: p.ex,
            children: [(0, i.jsx)(l.tvc, {
                size: "sm",
                color: "currentColor",
                className: p.ax
            }), (0, i.jsx)(l.Heading, {
                variant: "heading-sm/bold",
                children: C.intl.string(C.t.dTbAxx)
            })]
        }), (0, i.jsx)(a.E, {
            variant: "text-sm/normal",
            children: S
        }), T ? (0, i.jsx)(l.Button, {
            onClick: function() {
                (0, c.openUserSettings)(_.X.SOUNDBOARD_CATEGORY, {
                    section: E.nc_.VOICE,
                    subsection: h.MJ
                }), n?.(), f?.(I.i.PRIMARY)
            },
            text: C.intl.string(C.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(o.A, {
            textOptions: {
                textOverride: C.intl.string(C.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: E.JJy.SOUNDBOARD_SOUND_PICKER,
                object: E.ZSU.BUTTON_CTA
            },
            color: s.$n.Colors.GREEN,
            onSubscribeModalClose: () => f?.(I.i.PRIMARY)
        })]
    })
}