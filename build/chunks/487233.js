/** chunk id: 487233 params = (module,exports,require) **/
l.d(t, {
    m: () => g
});
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927),
    i = l(688810),
    o = l(919395),
    s = l(385612),
    u = l(101058),
    d = l(696451),
    c = l(287809),
    p = l(84540),
    m = l(836602),
    h = l(854627),
    x = l(930349),
    b = l(339984),
    f = l(985018);

function y(e) {
    let {
        user: t,
        guildId: l
    } = e, {
        newestAnalyticsLocation: c
    } = (0, i.Ay)(), y = null != l, g = (0, n.bG)([d.Ay], () => null != l ? d.Ay.getMember(l, t.id) : null), v = (0, n.bG)([m.A], () => m.A.getPendingChanges(l ?? void 0).pendingAvatar), E = (0, u.V7)({
        userId: t.id,
        image: v
    }), {
        avatarSrc: _
    } = (0, h.A)({
        userId: t.id,
        guildId: l,
        avatarOverride: E,
        size: r._3J.SIZE_56
    }), C = y ? g?.avatar : t.avatar, j = null != t.avatar, S = y && g?.avatar != null, T = null != v, A = null === v, P = (0, o.z5)(v, C), k = () => (0, s.XD)({
        uploadType: b.HL.AVATAR,
        analyticsSource: c,
        guildId: l ?? void 0,
        stackingBehavior: "stack"
    });
    if (!(A ? y && j : T || S || j)) return (0, a.jsx)(x.k, {
        variant: "square",
        onClick: k,
        accessibleLabel: f.intl.string(f.t["4OynCD"]),
        children: (0, a.jsx)(r.euF, {
            src: _,
            size: r._3J.SIZE_56,
            "aria-hidden": !0
        })
    });
    let I = y && j,
        R = P ? {
            onClick: () => {
                (0, p.p)({
                    guildId: l ?? void 0,
                    avatar: null
                }), (0, o.WU)(null)
            },
            type: I ? "reset" : "remove",
            accessibleLabel: f.intl.string(I ? f.t.GaEG4t : f.t["2A+piL"])
        } : void 0;
    return (0, a.jsx)(x.N, {
        variant: "square",
        onClick: k,
        accessibleLabel: f.intl.string(f.t["4OynCD"]),
        deleteButtonConfig: R,
        children: (0, a.jsx)(r.euF, {
            src: _,
            size: r._3J.SIZE_56,
            "aria-hidden": !0
        })
    })
}

function g(e) {
    let {
        guildId: t
    } = e, l = (0, n.bG)([c.default], () => c.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(y, {
        user: l,
        guildId: t
    })
}