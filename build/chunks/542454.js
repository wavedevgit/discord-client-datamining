/** chunk id: 542454 params = (module,exports,require) **/
l.d(n, {
    A: () => f
});
var t = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    r = l(311907),
    o = l(827734),
    d = l(397927),
    c = l(654107),
    u = l(101058),
    m = l(84540),
    A = l(836602),
    p = l(950191),
    x = l(101928),
    g = l(548612);

function f(e) {
    let {
        user: n,
        guildId: l,
        disabled: s = !1
    } = e, f = (0, p.Ay)(n.id, l), {
        pendingThemeColors: h,
        pendingAvatar: v
    } = (0, r.cf)([A.A], () => {
        let e = A.A.getPendingChanges(l ?? void 0);
        return {
            pendingThemeColors: e.pendingThemeColors,
            pendingAvatar: e.pendingAvatar
        }
    }), j = (0, u.V7)({
        userId: n.id,
        image: v
    }), {
        primaryColor: I,
        secondaryColor: N
    } = (0, x.A)({
        user: n,
        displayProfile: f,
        pendingThemeColors: h,
        pendingAvatarSrc: j ?? void 0,
        isPreview: !0
    }), y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(), C = null != j ? j : n.getAvatarURL(l ?? void 0, 80), b = (0, c.rh)(C, y, !1), E = i.useCallback(e => {
        let n = a()(e, f?.themeColors);
        (0, m.p)({
            guildId: l ?? void 0,
            themeColors: n ? void 0 : e
        })
    }, [f?.themeColors, l]);
    return null == I || null == N ? null : (0, t.jsx)(g.A, {
        primaryColor: I,
        secondaryColor: N,
        onSelectPrimaryColor: e => {
            e !== I && E([e, N])
        },
        onSelectSecondaryColor: e => {
            e !== N && E([I, e])
        },
        suggestedColors: b,
        disabled: s
    })
}