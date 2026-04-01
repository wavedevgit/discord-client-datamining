/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    l = t(688810),
    r = t(919395),
    o = t(385612),
    d = t(101058),
    c = t(696451),
    u = t(287809),
    _ = t(84540),
    A = t(836602),
    x = t(854627),
    p = t(930349),
    g = t(339984),
    m = t(985018);

function I(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: u
    } = (0, l.Ay)(), I = null != t, f = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), b = (0, a.bG)([A.A], () => A.A.getPendingChanges(t ?? void 0).pendingAvatar), h = (0, d.V7)({
        userId: n.id,
        image: b
    }), {
        avatarSrc: j
    } = (0, x.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: h,
        size: s._3J.SIZE_56
    }), v = I ? f?.avatar : n.avatar, C = null != n.avatar, N = I && f?.avatar != null, y = null != b, E = null === b, T = (0, r.z5)(b, v), L = () => (0, o.XD)({
        uploadType: g.HL.AVATAR,
        analyticsSource: u,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(E ? I && C : y || N || C)) return (0, i.jsx)(p.k, {
        variant: "square",
        onClick: L,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        children: (0, i.jsx)(s.euF, {
            src: j,
            size: s._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let O = I && C,
        S = T ? {
            onClick: () => {
                (0, _.p)({
                    guildId: t ?? void 0,
                    avatar: null
                }), (0, r.WU)(null)
            },
            type: O ? "reset" : "remove",
            accessibleLabel: m.intl.string(O ? m.t.GaEG4t : m.t["2A+piL"])
        } : void 0;
    return (0, i.jsx)(p.N, {
        variant: "square",
        onClick: L,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        deleteButtonConfig: S,
        children: (0, i.jsx)(s.euF, {
            src: j,
            size: s._3J.SIZE_56,
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