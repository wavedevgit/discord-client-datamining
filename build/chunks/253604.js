/** chunk id: 253604, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(101058),
    o = n(836602),
    c = n(287070),
    d = n(83118);

function u(e) {
    var t;
    let {
        user: u,
        disabledInputs: _,
        containerClassName: p
    } = e, {
        reducedMotion: m
    } = i.useContext(s.CZY), {
        pendingAvatar: g,
        pendingBanner: A,
        pendingAvatarDecoration: f,
        pendingProfileEffect: b,
        pendingDisplayNameStyles: h,
        pendingThemeColors: E,
        pendingPronouns: O,
        pendingBio: x,
        tryItOutThemeColors: C,
        tryItOutAvatar: S,
        tryItOutBanner: T,
        tryItOutAvatarDecoration: I,
        tryItOutDisplayNameStyles: N
    } = (0, l.cf)([o.A], () => (function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    })({}, o.A.getPendingChanges(), o.A.getTryItOutChanges())), y = (0, a.V7)({
        userId: u.id,
        image: null != S ? S : g
    });
    return (0, r.jsx)(c.A, {
        containerClassName: p,
        user: u,
        pendingPronouns: O,
        pendingBio: x,
        pendingBanner: null != (t = null != T ? T : A) ? t : n(636763),
        pendingDisplayNameStyles: null != N ? N : h,
        pendingAvatar: y,
        pendingThemeColors: null != C ? C : E,
        pendingAvatarDecoration: void 0 !== I ? I : f,
        pendingProfileEffect: b,
        avatarClassName: null != S || null != g || m.enabled ? void 0 : d.W,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        disabledInputs: _,
        hideExampleButton: !0
    })
}