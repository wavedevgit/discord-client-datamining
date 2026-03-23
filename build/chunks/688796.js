/** chunk id: 688796 params = (module,exports,require) **/
n.d(e, {
    G: () => N,
    default: () => R
});
var i = n(627968);
n(64700);
var a = n(397927),
    o = n(287070),
    r = n(950191),
    s = n(101928),
    l = n(287809),
    A = n(87719),
    c = n(414345),
    _ = n(377108),
    d = n(244975),
    u = n(788868),
    L = n(652215),
    m = n(339984),
    g = n(985018),
    E = n(698290);

function N(t) {
    let {
        uploadType: e,
        imageSrc: o,
        analyticsSource: r
    } = t, s = l.default.getCurrentUser();
    return null != s && ((0, a.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(n.bind(n, 688796));
        return n => (0, i.jsx)(t, {
            user: s,
            imageSrc: o,
            uploadType: e,
            analyticsSource: r,
            analyticsLocation: {
                section: L.JJy.USER_PROFILE,
                object: L.ZSU.BUTTON_CTA
            },
            onSecondaryClick: a.s7G,
            ...n
        })
    }), !0)
}

function R(t) {
    let {
        user: e,
        uploadType: n,
        imageSrc: a,
        onClose: l,
        analyticsSource: L,
        analyticsLocation: N,
        onSecondaryClick: R,
        ...C
    } = t, f = (0, r.Ay)(e.id), {
        primaryColor: x,
        secondaryColor: v
    } = (0, s.A)({
        user: e,
        displayProfile: f,
        pendingAvatarSrc: n === m.HL.AVATAR ? a : void 0,
        isPreview: !0
    }), p = n === m.HL.AVATAR || n === m.HL.BANNER, T = null != a, y = (0, _.u)(n === m.HL.AVATAR ? u.e.ANIMATED_AVATAR_MODAL_UPSELL : u.e.ANIMATED_BANNER_MODAL_UPSELL), b = (0, _.A)(n === m.HL.AVATAR ? u.e.ANIMATED_AVATAR_MODAL_UPSELL : u.e.ANIMATED_BANNER_MODAL_UPSELL);
    return p ? (0, c.g1)({
        location: "getReducedMotionImageUrl"
    }) ? (0, i.jsx)(d.F, {
        title: n === m.HL.AVATAR ? g.intl.string(g.t.X7tO60) : g.intl.string(g.t.zXPa2C),
        subtitle: n === m.HL.AVATAR ? g.intl.string(g.t.ifCRdB) : g.intl.string(g.t.yQAnf4),
        graphic: b,
        onSecondaryClick: () => {
            R?.(), (0, A.x)(l)
        },
        secondaryCTA: g.intl.string(g.t.PcTCB7),
        onClose: l,
        ...C
    }) : (0, i.jsx)(d.A, {
        artURL: T ? void 0 : y,
        modalClassName: T ? E.yl : void 0,
        modalContentClassName: T ? E.jE : void 0,
        type: n === m.HL.AVATAR ? u.e.ANIMATED_AVATAR_MODAL_UPSELL : u.e.ANIMATED_BANNER_MODAL_UPSELL,
        title: n === m.HL.AVATAR ? g.intl.string(g.t.X7tO60) : g.intl.string(g.t.zXPa2C),
        body: n === m.HL.AVATAR ? g.intl.string(g.t.ifCRdB) : g.intl.string(g.t.yQAnf4),
        glowUp: n === m.HL.AVATAR ? g.intl.string(g.t.ifCRdB) : g.intl.string(g.t.yQAnf4),
        onSecondaryClick: () => {
            R?.(), (0, A.x)(l)
        },
        secondaryCTA: g.intl.string(g.t.PcTCB7),
        onClose: l,
        enableArtBoxShadow: !1,
        analyticsSource: L,
        analyticsLocation: N,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: T ? (0, i.jsx)("div", {
            className: E.wC,
            children: (0, i.jsx)(o.A, {
                containerClassName: E.i1,
                user: e,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: n === m.HL.AVATAR ? a : void 0,
                pendingBanner: n === m.HL.BANNER ? a : void 0,
                pendingThemeColors: [x, v],
                hideExampleButton: !0
            })
        }) : void 0,
        ...C
    }) : null
}