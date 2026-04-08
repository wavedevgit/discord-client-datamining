/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => h
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(688810),
    s = t(919395),
    o = t(385612),
    d = t(101058),
    c = t(696451),
    u = t(287809),
    _ = t(84540),
    p = t(836602),
    A = t(854627),
    g = t(930349),
    m = t(339984),
    I = t(985018);

function f(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: u
    } = (0, l.Ay)(), f = null != t, h = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), x = (0, a.bG)([p.A], () => p.A.getPendingChanges(t ?? void 0).pendingAvatar), v = (0, d.V7)({
        userId: n.id,
        image: x
    }), {
        avatarSrc: E
    } = (0, A.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: v,
        size: r._3J.SIZE_56
    }), b = f ? h?.avatar : n.avatar, C = null != n.avatar, y = f && h?.avatar != null, T = null != x, j = null === x, S = (0, s.z5)(x, b), N = () => (0, o.XD)({
        uploadType: m.HL.AVATAR,
        analyticsSource: u,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(j ? f && C : T || y || C)) return (0, i.jsx)(g.kL, {
        variant: "square",
        onClick: N,
        accessibleLabel: I.intl.string(I.t["4OynCD"]),
        children: (0, i.jsx)(r.euF, {
            src: E,
            size: r._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let R = f && C,
        L = S ? {
            onClick: () => {
                (0, _.p)({
                    guildId: t ?? void 0,
                    avatar: null
                }), (0, s.WU)(null)
            },
            type: R ? "reset" : "remove",
            accessibleLabel: I.intl.string(R ? I.t.Y0mxy1 : I.t.twB3fz)
        } : void 0;
    return (0, i.jsx)(g.NW, {
        variant: "square",
        onClick: N,
        accessibleLabel: I.intl.string(I.t["4OynCD"]),
        deleteButtonConfig: L,
        children: (0, i.jsx)(r.euF, {
            src: E,
            size: r._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function h(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(f, {
        user: t,
        guildId: n
    })
}