/** chunk id: 688796, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => E,
    default: () => x
});
var a = n(627968);
n(64700);
var l = n(397927),
    s = n(287070),
    i = n(950191),
    r = n(101928),
    c = n(287809),
    o = n(87719),
    u = n(414345),
    d = n(377108),
    A = n(244975),
    g = n(788868),
    h = n(652215),
    f = n(339984),
    C = n(985018),
    m = n(94184);

function E(e) {
    let {
        uploadType: t,
        imageSrc: s,
        analyticsSource: i
    } = e, r = c.default.getCurrentUser();
    return null != r && ((0, l.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(n.bind(n, 688796));
        return n => (0, a.jsx)(e, {
            user: r,
            imageSrc: s,
            uploadType: t,
            analyticsSource: i,
            analyticsLocation: {
                section: h.JJy.USER_PROFILE,
                object: h.ZSU.BUTTON_CTA
            },
            onSecondaryClick: l.s7G,
            ...n
        })
    }), !0)
}

function x(e) {
    let {
        user: t,
        uploadType: n,
        imageSrc: l,
        onClose: c,
        analyticsSource: h,
        analyticsLocation: E,
        onSecondaryClick: x,
        ...p
    } = e, T = (0, i.Ay)(t.id), {
        primaryColor: R,
        secondaryColor: N
    } = (0, r.A)({
        user: t,
        displayProfile: T,
        pendingAvatarSrc: n === f.HL.AVATAR ? l : void 0,
        isPreview: !0
    }), L = n === f.HL.AVATAR || n === f.HL.BANNER, y = null != l, _ = (0, d.u)(n === f.HL.AVATAR ? g.e.ANIMATED_AVATAR_MODAL_UPSELL : g.e.ANIMATED_BANNER_MODAL_UPSELL), j = (0, d.A)(n === f.HL.AVATAR ? g.e.ANIMATED_AVATAR_MODAL_UPSELL : g.e.ANIMATED_BANNER_MODAL_UPSELL);
    return L ? (0, u.g)({
        location: "getReducedMotionImageUrl"
    }) ? (0, a.jsx)(A.F, {
        title: n === f.HL.AVATAR ? C.intl.string(C.t.X7tO60) : C.intl.string(C.t.zXPa2C),
        subtitle: n === f.HL.AVATAR ? C.intl.string(C.t.ifCRdB) : C.intl.string(C.t.yQAnf4),
        graphic: j,
        onSecondaryClick: () => {
            x?.(), (0, o.x)(c)
        },
        secondaryCTA: C.intl.string(C.t.PcTCB7),
        onClose: c,
        showEnhancedUpsell: !0
    }) : (0, a.jsx)(A.A, {
        artURL: y ? void 0 : _,
        modalClassName: y ? m.yl : void 0,
        modalContentClassName: y ? m.jE : void 0,
        type: n === f.HL.AVATAR ? g.e.ANIMATED_AVATAR_MODAL_UPSELL : g.e.ANIMATED_BANNER_MODAL_UPSELL,
        title: n === f.HL.AVATAR ? C.intl.string(C.t.X7tO60) : C.intl.string(C.t.zXPa2C),
        body: n === f.HL.AVATAR ? C.intl.string(C.t.ifCRdB) : C.intl.string(C.t.yQAnf4),
        glowUp: n === f.HL.AVATAR ? C.intl.string(C.t.ifCRdB) : C.intl.string(C.t.yQAnf4),
        onSecondaryClick: () => {
            x?.(), (0, o.x)(c)
        },
        secondaryCTA: C.intl.string(C.t.PcTCB7),
        onClose: c,
        enableArtBoxShadow: !1,
        analyticsSource: h,
        analyticsLocation: E,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: y ? (0, a.jsx)("div", {
            className: m.wC,
            children: (0, a.jsx)(s.A, {
                containerClassName: m.i1,
                user: t,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: n === f.HL.AVATAR ? l : void 0,
                pendingBanner: n === f.HL.BANNER ? l : void 0,
                pendingThemeColors: [R, N],
                hideExampleButton: !0
            })
        }) : void 0,
        ...p
    }) : null
}