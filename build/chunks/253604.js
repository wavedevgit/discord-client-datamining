/** chunk id: 253604 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var a = t(627968),
    i = t(64700),
    s = t(311907),
    r = t(397927),
    o = t(101058),
    l = t(836602),
    d = t(287070),
    c = t(83118);

function u(e) {
    let {
        user: n,
        disabledInputs: u,
        containerClassName: p
    } = e, {
        reducedMotion: g
    } = i.useContext(r.CZY), {
        pendingAvatar: C,
        pendingBanner: m,
        pendingAvatarDecoration: b,
        pendingProfileEffect: f,
        pendingDisplayNameStyles: y,
        pendingThemeColors: h,
        pendingPronouns: A,
        pendingBio: _,
        tryItOutThemeColors: v,
        tryItOutAvatar: T,
        tryItOutBanner: x,
        tryItOutAvatarDecoration: P,
        tryItOutDisplayNameStyles: j
    } = (0, s.cf)([l.A], () => {
        let e = l.A.getPendingChanges(),
            n = l.A.getTryItOutChanges();
        return {
            ...e,
            ...n
        }
    }), w = (0, o.V7)({
        userId: n.id,
        image: T ?? C
    });
    return (0, a.jsx)(d.A, {
        containerClassName: p,
        user: n,
        pendingPronouns: A,
        pendingBio: _,
        pendingBanner: x ?? m ?? t(636763),
        pendingDisplayNameStyles: j ?? y,
        pendingAvatar: w,
        pendingThemeColors: v ?? h,
        pendingAvatarDecoration: void 0 !== P ? P : b,
        pendingProfileEffect: f,
        avatarClassName: null != T || null != C || g.enabled ? void 0 : c.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: u,
        hideExampleButton: !0
    })
}