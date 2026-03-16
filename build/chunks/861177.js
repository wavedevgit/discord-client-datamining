/** chunk id: 861177 params = (module,exports,require) **/
t.d(n, {
    default: () => b
});
var c = t(627968);
t(64700);
var _ = t(311907),
    a = t(385612),
    o = t(287809),
    r = t(927578),
    i = t(87719),
    s = t(244975),
    d = t(788868),
    p = t(652215),
    u = t(339984),
    C = t(985018),
    l = t(626072);

function b(e) {
    let {
        onClose: n,
        source: t,
        ...b
    } = e, h = (0, _.bG)([o.default], () => o.default.getCurrentUser()), y = r.Ay.isPremium(h) ? C.t.E0sNsc : C.t.UBcuto, f = C.intl.format(y, {
        onLearnMore: function() {
            n(), (0, i.e)()
        }
    });
    return (0, c.jsx)(s.A, {
        artURL: l.A,
        type: d.e.CUSTOM_PROFILE_UPSELL,
        title: C.intl.string(C.t.BbsMm4),
        body: f,
        glowUp: f,
        onSecondaryClick: () => {
            n(), (0, a.XD)({
                uploadType: u.HL.BANNER,
                analyticsSource: t
            })
        },
        secondaryCTA: C.intl.string(C.t.SpAQib),
        analyticsSource: t,
        analyticsLocation: {
            section: p.JJy.USER_PROFILE,
            object: p.ZSU.BUTTON_CTA
        },
        onClose: n,
        ...b
    })
}