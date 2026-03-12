/** chunk id: 199630 params = (module,exports,require) **/
n.d(t, {
    default: () => b
});
var s = n(627968),
    a = n(64700),
    r = n(877227),
    i = n(554146),
    o = n(793574),
    u = n(688810),
    c = n(932001),
    l = n(244975),
    _ = n(652215),
    d = n(49999),
    A = n(985018),
    S = n(129310),
    C = n(888283);

function b(e) {
    let {
        upsellType: t,
        onClose: n,
        transitionState: b
    } = e, [p, h] = (0, c.kn)([i.M.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL]);
    return (0, u.Ay)(o.A.REVERSE_TRIAL_UPSELL_MODAL), a.useEffect(() => () => {
        h(d.i.USER_DISMISS)
    }, [h]), (0, s.jsx)(l.A, {
        artURL: C,
        artContainerClassName: S.JS,
        artClassName: S.Qw,
        enableArtBoxShadow: !1,
        type: t,
        title: A.intl.string(A.t.aupMtf),
        body: A.intl.string(A.t.AXmOUb),
        bodyClassName: S.uI,
        glowUp: A.intl.string(A.t.AXmOUb),
        onSubscribeClick: () => {
            h(d.i.TAKE_ACTION)
        },
        secondaryCTA: A.intl.string(A.t.SXYIpB),
        secondaryCTAClassName: S.vh,
        footerClassName: S.qr,
        headerClassName: S.wx,
        onSecondaryClick: function() {
            h(d.i.TAKE_ACTION), n(), (0, r.pX)(_.BVt.APPLICATION_STORE)
        },
        subscribeButtonText: A.intl.string(A.t.J61px0),
        subscribeButtonClassname: S.xF,
        useSubscribeButtonGradient: !0,
        hidePremiumOfferUpsell: !0,
        showEnhancedUpsell: !0,
        hideBackButton: !0,
        analyticsLocation: {
            section: _.JJy.REVERSE_TRIAL_UPSELL_MODAL,
            object: _.ZSU.BUTTON_CTA
        },
        transitionState: b,
        onClose: () => (h(d.i.USER_DISMISS), n())
    })
}