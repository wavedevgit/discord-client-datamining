/** chunk id: 688796 params = (module,exports,require) **/
n.d(t, {
    G: () => x,
    default: () => C
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(287070),
    o = n(950191),
    s = n(101928),
    l = n(287809),
    c = n(87719),
    _ = n(414345),
    d = n(377108),
    A = n(244975),
    u = n(788868),
    g = n(652215),
    m = n(339984),
    h = n(985018),
    L = n(826461);

function x(e) {
    let {
        uploadType: t,
        imageSrc: r,
        analyticsSource: o
    } = e, s = l.default.getCurrentUser();
    return null != s && ((0, a.mMO)(async () => {
        let {
            default: e
        } = await Promise.resolve().then(n.bind(n, 688796));
        return n => (0, i.jsx)(e, {
            user: s,
            imageSrc: r,
            uploadType: t,
            analyticsSource: o,
            analyticsLocation: {
                section: g.JJy.USER_PROFILE,
                object: g.ZSU.BUTTON_CTA
            },
            onSecondaryClick: a.s7G,
            ...n
        })
    }), !0)
}

function C(e) {
    let {
        user: t,
        uploadType: n,
        imageSrc: a,
        onClose: l,
        analyticsSource: g,
        analyticsLocation: x,
        onSecondaryClick: C,
        ...N
    } = e, f = (0, o.Ay)(t.id), {
        primaryColor: R,
        secondaryColor: p
    } = (0, s.A)({
        user: t,
        displayProfile: f,
        pendingAvatarSrc: n === m.HL.AVATAR ? a : void 0,
        isPreview: !0
    }), E = n === m.HL.AVATAR || n === m.HL.BANNER, y = null != a, T = (0, d.u)(n === m.HL.AVATAR ? u.e.ANIMATED_AVATAR_MODAL_UPSELL : u.e.ANIMATED_BANNER_MODAL_UPSELL), v = (0, d.A)(n === m.HL.AVATAR ? u.e.ANIMATED_AVATAR_MODAL_UPSELL : u.e.ANIMATED_BANNER_MODAL_UPSELL);
    return E ? (0, _.g1)({
        location: "getReducedMotionImageUrl"
    }) ? (0, i.jsx)(A.F, {
        title: n === m.HL.AVATAR ? h.intl.string(h.t.X7tO60) : h.intl.string(h.t.zXPa2C),
        subtitle: n === m.HL.AVATAR ? h.intl.string(h.t.ifCRdB) : h.intl.string(h.t.yQAnf4),
        graphic: v,
        onSecondaryClick: () => {
            C?.(), (0, c.x)(l)
        },
        secondaryCTA: h.intl.string(h.t.PcTCB7),
        onClose: l,
        ...N
    }) : (0, i.jsx)(A.A, {
        artURL: y ? void 0 : T,
        modalClassName: y ? L.yl : void 0,
        modalContentClassName: y ? L.jE : void 0,
        type: n === m.HL.AVATAR ? u.e.ANIMATED_AVATAR_MODAL_UPSELL : u.e.ANIMATED_BANNER_MODAL_UPSELL,
        title: n === m.HL.AVATAR ? h.intl.string(h.t.X7tO60) : h.intl.string(h.t.zXPa2C),
        body: n === m.HL.AVATAR ? h.intl.string(h.t.ifCRdB) : h.intl.string(h.t.yQAnf4),
        glowUp: n === m.HL.AVATAR ? h.intl.string(h.t.ifCRdB) : h.intl.string(h.t.yQAnf4),
        onSecondaryClick: () => {
            C?.(), (0, c.x)(l)
        },
        secondaryCTA: h.intl.string(h.t.PcTCB7),
        onClose: l,
        enableArtBoxShadow: !1,
        analyticsSource: g,
        analyticsLocation: x,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: y ? (0, i.jsx)("div", {
            className: L.wC,
            children: (0, i.jsx)(r.A, {
                containerClassName: L.i1,
                user: t,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: n === m.HL.AVATAR ? a : void 0,
                pendingBanner: n === m.HL.BANNER ? a : void 0,
                pendingThemeColors: [R, p],
                hideExampleButton: !0
            })
        }) : void 0,
        ...N
    }) : null
}