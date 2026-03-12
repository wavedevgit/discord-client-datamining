/** chunk id: 674168 params = (module,exports,require) **/
n.d(t, {
    m: () => S
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(571356),
    l = n(421380),
    s = n(397927),
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
    p = n(752060);

function S(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: S
    } = e, f = (0, r.bG)([u.default], () => u.default.getCurrentUser()), T = (t = f?.premiumType) === g.PremiumTypes.TIER_2 ? C.intl.string(C.t.jqO5Qn) : null == t ? C.intl.string(C.t.f2qjw5) : C.intl.string(C.t.SblICW), m = A.Ay.canUseCustomCallSounds(f);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: p.ne,
        backgroundClassName: p.u4,
        children: [null != S ? (0, i.jsx)(s.DUT, {
            className: p.VN,
            onClick: () => S?.(I.i.DISMISS),
            "aria-label": C.intl.string(C.t.cpT0Cq),
            children: (0, i.jsx)(s.PGe, {
                size: "xs",
                color: "currentColor",
                className: p.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: p.ex,
            children: [(0, i.jsx)(s.tvc, {
                size: "sm",
                color: "currentColor",
                className: p.ax
            }), (0, i.jsx)(s.Heading, {
                variant: "heading-sm/bold",
                children: C.intl.string(C.t.dTbAxx)
            })]
        }), (0, i.jsx)(a.E, {
            variant: "text-sm/normal",
            children: T
        }), m ? (0, i.jsx)(s.Button, {
            onClick: function() {
                (0, c.openUserSettings)(_.X.SOUNDBOARD_CATEGORY, {
                    section: E.nc_.VOICE,
                    subsection: h.MJ
                }), n?.(), S?.(I.i.PRIMARY)
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
            color: l.$n.Colors.GREEN,
            onSubscribeModalClose: () => S?.(I.i.PRIMARY)
        })]
    })
}