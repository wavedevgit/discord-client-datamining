/** chunk id: 530951 params = (module,exports,require) **/
s.d(n, {
    default: () => E
});
var i = s(627968);
s(64700);
var e = s(976860),
    c = s(954571),
    a = s(414345),
    o = s(244975),
    r = s(788868),
    l = s(652215),
    _ = s(985018),
    d = s(733625),
    p = s(936037);

function u() {
    return (0, i.jsx)("div", {
        className: d.J,
        children: (0, i.jsx)("img", {
            src: p,
            className: d.s,
            alt: ""
        })
    })
}

function E(t) {
    let {
        onClose: n,
        source: s,
        ...d
    } = t;

    function E() {
        c.default.track(l.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: l.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
            location_object: l.ZSU.NAVIGATION_LINK
        }), n(), (0, e.pX)(l.BVt.APPLICATION_STORE)
    }
    return (0, a.g1)({
        location: "PremiumForLaterUpsell"
    }) ? (0, i.jsx)(o.F, {
        title: _.intl.string(_.t.w4DRbZ),
        subtitle: _.intl.string(_.t.F6u3E3),
        graphic: {
            src: p,
            type: "image"
        },
        secondaryCTA: _.intl.string(_.t.PcTCB7),
        onSecondaryClick: E,
        onClose: n,
        ...d
    }) : (0, i.jsx)(o.A, {
        artElement: (0, i.jsx)(u, {}),
        type: r.e.FOR_LATER_MODAL_UPSELL,
        title: _.intl.string(_.t.w4DRbZ),
        body: _.intl.string(_.t.F6u3E3),
        glowUp: _.intl.string(_.t.F6u3E3),
        secondaryCTA: _.intl.string(_.t.PcTCB7),
        onSecondaryClick: E,
        showEnhancedUpsell: !0,
        analyticsSource: s,
        analyticsLocation: {
            section: l.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
            object: l.ZSU.BUTTON_CTA
        },
        onClose: n,
        ...d
    })
}