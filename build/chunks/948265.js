/** chunk id: 948265 params = (module,exports,require) **/
e.d(o, {
    default: () => d
});
var n = e(627968);
e(64700);
var c = e(87719),
    i = e(414345),
    a = e(377108),
    s = e(244975),
    l = e(652215),
    r = e(985018);

function d(t) {
    let {
        premiumUpsellType: o,
        title: e,
        body: d,
        glowUp: p,
        analyticsSource: u,
        onClose: C,
        onSecondaryClick: h,
        ...y
    } = t, k = (0, a.u)(o), T = (0, a.A)(o);
    return (0, i.g1)({
        location: "PremiumProfileDecorationUpsell"
    }) ? (0, n.jsx)(s.F, {
        title: e,
        subtitle: d,
        graphic: T,
        onSecondaryClick: () => {
            h(), (0, c.x)(C)
        },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onClose: C,
        ...y
    }) : (0, n.jsx)(s.A, {
        artURL: k,
        type: o,
        title: e,
        body: d,
        glowUp: p,
        onSecondaryClick: () => {
            h(), (0, c.x)(C)
        },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onClose: C,
        enableArtBoxShadow: !1,
        analyticsSource: u,
        analyticsLocation: {
            section: l.JJy.USER_PROFILE,
            object: l.ZSU.BUTTON_CTA
        },
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        ...y
    })
}