/** chunk id: 253604 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(101058),
    o = n(836602),
    d = n(287070),
    c = n(463328);

function u(e) {
    let {
        user: t,
        disabledInputs: u,
        containerClassName: m
    } = e, {
        reducedMotion: g
    } = s.useContext(a.CZY), {
        pendingAvatar: _,
        pendingBanner: x,
        pendingAvatarDecoration: A,
        pendingProfileEffect: h,
        pendingDisplayNameStyles: p,
        pendingThemeColors: T,
        pendingPronouns: f,
        pendingBio: S,
        tryItOutThemeColors: b,
        tryItOutAvatar: E,
        tryItOutBanner: C,
        tryItOutAvatarDecoration: N,
        tryItOutDisplayNameStyles: v
    } = (0, l.cf)([o.A], () => {
        let e = o.A.getPendingChanges(),
            t = o.A.getTryItOutChanges();
        return {
            ...e,
            ...t
        }
    }), I = (0, r.V7)({
        userId: t.id,
        image: E ?? _
    });
    return (0, i.jsx)(d.A, {
        containerClassName: m,
        user: t,
        pendingPronouns: f,
        pendingBio: S,
        pendingBanner: C ?? x ?? n(636763),
        pendingDisplayNameStyles: v ?? p,
        pendingAvatar: I,
        pendingThemeColors: b ?? T,
        pendingAvatarDecoration: void 0 !== N ? N : A,
        pendingProfileEffect: h,
        avatarClassName: null != E || null != _ || g.enabled ? void 0 : c.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0
    })
}