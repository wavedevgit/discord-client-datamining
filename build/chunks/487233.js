/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    A: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(688810),
    d = t(919395),
    s = t(385612),
    o = t(101058),
    c = t(696451),
    _ = t(84540),
    u = t(836602),
    p = t(854627),
    A = t(930349),
    g = t(339984),
    m = t(985018);

function f(e) {
    let {
        user: n,
        guildId: t,
        disabled: f
    } = e, {
        newestAnalyticsLocation: h
    } = (0, r.Ay)(), I = null != t, x = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), b = (0, a.bG)([u.A], () => u.A.getPendingChanges(t ?? void 0).pendingAvatar), v = (0, o.V7)({
        userId: n.id,
        image: b
    }), {
        avatarSrc: E
    } = (0, p.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: v,
        size: l._3J.SIZE_56
    }), y = I ? x?.avatar : n.avatar, j = null != n.avatar, T = I && x?.avatar != null, N = null != b, S = null === b, C = (0, d.z5)(b, y), R = I && j, P = () => (0, s.XD)({
        uploadType: g.HL.AVATAR,
        analyticsSource: h,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(S ? I && j : N || T || j)) return (0, i.jsx)(A.kL, {
        variant: "square",
        onClick: P,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        disabled: f,
        children: (0, i.jsx)(l.euF, {
            src: E,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let L = C ? {
        onClick: () => {
            (0, _.p)({
                guildId: t ?? void 0,
                avatar: null
            }), (0, d.WU)(R ? "reset" : "remove")
        },
        type: R ? "reset" : "remove",
        accessibleLabel: m.intl.string(R ? m.t.Y0mxy1 : m.t.twB3fz)
    } : void 0;
    return (0, i.jsx)(A.NW, {
        variant: "square",
        onClick: P,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        deleteButtonConfig: L,
        disabled: f,
        children: (0, i.jsx)(l.euF, {
            src: E,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}