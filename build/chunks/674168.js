/** chunk id: 674168 params = (module,exports,require) **/
n.d(t, {
    m: () => p
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(571356),
    s = n(421380),
    o = n(397927),
    a = n(465794),
    d = n(212168),
    c = n(780964),
    u = n(840065),
    A = n(287809),
    E = n(927578),
    _ = n(652215),
    I = n(49999),
    g = n(788868),
    C = n(985018),
    h = n(955148);

function p(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: p
    } = e, T = (0, l.bG)([A.default], () => A.default.getCurrentUser()), S = (t = T?.premiumType) === g.PremiumTypes.TIER_2 ? C.intl.string(C.t.jqO5Qn) : null == t ? C.intl.string(C.t.f2qjw5) : C.intl.string(C.t.SblICW), N = E.Ay.canUseCustomCallSounds(T);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: h.ne,
        backgroundClassName: h.u4,
        children: [null != p ? (0, i.jsx)(o.DUT, {
            className: h.VN,
            onClick: () => p?.(I.i.DISMISS),
            "aria-label": C.intl.string(C.t.cpT0Cq),
            children: (0, i.jsx)(o.PGe, {
                size: "xs",
                color: "currentColor",
                className: h.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: h.ex,
            children: [(0, i.jsx)(o.tvc, {
                size: "sm",
                color: "currentColor",
                className: h.ax
            }), (0, i.jsx)(o.Heading, {
                variant: "heading-sm/bold",
                children: C.intl.string(C.t.dTbAxx)
            })]
        }), (0, i.jsx)(r.E, {
            variant: "text-sm/normal",
            children: S
        }), N ? (0, i.jsx)(o.Button, {
            onClick: function() {
                (0, u.openUserSettings)(c.X.SOUNDBOARD_CATEGORY), n?.(), p?.(I.i.PRIMARY)
            },
            text: C.intl.string(C.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(a.A, {
            textOptions: {
                textOverride: C.intl.string(C.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: _.JJy.SOUNDBOARD_SOUND_PICKER,
                object: _.ZSU.BUTTON_CTA
            },
            color: s.$n.Colors.GREEN,
            onSubscribeModalClose: () => p?.(I.i.PRIMARY)
        })]
    })
}