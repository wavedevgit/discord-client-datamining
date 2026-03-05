/** chunk id: 688796, original params: t,n,e (module,exports,require) **/
e.d(n, {
    G: () => g,
    default: () => p
});
var i = e(627968);
e(64700);
var A = e(397927),
    a = e(287070),
    o = e(950191),
    l = e(101928),
    s = e(287809),
    r = e(87719),
    d = e(414345),
    c = e(377108),
    L = e(244975),
    C = e(788868),
    _ = e(652215),
    u = e(339984),
    T = e(985018),
    R = e(94184);

function g(t) {
    let {
        uploadType: n,
        imageSrc: a,
        analyticsSource: o
    } = t, l = s.default.getCurrentUser();
    return null != l && ((0, A.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(e.bind(e, 688796));
        return e => (0, i.jsx)(t, {
            user: l,
            imageSrc: a,
            uploadType: n,
            analyticsSource: o,
            analyticsLocation: {
                section: _.JJy.USER_PROFILE,
                object: _.ZSU.BUTTON_CTA
            },
            onSecondaryClick: A.s7G,
            ...e
        })
    }), !0)
}

function p(t) {
    let {
        user: n,
        uploadType: e,
        imageSrc: A,
        onClose: s,
        analyticsSource: _,
        analyticsLocation: g,
        onSecondaryClick: p,
        ...E
    } = t, N = (0, o.Ay)(n.id), {
        primaryColor: y,
        secondaryColor: m
    } = (0, l.A)({
        user: n,
        displayProfile: N,
        pendingAvatarSrc: e === u.HL.AVATAR ? A : void 0,
        isPreview: !0
    }), v = e === u.HL.AVATAR || e === u.HL.BANNER, B = null != A, S = (0, c.u)(e === u.HL.AVATAR ? C.e.ANIMATED_AVATAR_MODAL_UPSELL : C.e.ANIMATED_BANNER_MODAL_UPSELL), P = (0, c.A)(e === u.HL.AVATAR ? C.e.ANIMATED_AVATAR_MODAL_UPSELL : C.e.ANIMATED_BANNER_MODAL_UPSELL);
    return v ? (0, d.g1)({
        location: "getReducedMotionImageUrl"
    }) ? (0, i.jsx)(L.F, {
        title: e === u.HL.AVATAR ? T.intl.string(T.t.X7tO60) : T.intl.string(T.t.zXPa2C),
        subtitle: e === u.HL.AVATAR ? T.intl.string(T.t.ifCRdB) : T.intl.string(T.t.yQAnf4),
        graphic: P,
        onSecondaryClick: () => {
            p?.(), (0, r.x)(s)
        },
        secondaryCTA: T.intl.string(T.t.PcTCB7),
        onClose: s,
        ...E
    }) : (0, i.jsx)(L.A, {
        artURL: B ? void 0 : S,
        modalClassName: B ? R.yl : void 0,
        modalContentClassName: B ? R.jE : void 0,
        type: e === u.HL.AVATAR ? C.e.ANIMATED_AVATAR_MODAL_UPSELL : C.e.ANIMATED_BANNER_MODAL_UPSELL,
        title: e === u.HL.AVATAR ? T.intl.string(T.t.X7tO60) : T.intl.string(T.t.zXPa2C),
        body: e === u.HL.AVATAR ? T.intl.string(T.t.ifCRdB) : T.intl.string(T.t.yQAnf4),
        glowUp: e === u.HL.AVATAR ? T.intl.string(T.t.ifCRdB) : T.intl.string(T.t.yQAnf4),
        onSecondaryClick: () => {
            p?.(), (0, r.x)(s)
        },
        secondaryCTA: T.intl.string(T.t.PcTCB7),
        onClose: s,
        enableArtBoxShadow: !1,
        analyticsSource: _,
        analyticsLocation: g,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: B ? (0, i.jsx)("div", {
            className: R.wC,
            children: (0, i.jsx)(a.A, {
                containerClassName: R.i1,
                user: n,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: e === u.HL.AVATAR ? A : void 0,
                pendingBanner: e === u.HL.BANNER ? A : void 0,
                pendingThemeColors: [y, m],
                hideExampleButton: !0
            })
        }) : void 0,
        ...E
    }) : null
}