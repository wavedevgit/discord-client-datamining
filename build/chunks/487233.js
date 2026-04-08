/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => x
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(688810),
    s = t(919395),
    d = t(385612),
    o = t(101058),
    c = t(696451),
    u = t(287809),
    _ = t(84540),
    p = t(836602),
    A = t(854627),
    g = t(930349),
    I = t(339984),
    m = t(985018);

function f(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: u
    } = (0, r.Ay)(), f = null != t, x = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), h = (0, a.bG)([p.A], () => p.A.getPendingChanges(t ?? void 0).pendingAvatar), v = (0, o.V7)({
        userId: n.id,
        image: h
    }), {
        avatarSrc: E
    } = (0, A.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: v,
        size: l._3J.SIZE_56
    }), b = f ? x?.avatar : n.avatar, y = null != n.avatar, j = f && x?.avatar != null, T = null != h, N = null === h, S = (0, s.z5)(h, b), C = () => (0, d.XD)({
        uploadType: I.HL.AVATAR,
        analyticsSource: u,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(N ? f && y : T || j || y)) return (0, i.jsx)(g.kL, {
        variant: "square",
        onClick: C,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        children: (0, i.jsx)(l.euF, {
            src: E,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let R = f && y,
        L = S ? {
            onClick: () => {
                (0, _.p)({
                    guildId: t ?? void 0,
                    avatar: null
                }), (0, s.WU)(null)
            },
            type: R ? "reset" : "remove",
            accessibleLabel: m.intl.string(R ? m.t.Y0mxy1 : m.t.twB3fz)
        } : void 0;
    return (0, i.jsx)(g.NW, {
        variant: "square",
        onClick: C,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        deleteButtonConfig: L,
        children: (0, i.jsx)(l.euF, {
            src: E,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function x(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(f, {
        user: t,
        guildId: n
    })
}