/** chunk id: 487233 params = (module,exports,require) **/
i.d(n, {
    m: () => f
});
var t = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(688810),
    r = i(919395),
    d = i(385612),
    o = i(101058),
    c = i(696451),
    u = i(287809),
    _ = i(84540),
    A = i(836602),
    p = i(854627),
    x = i(930349),
    g = i(339984),
    m = i(985018);

function I(e) {
    let {
        user: n,
        guildId: i
    } = e, {
        newestAnalyticsLocation: u
    } = (0, s.Ay)(), I = null != i, f = (0, a.bG)([c.Ay], () => null != i ? c.Ay.getMember(i, n.id) : null), b = (0, a.bG)([A.A], () => A.A.getPendingChanges(i ?? void 0).pendingAvatar), h = (0, o.V7)({
        userId: n.id,
        image: b
    }), {
        avatarSrc: v
    } = (0, p.A)({
        userId: n.id,
        guildId: i,
        avatarOverride: h,
        size: l._3J.SIZE_56
    }), j = I ? f?.avatar : n.avatar, C = null != n.avatar, y = I && f?.avatar != null, N = null != b, E = null === b, T = (0, r.z5)(b, j), L = () => (0, d.XD)({
        uploadType: g.HL.AVATAR,
        analyticsSource: u,
        guildId: i ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(E ? I && C : N || y || C)) return (0, t.jsx)(x.k, {
        variant: "square",
        onClick: L,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        children: (0, t.jsx)(l.euF, {
            src: v,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let P = I && C,
        O = T ? {
            onClick: () => {
                (0, _.p)({
                    guildId: i ?? void 0,
                    avatar: null
                }), (0, r.WU)(null)
            },
            type: P ? "reset" : "remove",
            accessibleLabel: m.intl.string(P ? m.t.GaEG4t : m.t["2A+piL"])
        } : void 0;
    return (0, t.jsx)(x.N, {
        variant: "square",
        onClick: L,
        accessibleLabel: m.intl.string(m.t["4OynCD"]),
        deleteButtonConfig: O,
        children: (0, t.jsx)(l.euF, {
            src: v,
            size: l._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function f(e) {
    let {
        guildId: n
    } = e, i = (0, a.bG)([u.default], () => u.default.getCurrentUser());
    return null == i ? null : (0, t.jsx)(I, {
        user: i,
        guildId: n
    })
}