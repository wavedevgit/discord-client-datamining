/** chunk id: 542454 params = (module,exports,require) **/
l.d(t, {
    A: () => f
});
var n = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    r = l(311907),
    o = l(827734),
    d = l(397927),
    c = l(654107),
    u = l(101058),
    m = l(84540),
    p = l(836602),
    x = l(950191),
    A = l(101928),
    g = l(548612);

function f(e) {
    let {
        user: t,
        guildId: l,
        disabled: s = !1
    } = e, f = (0, x.Ay)(t.id, l), {
        pendingThemeColors: h,
        pendingAvatar: j
    } = (0, r.cf)([p.A], () => {
        let e = p.A.getPendingChanges(l ?? void 0);
        return {
            pendingThemeColors: e.pendingThemeColors,
            pendingAvatar: e.pendingAvatar
        }
    }), v = (0, u.V7)({
        userId: t.id,
        image: j
    }), {
        primaryColor: I,
        secondaryColor: N
    } = (0, A.A)({
        user: t,
        displayProfile: f,
        pendingThemeColors: h,
        pendingAvatarSrc: v ?? void 0,
        isPreview: !0
    }), y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), C = null != v ? v : t.getAvatarURL(l ?? void 0, 80), E = (0, c.rh)(C, y, !1), T = i.useCallback(e => {
        let t = a()(e, f?.themeColors);
        (0, m.p)({
            guildId: l ?? void 0,
            themeColors: t ? void 0 : e
        })
    }, [f?.themeColors, l]);
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