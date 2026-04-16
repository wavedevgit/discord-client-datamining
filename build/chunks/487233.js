/** chunk id: 487233 params = (module,exports,require) **/
t.d(n, {
    A: () => m
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
    u = t(84540),
    _ = t(836602),
    p = t(854627),
    A = t(930349),
    g = t(339984),
    f = t(985018);
let h = l._3J.SIZE_72;

function m(e) {
    let {
        user: n,
        guildId: t,
        disabled: m
    } = e, {
        newestAnalyticsLocation: x
    } = (0, r.Ay)(), I = null != t, b = (0, a.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n.id) : null), v = (0, a.bG)([_.A], () => _.A.getPendingChanges(t ?? void 0).pendingAvatar), E = (0, o.V7)({
        userId: n.id,
        image: v
    }), {
        avatarSrc: j
    } = (0, p.A)({
        userId: n.id,
        guildId: t,
        avatarOverride: E,
        size: h
    }), y = I ? b?.avatar : n.avatar, T = null != n.avatar, S = I && b?.avatar != null, N = null != v, C = null === v, R = (0, d.z5)(v, y), P = I && T, L = () => (0, s.XD)({
        uploadType: g.HL.AVATAR,
        analyticsSource: x,
        guildId: t ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(C ? I && T : N || S || T)) return (0, i.jsx)(A.kL, {
        variant: "square",
        onClick: L,
        accessibleLabel: f.intl.string(f.t["4OynCD"]),
        disabled: m,
        children: (0, i.jsx)(l.euF, {
            src: j,
            size: h,
            "aria-hidden": !0
        })
    });
    let O = R ? {
        onClick: () => {
            (0, u.p)({
                guildId: t ?? void 0,
                avatar: null
            }), (0, d.WU)(P ? "reset" : "remove")
        },
        type: P ? "reset" : "remove",
        accessibleLabel: f.intl.string(P ? f.t.Y0mxy1 : f.t.twB3fz)
    } : void 0;
    return (0, i.jsx)(A.NW, {
        variant: "square",
        onClick: L,
        accessibleLabel: f.intl.string(f.t["4OynCD"]),
        deleteButtonConfig: O,
        disabled: m,
        children: (0, i.jsx)(l.euF, {
            src: j,
            size: h,
            "aria-hidden": !0
        })
    })
}