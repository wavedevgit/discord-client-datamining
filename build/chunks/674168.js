/** chunk id: 674168 params = (module,exports,require) **/
n.d(t, {
    m: () => p
});
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(571356),
    l = n(421380),
    s = n(397927),
    o = n(725807),
    d = n(212168),
    c = n(780964),
    _ = n(858897),
    u = n(287809),
    A = n(927578),
    E = n(652215),
    I = n(49999),
    g = n(788868),
    h = n(985018),
    C = n(426513);

function p(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: p
    } = e, f = (0, r.bG)([u.default], () => u.default.getCurrentUser()), m = (t = f?.premiumType) === g.PremiumTypes.TIER_2 ? h.intl.string(h.t.jqO5Qn) : null == t ? h.intl.string(h.t.f2qjw5) : h.intl.string(h.t.SblICW), S = A.Ay.canUseCustomCallSounds(f);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: C.ne,
        backgroundClassName: C.u4,
        children: [null != p ? (0, i.jsx)(s.DUT, {
            className: C.VN,
            onClick: () => p?.(I.i.DISMISS),
            "aria-label": h.intl.string(h.t.cpT0Cq),
            children: (0, i.jsx)(s.PGe, {
                size: "xs",
                color: "currentColor",
                className: C.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: C.ex,
            children: [(0, i.jsx)(s.tvc, {
                size: "sm",
                color: "currentColor",
                className: C.ax
            }), (0, i.jsx)(s.Heading, {
                variant: "heading-sm/bold",
                children: h.intl.string(h.t.dTbAxx)
            })]
        }), (0, i.jsx)(a.E, {
            variant: "text-sm/normal",
            children: m
        }), S ? (0, i.jsx)(s.Button, {
            onClick: function() {
                (0, _.openUserSettings)(c.X.SOUNDBOARD_CATEGORY), n?.(), p?.(I.i.PRIMARY)
            },
            text: h.intl.string(h.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(o.A, {
            textOptions: {
                textOverride: h.intl.string(h.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: E.JJy.SOUNDBOARD_SOUND_PICKER,
                object: E.ZSU.BUTTON_CTA
            },
            color: l.$n.Colors.GREEN,
            onSubscribeModalClose: () => p?.(I.i.PRIMARY)
        })]
    })
}