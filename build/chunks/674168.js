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
    h = n(788868),
    g = n(985018),
    C = n(426513);

function p(e) {
    var t;
    let {
        onClose: n,
        markAsDismissed: p
    } = e, T = (0, r.bG)([_.default], () => _.default.getCurrentUser()), S = (t = T?.premiumType) === h.PremiumTypes.TIER_2 ? g.intl.string(g.t.jqO5Qn) : null == t ? g.intl.string(g.t.f2qjw5) : g.intl.string(g.t.SblICW), b = A.Ay.canUseCustomCallSounds(T);
    return (0, i.jsxs)(d.A, {
        isShown: !0,
        type: d.i.PREMIUM,
        className: C.ne,
        backgroundClassName: C.u4,
        children: [null != p ? (0, i.jsx)(o.DUT, {
            className: C.VN,
            onClick: () => p?.(I.i.DISMISS),
            "aria-label": g.intl.string(g.t.cpT0Cq),
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
                children: g.intl.string(g.t.dTbAxx)
            })]
        }), (0, i.jsx)(l.E, {
            variant: "text-sm/normal",
            children: S
        }), b ? (0, i.jsx)(o.Button, {
            onClick: function() {
                (0, u.openUserSettings)(c.X.SOUNDBOARD_CATEGORY), n?.(), p?.(I.i.PRIMARY)
            },
            text: g.intl.string(g.t.RzWDqY),
            fullWidth: !0
        }) : (0, i.jsx)(a.A, {
            textOptions: {
                textOverride: g.intl.string(g.t.pj0XBN)
            },
            subscriptionTier: h.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: E.JJy.SOUNDBOARD_SOUND_PICKER,
                object: E.ZSU.BUTTON_CTA
            },
            color: s.$n.Colors.GREEN,
            onSubscribeModalClose: () => p?.(I.i.PRIMARY)
        })]
    })
}