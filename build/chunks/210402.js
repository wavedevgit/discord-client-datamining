/** chunk id: 210402 params = (module,exports,require) **/
t.d(n, {
    default: () => _
});
var a = t(627968);
t(64700);
var s = t(87719),
    i = t(244975),
    r = t(788868),
    l = t(652215),
    c = t(985018),
    o = t(548360),
    d = t(974055);

function _(e) {
    let {
        onClose: n,
        analyticsSource: t,
        onLearnMore: _,
        ...u
    } = e, m = r.pe.TIER_2, A = c.intl.format(c.t.hDMlqD, {
        onLearnMore: function() {
            _?.(), n(), (0, s.e)()
        }
    });
    return (0, a.jsx)(i.A, {
        artURL: d.A,
        artContainerClassName: o.z,
        type: r.e.VIDEO_BACKGROUNDS_MODAL,
        title: c.intl.string(c.t.fHqiDW),
        body: A,
        glowUp: A,
        analyticsSource: t,
        analyticsLocation: {
            page: l.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: l.ZSU.BUTTON_CTA
        },
        onClose: n,
        subscriptionTier: m,
        ...u
    })
}