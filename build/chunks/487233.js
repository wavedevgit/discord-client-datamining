/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    m: () => I
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(688810),
    o = t(919395),
    s = t(385612),
    d = t(101058),
    c = t(696451),
    _ = t(287809),
    u = t(84540),
    p = t(836602),
    A = t(854627),
    g = t(930349),
    h = t(339984),
    m = t(985018);

function f(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        newestAnalyticsLocation: _
    } = (0, r.Ay)(), f = null != t, I = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), x = (0, a.bG)([p.A], () => p.A.getPendingChanges(t ?? void 0).pendingAvatar), b = (0, d.V7)({
        userId: n.id,
        image: x
    }), {
        avatarSrc: v
    } = (0, A.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: b,
        size: l._3J.SIZE_56
    }), E = f ? I?.avatar : n.avatar, y = null != n.avatar, j = f && I?.avatar != null, T = null != x, S = null === x, C = (0, o.z5)(x, E), N = f && y, R = () => (0, s.XD)({
        uploadType: h.HL.AVATAR,
        analyticsSource: _,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(S ? f && y : T || j || y)) return (0, i.jsx)(g.kL, {
        variant: "square",
        onClick: R,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        children: (0, i.jsx)(l.euF, {
            src: v,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let P = C ? {
        onClick: () => {
            (0, u.p)({
                guildId: t ?? void 0,
                avatar: null
            }), (0, o.WU)(N ? "reset" : "remove")
        },
        type: N ? "reset" : "remove",
        accessibleLabel: m.intl.string(N ? m.t.Y0mxy1 : m.t.twB3fz)
    } : void 0;
    return (0, i.jsx)(g.NW, {
        variant: "square",
        onClick: R,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        deleteButtonConfig: P,
        children: (0, i.jsx)(l.euF, {
            src: v,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function I(e) {
    let {
        guildId: n
    } = e, t = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(f, {
        user: t,
        guildId: n
    })
}