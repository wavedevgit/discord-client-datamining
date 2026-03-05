/** chunk id: 674168 params = (module,exports,require) **/
n.d(t, {
    m: () => S
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
    I = n(652215),
    E = n(49999),
    g = n(788868),
    C = n(355097),
    h = n(985018),
    p = n(752060);

function S(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: S
    } = e, f = (0, r.bG)([u.default], () => u.default.getCurrentUser()), T = (t = f?.premiumType) === g.PremiumTypes.TIER_2 ? h.intl.string(h.t.jqO5Qn) : null == t ? h.intl.string(h.t.f2qjw5) : h.intl.string(h.t.SblICW), m = A.Ay.canUseCustomCallSounds(f);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: p.ne,
        backgroundClassName: p.u4,
        children: [null != S ? (0, i.jsx)(l.DUT, {
            className: p.VN,
            onClick: () => S?.(E.i.DISMISS),
            "aria-label": h.intl.string(h.t.cpT0Cq),
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
                children: h.intl.string(h.t.dTbAxx)
            })]
        }), (0, i.jsx)(a.E, {
            variant: "text-sm/normal",
            children: T
        }), m ? (0, i.jsx)(l.Button, {
            onClick: function() {
                (0, c.openUserSettings)(_.X.SOUNDBOARD_CATEGORY, {
                    section: I.nc_.VOICE,
                    subsection: C.MJ
                }), n?.(), S?.(E.i.PRIMARY)
            },
            text: h.intl.string(h.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(o.A, {
            textOptions: {
                textOverride: h.intl.string(h.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: I.JJy.SOUNDBOARD_SOUND_PICKER,
                object: I.ZSU.BUTTON_CTA
            },
            color: s.$n.Colors.GREEN,
            onSubscribeModalClose: () => S?.(E.i.PRIMARY)
        })]
    })
}