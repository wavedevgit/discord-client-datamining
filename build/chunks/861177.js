/** chunk id: 861177 params = (module,exports,require) **/
t.d(n, {
    default: () => h
});
var a = t(627968);
t(64700);
var i = t(311907),
    s = t(385612),
    r = t(287809),
    l = t(927578),
    c = t(87719),
    o = t(244975),
    d = t(788868),
    _ = t(652215),
    u = t(339984),
    m = t(985018),
    f = t(626072);

function h(e) {
    let {
        onClose: n,
        source: t,
        ...h
    } = e, x = (0, i.bG)([r.default], () => r.default.getCurrentUser()), A = l.Ay.isPremium(x) ? m.t.E0sNsc : m.t.UBcuto, g = m.intl.format(A, {
        onLearnMore: function() {
            n(), (0, c.e)()
        }
    });
    return (0, a.jsx)(o.A, {
        artURL: f.A,
        type: d.e.CUSTOM_PROFILE_UPSELL,
        title: m.intl.string(m.t.BbsMm4),
        body: g,
        glowUp: g,
        onSecondaryClick: () => {
            n(), (0, s.XD)({
                uploadType: u.HL.BANNER,
                analyticsSource: t
            })
        },
        secondaryCTA: m.intl.string(m.t.SpAQib),
        analyticsSource: t,
        analyticsLocation: {
            section: _.JJy.USER_PROFILE,
            object: _.ZSU.BUTTON_CTA
        },
        onClose: n,
        ...h
    })
}