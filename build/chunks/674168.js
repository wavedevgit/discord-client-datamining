/** chunk id: 674168 params = (module,exports,require) **/
n.d(t, {
    m: () => p
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(571356),
    s = n(421380),
    o = n(397927),
    a = n(725807),
    d = n(212168),
    c = n(780964),
    u = n(858897),
    _ = n(287809),
    A = n(927578),
    E = n(652215),
    I = n(49999),
    g = n(788868),
    h = n(985018),
    C = n(871425);

function p(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: p
    } = e, S = (0, r.bG)([_.default], () => _.default.getCurrentUser()), T = (t = S?.premiumType) === g.PremiumTypes.TIER_2 ? h.intl.string(h.t.jqO5Qn) : null == t ? h.intl.string(h.t.f2qjw5) : h.intl.string(h.t.SblICW), b = A.Ay.canUseCustomCallSounds(S);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: C.ne,
        backgroundClassName: C.u4,
        children: [null != p ? (0, i.jsx)(o.DUT, {
            className: C.VN,
            onClick: () => p?.(I.i.DISMISS),
            "aria-label": h.intl.string(h.t.cpT0Cq),
            children: (0, i.jsx)(o.PGe, {
                size: "xs",
                color: "currentColor",
                className: C.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: C.ex,
            children: [(0, i.jsx)(o.tvc, {
                size: "sm",
                color: "currentColor",
                className: C.ax
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-sm/bold",
                children: h.intl.string(h.t.dTbAxx)
            })]
        }), (0, i.jsx)(l.E, {
            variant: "text-sm/normal",
            children: T
        }), b ? (0, i.jsx)(o.Button, {
            onClick: function() {
                (0, u.openUserSettings)(c.X.SOUNDBOARD_CATEGORY), n?.(), p?.(I.i.PRIMARY)
            },
            text: h.intl.string(h.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(a.A, {
            textOptions: {
                textOverride: h.intl.string(h.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: E.JJy.SOUNDBOARD_SOUND_PICKER,
                object: E.ZSU.BUTTON_CTA
            },
            color: s.$n.Colors.GREEN,
            onSubscribeModalClose: () => p?.(I.i.PRIMARY)
        })]
    })
}