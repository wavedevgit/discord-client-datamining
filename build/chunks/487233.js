/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    s = t(688810),
    r = t(919395),
    d = t(385612),
    o = t(101058),
    c = t(696451),
    u = t(287809),
    A = t(84540),
    _ = t(836602),
    p = t(854627),
    x = t(930349),
    g = t(339984),
    m = t(985018);

function I(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: u
    } = (0, s.Ay)(), I = null != t, f = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), b = (0, a.bG)([_.A], () => _.A.getPendingChanges(t ?? void 0).pendingAvatar), h = (0, o.V7)({
        userId: n.id,
        image: b
    }), {
        avatarSrc: v
    } = (0, p.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: h,
        size: l._3J.SIZE_56
    }), j = I ? f?.avatar : n.avatar, C = null != n.avatar, y = I && f?.avatar != null, N = null != b, E = null === b, T = (0, r.z5)(b, j), L = () => (0, d.XD)({
        uploadType: g.HL.AVATAR,
        analyticsSource: u,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(E ? I && C : N || y || C)) return (0, i.jsx)(x.k, {
        variant: "square",
        onClick: L,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        children: (0, i.jsx)(l.euF, {
            src: v,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let O = I && C,
        P = T ? {
            onClick: () => {
                (0, A.p)({
                    guildId: t ?? void 0,
                    avatar: null
                }), (0, r.WU)(null)
            },
            type: O ? "reset" : "remove",
            accessibleLabel: m.intl.string(O ? m.t.GaEG4t : m.t["2A+piL"])
        } : void 0;
    return (0, i.jsx)(x.N, {
        variant: "square",
        onClick: L,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        deleteButtonConfig: P,
        children: (0, i.jsx)(l.euF, {
            src: v,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function f(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(I, {
        user: t,
        guildId: n
    })
}