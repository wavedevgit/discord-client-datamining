/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => f
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
    m = t(339984),
    h = t(985018);

function I(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: u
    } = (0, r.Ay)(), I = null != t, f = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), x = (0, a.bG)([p.A], () => p.A.getPendingChanges(t ?? void 0).pendingAvatar), v = (0, o.V7)({
        userId: n.id,
        image: x
    }), {
        avatarSrc: b
    } = (0, A.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: v,
        size: l._3J.SIZE_56
    }), E = I ? f?.avatar : n.avatar, j = null != n.avatar, y = I && f?.avatar != null, T = null != x, N = null === x, S = (0, s.z5)(x, E), C = I && j, R = () => (0, d.XD)({
        uploadType: m.HL.AVATAR,
        analyticsSource: u,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(N ? I && j : T || y || j)) return (0, i.jsx)(g.kL, {
        variant: "square",
        onClick: R,
        accessibleLabel: h.intl.string(h.t["4OynCD"]),
        children: (0, i.jsx)(l.euF, {
            src: b,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let L = S ? {
        onClick: () => {
            (0, _.p)({
                guildId: t ?? void 0,
                avatar: null
            }), (0, s.WU)(C ? "reset" : "remove")
        },
        type: C ? "reset" : "remove",
        accessibleLabel: h.intl.string(C ? h.t.Y0mxy1 : h.t.twB3fz)
    } : void 0;
    return (0, i.jsx)(g.NW, {
        variant: "square",
        onClick: R,
        accessibleLabel: h.intl.string(h.t["4OynCD"]),
        deleteButtonConfig: L,
        children: (0, i.jsx)(l.euF, {
            src: b,
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