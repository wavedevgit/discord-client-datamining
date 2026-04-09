/** chunk id: 542454 params = (module,exports,require) **/
t.d(l, {
    A: () => f
});
var n = t(627968),
    i = t(64700),
    s = t(33851),
    a = t.n(s),
    r = t(311907),
    o = t(827734),
    d = t(397927),
    c = t(654107),
    u = t(101058),
    m = t(84540),
    x = t(836602),
    p = t(950191),
    A = t(101928),
    g = t(548612);

function f(e) {
    let {
        user: l,
        guildId: t,
        disabled: s = !1
    } = e, f = (0, p.Ay)(l.id, t), {
        pendingThemeColors: h,
        pendingAvatar: j
    } = (0, r.cf)([x.A], () => {
        let e = x.A.getPendingChanges(t ?? void 0);
        return {
            pendingThemeColors: e.pendingThemeColors,
            pendingAvatar: e.pendingAvatar
        }
    }), v = (0, u.V7)({
        userId: l.id,
        image: j
    }), {
        primaryColor: I,
        secondaryColor: N
    } = (0, A.A)({
        user: l,
        displayProfile: f,
        pendingThemeColors: h,
        pendingAvatarSrc: v ?? void 0,
        isPreview: !0
    }), y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), C = null != v ? v : l.getAvatarURL(t ?? void 0, 80), E = (0, c.rh)(C, y, !1), T = i.useCallback(e => {
        let l = a()(e, f?.themeColors);
        (0, m.p)({
            guildId: t ?? void 0,
            themeColors: l ? void 0 : e
        })
    }, [f?.themeColors, t]);
    return null == I || null == N ? null : (0, n.jsx)(g.A, {
        primaryColor: I,
        secondaryColor: N,
        onSelectPrimaryColor: e => {
            e !== I && T([e, N])
        },
        onSelectSecondaryColor: e => {
            e !== N && T([I, e])
        },
        suggestedColors: E,
        disabled: s
    })
}