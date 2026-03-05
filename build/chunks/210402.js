/** chunk id: 210402, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => u
});
var a = i(627968);
i(64700);
var n = i(87719),
    s = i(414345),
    o = i(244975),
    c = i(788868),
    r = i(652215),
    l = i(985018),
    d = i(451067),
    p = i(196436);

function u(t) {
    let {
        onClose: e,
        analyticsSource: i,
        onLearnMore: u,
        ..._
    } = t, b = c.pe.TIER_2, g = l.intl.format(l.t.hDMlqD, {
        onLearnMore: function() {
            u?.(), e(), (0, n.e)()
        }
    });
    return (0, s.g1)({
        location: "PremiumVideoBackgroundsUpsell"
    }) ? (0, a.jsx)(o.F, {
        title: l.intl.string(l.t.fHqiDW),
        subtitle: g,
        graphic: {
            src: p.A,
            type: "image"
        },
        onSecondaryClick: e,
        secondaryCTA: l.intl.string(l.t["13/7kX"]),
        onClose: e,
        subscriptionTier: b,
        ..._
    }) : (0, a.jsx)(o.A, {
        artURL: p.A,
        artContainerClassName: d.z,
        type: c.e.VIDEO_BACKGROUNDS_MODAL,
        title: l.intl.string(l.t.fHqiDW),
        body: g,
        glowUp: g,
        analyticsSource: i,
        analyticsLocation: {
            page: r.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: r.ZSU.BUTTON_CTA
        },
        onClose: e,
        subscriptionTier: b,
        ..._
    })
}