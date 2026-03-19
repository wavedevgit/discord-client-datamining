/** chunk id: 407217 params = (module,exports,require) **/
t.d(n, {
    K: () => m,
    default: () => b
});
var a = t(627968);
t(64700);
var i = t(397927),
    s = t(253604),
    r = t(287809),
    o = t(87719),
    l = t(414345),
    d = t(244975),
    c = t(788868),
    u = t(652215),
    p = t(985018),
    g = t(94184),
    C = t(880223);

function m(e) {
    let {
        analyticsSource: n,
        onSubscribeFinish: s
    } = e, o = r.default.getCurrentUser();
    null != o && (0, i.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(t.bind(t, 407217));
        return t => (0, a.jsx)(e, {
            user: o,
            analyticsSource: n,
            analyticsLocation: {
                section: u.JJy.USER_PROFILE,
                object: u.ZSU.BUTTON_CTA
            },
            onSubscribeFinish: s,
            ...t
        })
    })
}

function b(e) {
    let {
        user: n,
        onClose: t,
        ...i
    } = e;
    return (0, l.g1)({
        onPremiumTryItOutProfile: !0,
        location: "PremiumTryItOutProfileUpsell"
    }) ? (0, a.jsx)(d.F, {
        title: p.intl.string(p.t.reVc0M),
        subtitle: p.intl.string(p.t.KckEj7),
        graphic: {
            src: C.A,
            type: "image"
        },
        onSecondaryClick: () => {
            (0, o.x)(t)
        },
        secondaryCTA: p.intl.string(p.t.PcTCB7),
        onClose: t,
        ...i
    }) : (0, a.jsx)(d.A, {
        modalClassName: g.yl,
        modalContentClassName: g.jE,
        type: c.e.TRY_IT_OUT_MODAL_UPSELL,
        title: p.intl.string(p.t.reVc0M),
        body: p.intl.string(p.t.KckEj7),
        glowUp: p.intl.string(p.t.reVc0M),
        onSecondaryClick: () => {
            (0, o.x)(t)
        },
        secondaryCTA: p.intl.string(p.t.PcTCB7),
        onClose: t,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: (0, a.jsx)("div", {
            className: g.wC,
            children: (0, a.jsx)(s.A, {
                containerClassName: g.i1,
                user: n,
                disabledInputs: !0
            })
        }),
        ...i
    })
}