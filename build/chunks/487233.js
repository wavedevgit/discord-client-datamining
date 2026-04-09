/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => x
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(688810),
    o = t(919395),
    s = t(385612),
    d = t(101058),
    c = t(696451),
    _ = t(287809),
    u = t(84540),
    p = t(836602),
    A = t(854627),
    g = t(930349),
    m = t(339984),
    f = t(985018);

function h(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: _
    } = (0, l.Ay)(), h = null != t, x = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), I = (0, a.bG)([p.A], () => p.A.getPendingChanges(t ?? void 0).pendingAvatar), b = (0, d.V7)({
        userId: n.id,
        image: I
    }), {
        avatarSrc: v
    } = (0, A.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: b,
        size: r._3J.SIZE_56
    }), E = h ? x?.avatar : n.avatar, j = null != n.avatar, y = h && x?.avatar != null, C = null != I, T = null === I, S = (0, o.z5)(I, E), N = h && j, R = () => (0, s.XD)({
        uploadType: m.HL.AVATAR,
        analyticsSource: _,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(T ? h && j : C || y || j)) return (0, i.jsx)(g.kL, {
        variant: "square",
        onClick: R,
        accessibleLabel: f.intl.string(f.t["4OynCD"]),
        children: (0, i.jsx)(r.euF, {
            src: v,
            size: r._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let L = S ? {
        onClick: () => {
            (0, u.p)({
                guildId: t ?? void 0,
                avatar: null
            }), (0, o.WU)(N ? "reset" : "remove")
        },
        type: N ? "reset" : "remove",
        accessibleLabel: f.intl.string(N ? f.t.Y0mxy1 : f.t.twB3fz)
    } : void 0;
    return (0, i.jsx)(g.NW, {
        variant: "square",
        onClick: R,
        accessibleLabel: f.intl.string(f.t["4OynCD"]),
        deleteButtonConfig: L,
        children: (0, i.jsx)(r.euF, {
            src: v,
            size: r._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function x(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(h, {
        user: t,
        guildId: n
    })
}